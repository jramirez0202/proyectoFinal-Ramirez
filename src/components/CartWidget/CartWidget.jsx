import cart from '../../assets/images/navbarLogo/bag.png';

export const CartWidget = () => {
  return (
    <div className="flex items-center px-5">
      <img className="mr-1 px-1" src={cart} alt="shopping bag" />
      <p>5</p>
    </div>
  );
};

export default CartWidget;


