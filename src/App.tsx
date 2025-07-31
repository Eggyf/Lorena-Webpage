
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import JewelsPage from './components/JewelsPage';
import SoundsPage from './components/SoundsPage';
import BraceletsPage from './components/BraceletsPage';


function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/jewels' element={<JewelsPage />} />
          <Route path='/sounds' element={<SoundsPage />} />
          <Route path='/bracelets' element={<BraceletsPage/>}/>
        </Routes>
      
      </Router>
    </>
  );
}

export default App;
