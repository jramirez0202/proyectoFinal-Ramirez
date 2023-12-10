import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const ItemCount = ({ initial, stock, onAdd }) => {
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(initial);

  const increaseItem = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    } else if (quantity === stock) {
      window.alert(`el stock es hasta ${stock}`);
    }
  };

  const decreaseItem = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else if (quantity <= 1) {
      window.alert(`No se puede disminuir mas`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center">
        <button
          onClick={decreaseItem}
          className="px-2 py-1 bg-blue-500 text-white rounded-l hover:bg-blue-600 focus:outline-none"
        >
          <FaMinus size={11} />
        </button>
        <h2 className="text-xl font-bold px-4">{quantity}</h2>
        <button
          onClick={increaseItem}
          className="px-2 py-1 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none rounded-r"
        >
          <FaPlus size={11} />
        </button>
      </div>
      <button
        className="my-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => onAdd(quantity)}
      >
        {t("itemCard.card.addButton")}
      </button>
    </div>
  );
};

ItemCount.propTypes = {
  initial: PropTypes.number,
  stock: PropTypes.number,
  quantity: PropTypes.number,
  onAdd: PropTypes.func,
};

export default ItemCount;
