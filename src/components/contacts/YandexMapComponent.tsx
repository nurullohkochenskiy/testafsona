import { useEffect, useRef } from "react";
import "../../styles/contacts.scss";
declare global {
  interface Window {
    ymaps: any;
  }
}

const YandexMapComponent: React.FC = () => {
  const mapRef = useRef<any>(null); // Ref to track if the map is already initialized

  useEffect(() => {
    const loadYandexScript = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        const existingScript = document.querySelector(
          'script[src="https://api-maps.yandex.ru/2.1/?lang=uz_UZ"]'
        );
        if (!existingScript) {
          const script = document.createElement("script");
          script.src = "https://api-maps.yandex.ru/2.1/?lang=uz_UZ";
          script.type = "text/javascript";
          script.onload = () => {
            // console.log("Yandex Maps API script loaded.");
            resolve();
          };
          script.onerror = () => {
            // console.error("Yandex Maps API script failed to load.");
            // reject(new Error("Failed to load Yandex Maps API"));
          };
          document.body.appendChild(script);
        } else {
          // console.log("Yandex Maps API script already exists.");
          resolve();
        }
      });
    };

    const initMap = () => {
      if (!mapRef.current && window.ymaps && typeof window.ymaps.Map === "function") {
        // console.log("Yandex Maps API ready, initializing map...");
        mapRef.current = new window.ymaps.Map("map", {
          center: [40.860049, 71.462731], // Tashkent
          zoom: 10,
        });

        const placemark = new window.ymaps.Placemark([40.860049, 71.462731], {
          balloonContent: "Tashkent",
        });
        mapRef.current.geoObjects.add(placemark);
      } else if (mapRef.current) {
        // console.log("Map is already initialized.");
      } else {
        // console.error("window.ymaps.Map is not a constructor.");
      }
    };

    if (typeof window !== "undefined") {
      loadYandexScript()
        .then(() => {
          if (window.ymaps) {
            window.ymaps.ready(initMap);
          } else {
            // console.error(
            //   "Yandex Maps API is not available after loading the script."
            // );
          }
        })
        .catch((err) => {
          // console.error("Error loading Yandex Maps:", err);
        });
    }

    return () => {
      const existingScript = document.querySelector(
        'script[src="https://api-maps.yandex.ru/2.1/?lang=uz_UZ"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return <div id="map" className="w-[calc(((100%/12)*8)-32px)]" style={{ height: "422px" }}></div>;
};

export default YandexMapComponent;
