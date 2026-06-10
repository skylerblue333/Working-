import { Router, Route } from 'wouter';
import { VoiceCommands } from './components/VoiceCommands';
import { Navigation } from './components/Navigation';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Engineer from './pages/Engineer';
import School from './pages/School';
import Arcade from './pages/Arcade';
import Governance from './pages/Governance';
import Analytics from './pages/Analytics';
import Charity from './pages/Charity';
import Marketplace from './pages/Marketplace';
import Leaderboards from './pages/Leaderboards';
import Onboarding from './pages/Onboarding';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Navigation />
      <VoiceCommands />
      <Route path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/engineer" component={Engineer} />
      <Route path="/school" component={School} />
      <Route path="/learning" component={School} />
      <Route path="/arcade" component={Arcade} />
      <Route path="/gaming" component={Arcade} />
      <Route path="/governance" component={Governance} />
      <Route path="/analytics" component={Analytics} />
      <Route path="/charity" component={Charity} />
      <Route path="/marketplace" component={Marketplace} />
      <Route path="/leaderboard" component={Leaderboards} />
      <Route path="/leaderboards" component={Leaderboards} />
      <Route path="/onboarding" component={Onboarding} />
      <Route path="/trading" component={Dashboard} />
      <Route path="/:rest*" component={NotFound} />
    </Router>
  );
}
