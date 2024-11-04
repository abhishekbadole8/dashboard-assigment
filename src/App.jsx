import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UpSkill from './pages/UpSkill';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Contest from './pages/Contest';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <Router>
      <div className='w-full h-full min-h-screen p-10 flex bg-white-to-light-blue font-sans'>
        <Routes>
          <Route path="/" element={<UpSkill />} />
          
          <Route index path="/upskill" element={<UpSkill />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/leaderboard" element={<Leaderboard />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
