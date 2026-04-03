import { useState, useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabase';
import './client-assets.scss';

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export default function ClientAssets() {
  const [checklist, setChecklist] = useState(null);
  const [checklistId, setChecklistId] = useState(null);
  const [projectId, setProjectId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState({});

  useEffect(() => {
    async function init() {
      const { data: project } = await supabase.from('projects').select('id').limit(1).single();
      if (!project) { setLoading(false); return; }
      setProjectId(project.id);

      const { data } = await supabase
        .from('asset_checklists')
        .select('*')
        .eq('project_id', project.id)
        .single();

      if (data) {
        setChecklist(data.items || []);
        setChecklistId(data.id);
      }
      setLoading(false);
    }
    init();
  }, []);

  const handleUpload = async (itemIndex, file) => {
    const item = checklist[itemIndex];

    // Validate size
    if (file.size > MAX_FILE_SIZE) {
      alert(`File too large. Maximum size is 50MB.`);
      return;
    }

    // Validate type
    if (item.accepts) {
      const acceptedTypes = item.accepts.split(',').map(t => t.trim());
      const ext = '.' + file.name.split('.').pop().toLowerCase();
      const mimeMatch = acceptedTypes.some(t => file.type === t || t === ext);
      if (!mimeMatch) {
        alert(`Invalid file type. Accepted: ${item.accepts}`);
        return;
      }
    }

    setUploading(prev => ({ ...prev, [itemIndex]: true }));

    try {
      const safeName = item.name.replace(/[^a-zA-Z0-9-_]/g, '_');
      const path = `${projectId}/${safeName}/${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from('client-assets')
        .upload(path, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from('client-assets')
        .getPublicUrl(path);

      const updatedItems = [...checklist];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        status: 'uploaded',
        file_url: urlData.publicUrl,
        file_name: file.name,
        uploaded_at: new Date().toISOString(),
      };

      await supabase
        .from('asset_checklists')
        .update({ items: updatedItems })
        .eq('id', checklistId);

      setChecklist(updatedItems);
    } catch (err) {
      console.error('Upload failed:', err);
      alert('Upload failed. Please try again.');
    } finally {
      setUploading(prev => ({ ...prev, [itemIndex]: false }));
    }
  };

  if (loading) {
    return (
      <div className="client-assets">
        <h2>Assets</h2>
        <div className="client-assets__list">
          {[1, 2, 3].map(i => (
            <div key={i} className="portal-card client-assets__skeleton">
              <div className="skeleton-line skeleton-line--short" />
              <div className="skeleton-line skeleton-line--wide" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!checklist) {
    return (
      <div className="client-assets">
        <h2>Assets</h2>
        <div className="client-assets__empty portal-card">
          <p>Your asset checklist will appear here once onboarding is set up.</p>
        </div>
      </div>
    );
  }

  const uploaded = checklist.filter(i => i.status === 'uploaded' || i.status === 'received').length;

  return (
    <div className="client-assets">
      <div className="client-assets__header">
        <h2>Assets</h2>
        <span className="client-assets__count">{uploaded} of {checklist.length} submitted</span>
      </div>

      <div className="portal-progress client-assets__progress">
        <div
          className="portal-progress__fill portal-progress__fill--teal"
          style={{ width: `${checklist.length > 0 ? (uploaded / checklist.length) * 100 : 0}%` }}
        />
      </div>

      <div className="client-assets__list">
        {checklist.map((item, idx) => (
          <AssetItem
            key={idx}
            item={item}
            index={idx}
            isUploading={!!uploading[idx]}
            onUpload={handleUpload}
          />
        ))}
      </div>
    </div>
  );
}

function AssetItem({ item, index, isUploading, onUpload }) {
  const fileRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) onUpload(index, file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) onUpload(index, file);
    e.target.value = '';
  };

  const isUploaded = item.status === 'uploaded' || item.status === 'received';

  return (
    <div className={`portal-card asset-item asset-item--${item.status}`}>
      <div className="asset-item__header">
        <div className="asset-item__info">
          <h4 className="asset-item__name">
            {item.name}
            {item.required && <span className="asset-item__required">*</span>}
          </h4>
          {item.description && <p className="asset-item__desc">{item.description}</p>}
        </div>
        <span className={`portal-badge portal-badge--${statusBadge(item.status)}`}>
          {item.status === 'received' ? '✓ Received' : item.status === 'uploaded' ? 'Uploaded' : 'Pending'}
        </span>
      </div>

      {isUploaded && (
        <div className="asset-item__file">
          <span className="asset-item__filename">{item.file_name}</span>
          <span className="asset-item__date">{new Date(item.uploaded_at).toLocaleDateString()}</span>
        </div>
      )}

      <div
        className={`asset-item__dropzone ${dragOver ? 'asset-item__dropzone--active' : ''} ${isUploading ? 'asset-item__dropzone--uploading' : ''}`}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => !isUploading && fileRef.current?.click()}
      >
        <input ref={fileRef} type="file" hidden onChange={handleFileChange} accept={item.accepts || undefined} />
        {isUploading ? (
          <span className="asset-item__uploading">Uploading...</span>
        ) : (
          <span className="asset-item__droptext">
            {isUploaded ? 'Drop file to replace' : 'Drop file here or click to browse'}
          </span>
        )}
      </div>
    </div>
  );
}

function statusBadge(s) {
  return { received: 'teal', uploaded: 'amber', pending: 'blue' }[s] || 'blue';
}
