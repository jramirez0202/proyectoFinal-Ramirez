import { useContext } from 'react';
import { CartContext } from '../Context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext)
  if(totalQuantity() === 0) {
    return (
      <div>
        <h1>No hay productos en el carrito</h1>
        <Link to='/' className='Option'>Productos</Link>
      </div>
    )
  }
  return (
    <>
      <div className="">
        {cart.map((p) => (
          <CartItem key={p.id} product={p} className="shopping-cart grid grid-cols-auto-1fr-auto-auto gap-4 items-center mb-6" />
        ))}
      </div>
      <div className="flex">
        <div className="ml-auto">
          <h3>Total: ${totalPrice()}</h3>
          <h3>Cantidad de articulos: {totalQuantity()}</h3>
          <button
            onClick={() => clearCart()}
            className="my-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Limpiar Carrito
          </button>
          <Link
            to="/checkout"
            className="my-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Checkout
          </Link>
        </div>
      </div>
    </>



  );
}

export default Cart;