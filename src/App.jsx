import { Routes, Route } from 'react-router-dom';
import Navbar from './components/common/navbar.jsx';
import CursorEffects from './components/common/cursor-effects.jsx';
import RouteLoader from './components/common/route-loader.jsx';
import Home from './pages/home.jsx';
import AboutMe from './pages/about-me.jsx';
import Projects from './pages/projects.jsx';

function App() {
  return (
    <>
      <CursorEffects />
      <RouteLoader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
