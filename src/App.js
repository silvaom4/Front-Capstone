import logo from './logo.svg';
import './App.css';
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";
import CotntSum from './components/CotntSum';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<CotntSum />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>

          </Routes>
          
          
        </div>
      </Router>
    </div>
  );
}

export default App;
