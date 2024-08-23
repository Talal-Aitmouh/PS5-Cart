import { useState } from 'react';
import Header from './components/Header/Header';
import Marquee from './components/Marquee/Marquee';
import ProductInfo from './components/ProductInfo/ProductInfo';
import PlaySection from './components/PlaySection/PlaySection';
import './index.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleShowCart = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <Header onShowCart={handleShowCart} />
      <div className="sec">
        <div className="wrapper">
          <Marquee />
          <ProductInfo 
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </div>
        <PlaySection />
      </div>
    </>
  );
};

export default App;
