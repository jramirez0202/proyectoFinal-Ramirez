import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom"
import CartContext from "../Context/CartContext";


const ItemCardDetail = ({ name, price, stock, description, category, img, id}) => {
  const { t } = useTranslation();
  const [quantityAdded, setQuantityAdded] = useState(0)
  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
  
    const item = {
      id, name, price, img
    }
    addItem(item, quantity)
  }

  return (
    <div className=" mx-auto my-auto mt-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={img} alt={img} />
      </a>
      <div className="p-5">
        <div className="flex flex-col items-start">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t("itemCard.card.name")}{" "}
            {name}
          </h5>
          <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            {t("itemCard.card.price")} {price}
          </h5>
          <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            {t("itemCard.card.category")}{" "}
            {category}
          </h5>
        </div>

        <p className="flex justify-center mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <footer className="flex justify-center items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {quantityAdded > 0 ? (
              <Link to="/cart"><button className="my-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Terminar Compra</button></Link>
              ) : (
              <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>)
            }
          </span>
        </footer>
      </div>
    </div>
  );
};

ItemCardDetail.propTypes = {
  onAdd: PropTypes.func,
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  stock: PropTypes.number,
  category: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
};

export default ItemCardDetail;
