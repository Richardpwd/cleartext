import { useEffect } from 'react';

const ADSENSE_CLIENT_ID = 'ca-pub-3497814867552997';
const AD_SLOTS = {
  'top-banner': '1234567890',
  'bottom-banner': '0987654321',
};

export default function AdPlaceholder({ position }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.warn('AdSense push failed:', error);
      }
    }
  }, []);

  return (
    <div className={`ad-placeholder ${position}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={AD_SLOTS[position]}
        data-ad-format="auto"
        data-full-width-responsive="true"
        aria-label="Anúncio Google AdSense"
      />
    </div>
  );
}
