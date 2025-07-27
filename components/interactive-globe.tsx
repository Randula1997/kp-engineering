'use client';

import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

const countriesToHighlight = ['Sri Lanka', 'Maldives', 'Seychelles', 'Dubai', 'Vietnam', 'Bangladesh', 'Nepal'];

export function InteractiveGlobe() {
  const globeRef = useRef();

  useEffect(() => {
    if (!globeRef.current) return;
    // @ts-ignore
    const controls = globeRef.current.controls();
    controls.enableRotate = false;
    controls.enableZoom = false;
    controls.enablePan = false;

    const asiaCoords = { lat: 20, lng: 90, altitude: 1.5 };

    setTimeout(() => {
      // @ts-ignore
      globeRef.current.pointOfView(asiaCoords, 4000);
    }, 500);
  }, []);

  return (
    <div className="w-full h-full">
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={false}
        hexPolygonsData={[]}
        labelsData={countriesToHighlight.map((name) => ({ name }))}
        labelLat={(d) => {
          // @ts-ignore
          switch (d.name) {
            case 'Sri Lanka': return 7.8731;
            case 'Maldives': return 3.2028;
            case 'Seychelles': return -4.6796;
            case 'Dubai': return 25.2048;
            case 'Vietnam': return 14.0583;
            case 'Bangladesh': return 23.6850;
            case 'Nepal': return 28.3949;
            default: return 0;
          }
        }}
        labelLng={(d) => {
          // @ts-ignore
          switch (d.name) {
            case 'Sri Lanka': return 80.7718;
            case 'Maldives': return 73.2207;
            case 'Seychelles': return 55.4920;
            case 'Dubai': return 55.2708;
            case 'Vietnam': return 108.2772;
            case 'Bangladesh': return 90.3563;
            case 'Nepal': return 84.1240;
            default: return 0;
          }
        }}
        // @ts-ignore
        labelText={(d) => d.name}
        labelSize={1.2}
        labelDotRadius={0.4}
        labelColor={() => 'orange'}
        labelResolution={2}
        width={700}
        height={700}
      />
    </div>
  );
}

export default InteractiveGlobe;
