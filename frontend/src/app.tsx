import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import AnalysisCenter from './pages/AnalysisCenter';
import TriageChat from './pages/TriageChat';
import PatientVault from './pages/PatientVault';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/analysis" element={<AnalysisCenter />} />
      <Route path="/triage" element={<TriageChat />} />
      <Route path="/vault" element={<PatientVault />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
