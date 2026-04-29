import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="page-layout page-document">
      <section className="card document-card">
        <h2>Política de Privacidade</h2>
        <p>O ResolveTexto é uma ferramenta auxiliar que não salva o texto digitado pelos usuários por padrão.</p>
        <p>As rotas do backend recebem apenas o texto necessário para processar a ação e retornam o resultado.</p>
        <p>Se o serviço de estatísticas estiver ativado, serão registradas apenas informações básicas de uso:</p>
        <ul>
          <li>tipo de ação utilizada</li>
          <li>data da utilização</li>
        </ul>
        <p>Nenhum conteúdo sensível é armazenado e nenhum texto enviado é salvo no banco de dados.</p>
      </section>
      <Footer />
    </div>
  );
}
