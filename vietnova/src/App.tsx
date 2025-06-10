import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from 'components/pages/Login';
import PlayerProfile from 'components/pages/PlayerProfile';
import TeamProfile from 'components/pages/TeamProfile';

import ListPlayer from '@/organisms/ListPlayer';
import ListTeam from '@/organisms/ListTeam';

import Homepage from './components/pages/Homepage';
import Landingpage from './components/pages/Ladingpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Landingpage />} />
        <Route path='/home-page' element={<Homepage />} />
        <Route path='/teams' element={<ListTeam />} />
        <Route path='/team/:id' element={<TeamProfile />} />
        <Route path='/players' element={<ListPlayer />} />
        <Route path='/player/:id' element={<PlayerProfile />} />
      </Routes>
    </Router>
  );
}
export default App;
