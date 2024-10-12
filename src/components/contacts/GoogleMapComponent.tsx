import { useTranslations } from 'next-intl';
import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    google: any;
  }
}

const GoogleMapComponent = () => {
  const t = useTranslations("ContactsPage")
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (!document.querySelector(`script[src="https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}"]`)) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          if (mapRef.current) {
            const map = new window.google.maps.Map(mapRef.current, {
              center: { lat: 40.860049, lng: 71.462731 },
              zoom: 15,
              gestureHandling: 'cooperative',
            });

            // Add a marker
            new window.google.maps.Marker({
              position: { lat: 40.860049, lng: 71.462731 },
              map: map,
              title: 'Hello World!',
            });
          }
        };
        document.body.appendChild(script);
      }
    };

    if (typeof window !== 'undefined') {
      loadGoogleMapsScript();
    }
  }, []);

  const openGoogleMaps = () => {
    const lat = 40.860049;
    const lng = 71.462731;
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, '_blank');
  };

  return (
    <div id="map" style={{ position: 'relative', height: '422px' }} className='w-[calc(((100%/12)*8)-32px)]'>
      <div ref={mapRef} className='w-full' style={{ height: '100%' }} />
      <button
        onClick={openGoogleMaps}
        className='p-2 bg-blue-500 text-white rounded'
        style={{
          position: 'absolute',
          bottom: '-40px',
          right: '0px',
        }}
      >
       {t("route")}
      </button>
    </div>
  );
};

export default GoogleMapComponent;
