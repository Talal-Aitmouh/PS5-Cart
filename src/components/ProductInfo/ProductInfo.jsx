import PropTypes from 'prop-types';
import './ProductInfo.css';

const ProductInfo = ({ isModalOpen, setIsModalOpen, cartItems, setCartItems }) => {
  const handleAddToCart = () => {
    setCartItems([...cartItems, { id: Date.now(), name: 'Playstation 5', price: '1000$' }]);
  };

  return (
    <>
      <div className="text">
        <h3>New Consoles</h3>
        <h1>Playstation 5</h1>
        <p>Shipping in 2 to 4 business days <a href="#details" onClick={handleAddToCart}>Add To Cart</a></p>
      </div>
      {isModalOpen && (
        <CartModal
          items={cartItems}
          setCartItems={setCartItems}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

const CartModal = ({ items, setCartItems, onClose }) => {
  const handleRemoveItem = (id) => {
    
    setCartItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Your Cart({items.length} Item)</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>
             <span>{item.name}</span> 
             <span>{item.price}</span> 
              <button onClick={() => handleRemoveItem(item.id)}>X</button>
            </li>
            
          ))}
        </ul>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

// Adding PropTypes validation for CartModal
CartModal.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  setCartItems: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

// Adding PropTypes validation for ProductInfo
ProductInfo.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  setCartItems: PropTypes.func.isRequired,
};

export default ProductInfo;
