import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UpSkill from './pages/UpSkill';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Contest from './pages/Contest';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <Router>
      <div className='w-full h-screen p-10 flex bg-white-to-light-blue font-sans'>
        <Routes>
          <Route path="/" element={<UpSkill />} />
          <Route path="/upskill" element={<UpSkill />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
