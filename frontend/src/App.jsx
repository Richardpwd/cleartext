import { Routes, Route, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));

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
        <Suspense fallback={<div className="loading-screen">Carregando...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
