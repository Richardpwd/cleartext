export default function Header({ theme, onToggleTheme }) {
  return (
    <section className="hero-card">
      <div>
        <p className="eyebrow">Bem-vindo ao ResolveTexto</p>
        <h2>Edite, refine e transforme seu conteúdo com facilidade.</h2>
        <p className="subtitle">Use as ações abaixo para melhorar seu texto sem esforço.</p>
      </div>
      <button className="theme-toggle" onClick={onToggleTheme}>
        {theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
      </button>
    </section>
  );
}
