import { useState, useEffect, useMemo } from 'react';
import { supabase } from '../../lib/supabase';
import { getKnowledgeBase } from '../../data/knowledge-base/index';
import './client-resources.scss';

export default function ClientResources() {
  const [projectType, setProjectType] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState({});

  useEffect(() => {
    async function init() {
      const { data: project } = await supabase.from('projects').select('type').limit(1).single();
      setProjectType(project?.type || null);
      setLoading(false);
    }
    init();
  }, []);

  const kb = useMemo(() => getKnowledgeBase(projectType), [projectType]);

  const filteredFaqs = useMemo(() => {
    if (!searchQuery.trim()) return kb.faqs;
    const q = searchQuery.toLowerCase();
    return kb.faqs.filter(f => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q));
  }, [kb.faqs, searchQuery]);

  const filteredGuide = useMemo(() => {
    if (!kb.guide || !searchQuery.trim()) return kb.guide;
    const q = searchQuery.toLowerCase();
    const filtered = kb.guide.sections?.filter(s =>
      s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q)
    );
    return filtered?.length ? { ...kb.guide, sections: filtered } : null;
  }, [kb.guide, searchQuery]);

  const toggleItem = (id) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  if (loading) {
    return (
      <div className="client-resources">
        <h2>Resources</h2>
        <div className="portal-card client-resources__skeleton">
          {[1, 2, 3].map(i => <div key={i} className="skeleton-line skeleton-line--wide" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="client-resources">
      <h2>Resources</h2>

      <div className="client-resources__search">
        <input
          className="portal-input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search resources..."
        />
      </div>

      {/* Project-type guide (shown first if available) */}
      {filteredGuide && (
        <div className="client-resources__section">
          <h3>{filteredGuide.title}</h3>
          <p className="client-resources__section-desc">{filteredGuide.description}</p>
          <div className="client-resources__accordion-list">
            {filteredGuide.sections.map((section, idx) => {
              const id = `guide-${idx}`;
              return (
                <div key={id} className={`accordion-item ${openItems[id] ? 'accordion-item--open' : ''}`}>
                  <button className="accordion-item__trigger" onClick={() => toggleItem(id)}>
                    <span>{section.title}</span>
                    <span className="accordion-item__chevron">&#9662;</span>
                  </button>
                  {openItems[id] && (
                    <div className="accordion-item__content">
                      <p>{section.content}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Base FAQs */}
      <div className="client-resources__section">
        <h3>Frequently Asked Questions</h3>
        {filteredFaqs.length === 0 ? (
          <p className="client-resources__no-results">No results found for "{searchQuery}"</p>
        ) : (
          <div className="client-resources__accordion-list">
            {filteredFaqs.map((faq, idx) => {
              const id = `faq-${idx}`;
              return (
                <div key={id} className={`accordion-item ${openItems[id] ? 'accordion-item--open' : ''}`}>
                  <button className="accordion-item__trigger" onClick={() => toggleItem(id)}>
                    <span>{faq.question}</span>
                    <span className="accordion-item__chevron">&#9662;</span>
                  </button>
                  {openItems[id] && (
                    <div className="accordion-item__content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
