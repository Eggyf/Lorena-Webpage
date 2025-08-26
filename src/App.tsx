
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import JewelsPage from './components/JewelsPage';
import SoundsPage from './components/SoundsPage';
import BraceletsPage from './components/BraceletsPage';
import ProductDetail from './components/ProductDetail';
import SignInPage from './components/SignInPage';
import Wind from './components/SoundsComponents/Wind';

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/jewels' element={<JewelsPage />} />
          <Route path='/sounds' element={<SoundsPage />} />
          <Route path='/bracelets' element={<BraceletsPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path='/sign-in' element={<SignInPage/>}/>
          <Route path='jewels/wind' element={<Wind/>}/>
        </Routes>
      
      </Router>
    </>
  );
}

export default App;
