'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface CountryMarker {
  country: string;
  lat: number;
  lng: number;
  color: string;
}

export function InteractiveGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [Globe, setGlobe] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const countries: CountryMarker[] = [
    { country: 'Sri Lanka', lat: 7.8731, lng: 80.7718, color: '#059669' },
    { country: 'Maldives', lat: 3.2028, lng: 73.2207, color: '#059669' },
    { country: 'Seychelles', lat: -4.6796, lng: 55.4920, color: '#059669' },
    { country: 'Dubai', lat: 25.2048, lng: 55.2708, color: '#059669' },
    { country: 'Vietnam', lat: 14.0583, lng: 108.2772, color: '#059669' },
    { country: 'Bangladesh', lat: 23.6850, lng: 90.3563, color: '#059669' },
    { country: 'Nepal', lat: 28.3949, lng: 84.1240, color: '#059669' },
  ];

  useEffect(() => {
    const loadGlobe = async () => {
      try {
        const { default: Globe } = await import('react-globe.gl');
        setGlobe(() => Globe);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading Globe:', error);
        setIsLoading(false);
      }
    };

    loadGlobe();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full min-h-[500px] flex items-center justify-center">
        <div className="relative">
          <div className="w-32 h-32 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm text-muted-foreground">
            Loading Globe...
          </div>
        </div>
      </div>
    );
  }

  if (!Globe) {
    return (
      <div className="w-full h-full min-h-[500px] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-8 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl max-w-md mx-auto"
        >
          <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
            <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full"></div>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Asia Pacific Operations</h3>
          <p className="text-muted-foreground mb-4">Serving hospitality clients across 7 countries</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {countries.map((country, index) => (
              <div
                key={country.country}
                className="flex items-center space-x-2 p-2 rounded-lg bg-white/50 dark:bg-gray-700/50"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: country.color }}
                ></div>
                <span>{country.country}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-full min-h-[500px] flex items-center justify-center"
      ref={mountRef}
    >
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        backgroundColor="rgba(0,0,0,0)"
        pointsData={countries}
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointAltitude={0.02}
        pointRadius={1.0}
        pointLabel="country"
        width={Math.min(window?.innerWidth * 0.45, 600)}
        height={Math.min(window?.innerHeight * 0.7, 600)}
        animateIn={true}
        showAtmosphere={true}
        atmosphereColor="#60A5FA"
        atmosphereAltitude={0.12}
        enablePointerInteraction={true}
      />
    </motion.div>
  );
}