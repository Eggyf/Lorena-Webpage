
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import JewelsPage from './components/JewelsPage';
import SoundsPage from './components/SoundsPage';
import BraceletsPage from './components/JewelsComponents/BraceletsPage';
import ProductDetail from './components/ProductDetail';
import SignInPage from './components/SignInPage';
import Wind from './components/SoundsComponents/Wind';
import SoundPage from './components/SoundsComponents/SoundPage';
import NecklacesPage from './components/JewelsComponents/NecklacesPage';
import RingsPage from './components/JewelsComponents/RingsPage';
import EarringsPage from './components/JewelsComponents/EarringsPage';

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/jewels' element={<JewelsPage />} />
          <Route path='/sounds' element={<SoundsPage />} />
          <Route path='/bracelets' element={<BraceletsPage />} />
          <Route path='/necklaces' element={<NecklacesPage />} />
          <Route path='/rings' element={<RingsPage />} />
          <Route path='/earrings' element={<EarringsPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path='/sign-in' element={<SignInPage/>}/>
          <Route path='jewels/wind' element={<Wind />} />
          <Route path='sounds/:id' element={<SoundPage/>}/>
        </Routes>
      
      </Router>
    </>
  );
}

export default App;
