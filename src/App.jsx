import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createContext, useState } from 'react';
import routes from './components/router';

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

function App() {

  const [cartItems, setCartItems] = useState([]);
  
  const addCart = (product) => {
    setCartItems((cartItems)=>([...cartItems, product]));
  }

  const router = createBrowserRouter(routes);
  return (
    <div>
      <CartContext.Provider value={{cartItems, addCart}}>
        <RouterProvider router={router} />
      </CartContext.Provider> 
    </div>
  )
}

export default App
