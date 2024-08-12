import React, { useState, useEffect } from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react';
import Flat from './components/flat';
import Marker from './components/marker';

const App = () => {
  const [flats, setFlats] = useState([]);
  const [selectedFlat, setSelectedFlat] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
      .then(response => response.json())
      .then(data => setFlats(data));
  }, []);

  const selectFlat = (flat) => {
    console.log(flat);
    setSelectedFlat(flat);
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredFlats = flats.filter(flat =>
    flat.name.toLowerCase().includes(search.toLowerCase())
  );

  const center = selectedFlat ? { lat: selectedFlat.lat, lng: selectedFlat.lng } : { lat: 48.8575, lng: 2.3514 };

  return (
    <div className="app">
      <div className="main">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div className="flats">
          {filteredFlats.map(flat => (
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
          {filteredFlats.map(flat => (
            <Marker
              key={flat.name}
              lat={flat.lat}
              lng={flat.lng}
              text={flat.price}
              selected={flat.name === selectedFlat?.name} // Compare by name
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default App;
