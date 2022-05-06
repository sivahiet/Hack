import './App.css';
import Home from './Home/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import DashBoard from './Dashboard/DashBoard';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
