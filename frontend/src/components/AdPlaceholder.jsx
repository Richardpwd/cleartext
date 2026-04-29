export default function AdPlaceholder({ position }) {
  return (
    <div className={`ad-placeholder ${position}`}>
      <div className="ad-label">Espaço para anúncio</div>
      <p>Coloque aqui um banner ou bloco de anúncios.</p>
      <small>Adicione Google AdSense futuramente neste componente.</small>
    </div>
  );
}
