import React, { useState, useEffect } from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react';
import Flat from './components/flat';
import Marker from './components/marker';

const App = () => {
  const [flats, setFlats] = useState([]);
  const [selectedFlat, setSelectedFlat] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
      .then(response => response.json())
      .then(data => setFlats(data));
  }, []);

  const selectFlat = (flat) => {
    console.log(flat);
    setSelectedFlat(flat);
  }

  const center = selectedFlat ? { lat: selectedFlat.lat, lng: selectedFlat.lng } : { lat: 48.8575, lng: 2.3514 };

  return (
    <div className="app">
      <div className="main">
        <div className="search">
        </div>
        <div className="flats">
          {flats.map(flat => (
            <Flat
              key={flat.name}
              flat={flat}
              selectFlat={selectFlat}
            />
          ))}
        </div>
      </div>
      <div className="map">
        <GoogleMapReact
          center={center}
          zoom={11}
        >
          {flats.map(flat => (
            <Marker
              key={flat.name}
              lat={flat.lat}
              lng={flat.lng}
              text={flat.price}
              selected={flat === selectedFlat?.name}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default App;
