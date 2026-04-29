import Footer from '../components/Footer';

export default function Terms() {
  return (
    <div className="page-layout page-document">
      <section className="card document-card">
        <h2>Termos de Uso</h2>
        <p>O ResolveTexto oferece sugestões de texto com lógica simples e não substitui um revisor humano.</p>
        <p>Os resultados devem ser revisados antes da publicação ou compartilhamento.</p>
        <p>O serviço não exige login e não salva textos dos usuários por padrão.</p>
        <p>Ao utilizar o ResolveTexto, você concorda com o uso responsável das sugestões exibidas.</p>
      </section>
      <Footer />
    </div>
  );
}
