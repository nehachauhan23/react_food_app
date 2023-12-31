import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider';

function App() {
  const [isCartVisible, setCartVisble] = useState(false)

  const showCartHandler = () => {
    setCartVisble(true)
  }

  const hideCartHandler = () => {
    setCartVisble(false)
  }
  return (
    <CartProvider>
      {isCartVisible && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
