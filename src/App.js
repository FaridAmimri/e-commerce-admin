/** @format */

import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Users from './pages/Users'
import User from './pages/User'
import NewUser from './pages/NewUser'
import Products from './pages/Products'
import Product from './pages/Product'
import NewProduct from './pages/NewProduct'
import Login from './pages/Login'

function App() {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem('persist:root')).user
  ).currentUser.isAdmin
  // If Admin is true, render pages

  return (
    <div className='App'>
      <Router>
        <Navbar />
        {admin && (
          <Pages>
            <Sidebar />
            <Routes>
              <Route
                path='/login'
                element={admin ? <Navigate to='/' /> : <Login />}
              />
              <Route path='/' element={<Home />} />
              <Route path='/users' element={<Users />} />
              <Route path='/user/:userId' element={<User />} />
              <Route path='/newUser' element={<NewUser />} />
              <Route path='/products' element={<Products />} />
              <Route path='/product/:productId' element={<Product />} />
              <Route path='/newProduct' element={<NewProduct />} />
            </Routes>
          </Pages>
        )}
      </Router>
    </div>
  )
}

export default App

const Pages = styled.div`
  display: flex;
  margin-top: 10px;
`
