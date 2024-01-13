import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext({
  cart: [],
  totalQuantity: () => 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      setCart((prev) =>
        prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    }
  };
	const removeItem = (itemId) => {
		const updatedCart = cart.map((prod) =>
			prod.id === itemId
				? { ...prod, quantity: Math.max(0, prod.quantity - 1) }
				: prod
		);
		const cartUpdated = updatedCart.filter((prod) => prod.quantity > 0);
	
		setCart(cartUpdated);
	};

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const totalPrice = () => {
    return cart
      .reduce((prev, act) => prev + act.quantity * act.price, 0)
      .toFixed(2);
  };

  const totalQuantity = () => {
    return cart.reduce(
      (accumulator, currentProducts) => accumulator + currentProducts.quantity,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        totalQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartContext;
