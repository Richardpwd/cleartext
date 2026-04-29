import { useState } from 'react';

export default function TextEditor({ value, onChange, onSubmit, disabled }) {
  const [error, setError] = useState('');

  function handleSubmit(action) {
    if (!value.trim()) {
      setError('Digite ou cole um texto antes de escolher uma ação.');
      return;
    }

    setError('');
    onSubmit(action);
  }

  return (
    <div className="card editor-card">
      <label htmlFor="text-input" className="input-label">
        Texto para melhorar
      </label>
      <textarea
        id="text-input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows="10"
        placeholder="Cole seu texto aqui..."
      />

      <div className="actions-grid">
        <button type="button" onClick={() => handleSubmit('summarize')} disabled={disabled}>
          Resumir texto
        </button>
        <button type="button" onClick={() => handleSubmit('correct')} disabled={disabled}>
          Corrigir erros
        </button>
        <button type="button" onClick={() => handleSubmit('formal')} disabled={disabled}>
          Deixar mais formal
        </button>
        <button type="button" onClick={() => handleSubmit('simple')} disabled={disabled}>
          Deixar mais simples
        </button>
        <button type="button" onClick={() => handleSubmit('whatsapp')} disabled={disabled}>
          Transformar em WhatsApp
        </button>
      </div>

      {error && <p className="text-error">{error}</p>}
    </div>
  );
}
