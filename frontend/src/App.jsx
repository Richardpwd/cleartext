import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <h1>ResolveTexto</h1>
          <p>Melhore seus textos em segundos</p>
        </div>
        <nav className="nav-links">
          <Link to="/">Início</Link>
          <Link to="/privacy">Política de Privacidade</Link>
          <Link to="/terms">Termos de Uso</Link>
        </nav>
      </header>

      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
