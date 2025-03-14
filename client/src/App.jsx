import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Portal from './pages/Portal';
import Metrics from './pages/Metrics';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/portal/*" element={<Portal />} />
      <Route path="/portal/Metric" element={<Metrics />} />
    </Routes>
  </Router>
  )
}

export default App;
