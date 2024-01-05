import { useContext } from "react"
import CartContext from "../Context/CartContext"
import PropTypes from "prop-types";

const CartItem = ({ product }) => {
  const {removeItem} = useContext(CartContext)
  if (!product) {
    return null;
  }
  return (
<div className="grid grid-cols-5 gap-4 items-center p-4 rounded-md shadow-md">
  <h2 className="text-lg font-bold col-span-1">{product.name}</h2>
  <img
    src={product.img}
    alt={product.name}
    style={{ width: '100px', height: '100px' }}
    className="col-span-1 border-2 p-2 border-white rounded-2xl"
  />
  <p className="text-sm col-span-1">Cantidad: {product.quantity}</p>
  <p className="text-sm col-span-1">Subtotal: ${(product.quantity * product.price).toFixed(2)}</p>
  <button
    onClick={() => removeItem(product.id)}
    className="col-span-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Eliminar
  </button>
</div>



  );
  
  
}

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    // Agrega otras propiedades según sea necesario
  })
};
export default CartItem