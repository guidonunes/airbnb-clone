import React, { Component } from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react';
import Flat from './components/flat';
import Marker from './components/marker';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data
        });
      });
  };

  selectFlat = (flat) => {

  };

  render() {
    const center = {
        lat: 48.8575,
        lng: 2.3514
      };
    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat
                key={flat.name}
                flat={flat}
                handleClick={} />;
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
            center={center}
            zoom={11}
          >
          {this.state.flats.map((flat) => {
              return <Marker key={flat.name} lat={flat.lat} lng={flat.lng} text={flat.price} />;
            })}
          </GoogleMapReact>


        </div>
      </div>
    );
  }
}

export default App;
