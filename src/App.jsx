import './App.css'
import './bootstrap.min.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import View from './pages/View'
import Wish from './pages/Wish'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view/:id' element={<View />} />
        <Route path='/wish' element={<Wish />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<h1>Page Not Found 404</h1>} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
