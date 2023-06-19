import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';


function App() {
  const [isCartVisible, setCartVisble] = useState(false)

  const showCartHandler = () => {
    setCartVisble(true)
  }

  const hideCartHandler = () => {
    setCartVisble(false)
  }
  return (
    <>
      {isCartVisible && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
