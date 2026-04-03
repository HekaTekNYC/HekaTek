import './questionnaire-renderer.scss';

export default function QuestionnaireRenderer({ fields, answers, onChange, onBlur }) {
  return (
    <div className="questionnaire-renderer">
      {fields.map((field) => (
        <div key={field.id} className="portal-form-group">
          <label className="portal-label" htmlFor={field.id}>
            {field.label}
            {field.required && <span className="qr-required">*</span>}
          </label>

          {field.type === 'text' && (
            <input
              id={field.id}
              className="portal-input"
              type="text"
              value={answers[field.id] || ''}
              onChange={(e) => onChange(field.id, e.target.value)}
              onBlur={() => onBlur?.(field.id)}
              placeholder={field.placeholder || ''}
            />
          )}

          {field.type === 'textarea' && (
            <textarea
              id={field.id}
              className="portal-input qr-textarea"
              value={answers[field.id] || ''}
              onChange={(e) => onChange(field.id, e.target.value)}
              onBlur={() => onBlur?.(field.id)}
              placeholder={field.placeholder || ''}
              rows={4}
            />
          )}

          {field.type === 'select' && (
            <select
              id={field.id}
              className="portal-select"
              value={answers[field.id] || ''}
              onChange={(e) => onChange(field.id, e.target.value)}
              onBlur={() => onBlur?.(field.id)}
            >
              <option value="">{field.placeholder || 'Select an option'}</option>
              {(field.options || []).map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          )}

          {field.type === 'multi_select' && (
            <div className="qr-checkbox-group">
              {(field.options || []).map((opt) => {
                const checked = (answers[field.id] || []).includes(opt);
                return (
                  <label key={opt} className="qr-checkbox">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => {
                        const current = answers[field.id] || [];
                        const next = checked ? current.filter(v => v !== opt) : [...current, opt];
                        onChange(field.id, next);
                      }}
                    />
                    <span>{opt}</span>
                  </label>
                );
              })}
            </div>
          )}

          {field.type === 'checkbox' && (
            <label className="qr-checkbox">
              <input
                type="checkbox"
                checked={!!answers[field.id]}
                onChange={(e) => onChange(field.id, e.target.checked)}
              />
              <span>{field.placeholder || 'Yes'}</span>
            </label>
          )}
        </div>
      ))}
    </div>
  );
}
