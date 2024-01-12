import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MeteosHeader from './components/MeteosHeader/MeteosHeader';
import MeteosHome from './components/MeteosHome/MeteosHome';
import SearchPage from './components/SearchPage/SearchPage';
import InteractiveMap from './components/InteractiveMap/InteractiveMap';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MeteosHeader />
        <Routes>
          <Route path='/' element={<MeteosHome />} />
          <Route path='/search' element={<SearchPage /> } />
          <Route path='/interactiveMap' element={<InteractiveMap /> } />
          <Route path='/aboutme' element={<AboutMe /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
