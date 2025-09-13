import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Headers from './components/Headers';
import CartPage from './pages/CartPage';


const App = () => {
  return (
    
    <Router>
      <Headers />
      <Routes>
        <Route element={<HomePage />} path='/'></Route>
        <Route element={<CartPage/>} path='/cart'></Route>
      </Routes>
    </Router>
  )
};

export default App;