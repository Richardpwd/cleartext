export default function ResultBox({ result, onCopy, onClear, stats }) {
  return (
    <div className="card result-card">
      <div className="result-header">
        <h3>Resultado</h3>
        <div className="result-actions">
          <button type="button" onClick={onCopy} disabled={!result}>
            Copiar resultado
          </button>
          <button type="button" onClick={onClear}>Limpar tudo</button>
        </div>
      </div>
      <textarea readOnly value={result || ''} rows="10" placeholder="O resultado aparecerá aqui..." />
      <div className="stats-row">
        <span>Palavras: {stats.words}</span>
        <span>Caracteres: {stats.characters}</span>
      </div>
    </div>
  );
}
