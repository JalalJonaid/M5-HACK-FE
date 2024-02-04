import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home.jsx';
import './App.css';
import NavBar from './components/common/NavBar/NavBar.jsx';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
