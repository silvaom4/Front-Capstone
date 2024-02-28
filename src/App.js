import logo from './logo.svg';
import './App.css';
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";
import CotntSum from './components/CotntSum';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <div className="App">
      {/* <CotntSum /> */}
      <AboutUs />
    </div>
  );
}

export default App;
