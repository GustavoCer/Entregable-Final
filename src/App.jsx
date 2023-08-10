import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/products.slice'
import { useDispatch } from 'react-redux'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Header from './components/shared/Header'
import ProductIdPage from './pages/ProductIdPage'
import CartPage from './pages/CartPage'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
  }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/product/:id' element={<ProductIdPage />} />
        <Route path='/cart' element={<CartPage />} />
      </Routes>
    </div>
  )  
}

export default App
