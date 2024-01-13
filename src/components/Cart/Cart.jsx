import { useContext } from 'react';
import { useTranslation } from "react-i18next";
import { CartContext } from '../Context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from "react-router-dom";
import '../Cart/Cart.css';

const Cart = () => {
  const { t } = useTranslation();
  const { cart, clearCart, totalQuantity, totalPrice } = useContext(CartContext);

  let content;

  if (totalQuantity() === 0) {
    content = (
      <div className="flex items-center justify-center">
        <figure className="text-center positionBag">
          <h1 className='text-4xl'>{t("cart.emptyCartMassage")}</h1>
          <img
            src="../../src/assets/images/cartImages/sadBag.png"
            className="w-1/2 mx-auto"
            alt="sadBag"
          />
          <Link to='/' className='cta mx-auto'>
            <span className="hover-underline-animation">{t("cart.homeButton")}</span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
                fill="#ffffff"
              ></path>
            </svg>
          </Link>
        </figure>
      </div>
    );
  } else {
    content = (
      <div className="flex flex-col justify-center">
        {cart.map((p) => (
          <CartItem key={p.id} product={p} className="shopping-cart grid grid-cols-auto-1fr-auto-auto gap-4 items-center mb-6" />
        ))}
        <div className="flex">
          <div className="mx-auto">
            <h3 className='text-lg font-bold'>{t("cart.totalPrice")} ${totalPrice()}</h3>
            <h3 className='text-lg font-bold'>{t("cart.totalItems")} {totalQuantity()}</h3>
          </div>
        </div>
        <div className="flex mx-auto py-10">
        <button onClick={() => clearCart()} className="buttonCheckout mr-8 hover:text-red-500">
          <span>
            {t("cart.emptyCartButton")}
          </span>
            </button>
            <Link
              to="/checkout"
                className='buttonCheckout hover:text-green-500'>
              Checkout
            </Link>
        </div>

      </div>
    );
  }

  return (
    <>
      {content}
    </>
  );
}

export default Cart;
