import bag from '../../assets/images/navbarLogo/bag.png';
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext'


const CartWidget = () => {
  const { totalQuantity, cart } = useContext(CartContext);

  if (Array.isArray(cart)) {
    return (
      <div className="flex items-center px-5">
        <Link to="/cart" className={`flex items-center ${totalQuantity() > 0 ? 'inline-flex' : 'pr-1'}`}>
          <img className="mr-1 px-1" src={bag} alt="shopping_bag"/>
          {totalQuantity() > 0 && <span className="ml-1">{totalQuantity()}</span>}
        </Link>
      </div>
    );
  } else {
    console.error('El carrito no es un array');
    return null;
  }
};

export default CartWidget;


