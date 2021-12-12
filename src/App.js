import './App.css';
import Forecast from './Forecast/Forecast';
import Navbar from './Nav/Navbar';
import Sidebar from './Sidebar/Sidebar';

function App() {
  //const apiKey='d85052c6489309d8dd2e383d6df86fcd';
  //let url = 'api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}';
  return (
    <div className="App row-fluid parent">
       <Navbar />
       <Forecast />
       <div className="head">
         <h5>Today's Highlights</h5>
       </div>
       <Sidebar />
      
    </div>
  );
}

export default App;
