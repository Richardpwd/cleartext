import { useMemo, useState } from 'react';
import Header from '../components/Header';
import TextEditor from '../components/TextEditor';
import ResultBox from '../components/ResultBox';
import AdPlaceholder from '../components/AdPlaceholder';
import Footer from '../components/Footer';

// As rotas já estão preparadas para uma futura integração com IA no backend.
const apiRoutes = {
  summarize: '/api/text/summarize',
  correct: '/api/text/correct',
  formal: '/api/text/formal',
  simple: '/api/text/simple',
  whatsapp: '/api/text/whatsapp',
};

function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function Home() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [theme, setTheme] = useState('light');

  const stats = useMemo(() => ({
    words: countWords(result || text),
    characters: (result || text).length,
  }), [result, text]);

  async function handleAction(action) {
    setMessage('');
    setLoading(true);

    try {
      const response = await fetch(apiRoutes[action], {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Falha ao processar o texto');
      }

      setResult(data.result);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  function handleCopy() {
    if (!result) {
      return;
    }
    navigator.clipboard.writeText(result);
    setMessage('Resultado copiado para a área de transferência.');
  }

  function handleClear() {
    setText('');
    setResult('');
    setMessage('');
  }

  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  return (
    <div className={`page-layout ${theme}`}>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <AdPlaceholder position="top-banner" />

      <div className="main-grid">
        <TextEditor value={text} onChange={setText} onSubmit={handleAction} disabled={loading} />
        <ResultBox result={result} onCopy={handleCopy} onClear={handleClear} stats={stats} />
      </div>

      {message && <p className="status-message">{message}</p>}

      <AdPlaceholder position="bottom-banner" />
      <Footer />
    </div>
  );
}

export default Home;
