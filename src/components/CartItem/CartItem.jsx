import { useContext } from "react"
import CartContext from "../Context/CartContext"
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { FaTrash } from "react-icons/fa";


const CartItem = ({ product }) => {
  const { t } = useTranslation();
  const {removeItem} = useContext(CartContext)
  if (!product) {
    return null;
  }
  return (
<div className="grid grid-cols-5 gap-4 items-center p-4 rounded-md shadow-md text-center justify-center">
  <h2 className="text-lg font-bold col-span-1">{product.name}</h2>
  <figure className="flex text-center justify-center">
    <img
    src={product.img}
    alt={product.name}
    style={{ width: '100px', height: '100px' }}
    className="col-span-1 border-2 p-2 border-white rounded-2xl"
  />
  </figure>
  
  <p className="text-sm col-span-1">{t("cardItem.quantity")} {product.quantity}</p>
  <p className="text-sm col-span-1">{t("cardItem.subtotal")} ${(product.quantity * product.price).toFixed(2)}</p>
  <button
    onClick={() => removeItem(product.id)}
    className="mx-auto">
    <FaTrash/>
  </button>
</div>
  );
}
CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    img: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  })
};
export default CartItem