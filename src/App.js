import logo from './logo.svg';
import './App.css';
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";
import CotntSum from './components/CotntSum';
import Login from './components/Login';
import Register from './components/Register';
import Forum from './components/Forum';
import AboutUs from './Pages/AboutUs';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";


function App() {
  return (
    <div className="App">

      {/* <CotntSum /> */}
      {/* <AboutUs /> */}
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<CotntSum />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/forum" element={<Forum />}></Route>
            <Route path="/contact" element={<Contact />}></Route>

          </Routes>
          
          
        </div>
      </Router>
    </div>
  );
}

export default App;
