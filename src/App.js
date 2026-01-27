import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Toast from './components/Toast';

function App() {
  return (
    <div className="overflow-hidden">
<Router>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product/:id' element={<ProductDetails/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/wishlist' element={<Wishlist/>}/>
  </Routes>
  <Sidebar/>
  <Footer/>
  <Toast/>
</Router>
    </div>
  );
}

export default App;

