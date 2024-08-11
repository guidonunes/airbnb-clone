import './App.css';
import Flat from './components/flat';

class App {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }

  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat flat={flat} />;
            })}
          </div>
        </div>
        <div className="map">
        </div>
      </div>
    );
  }
}

export default App;
