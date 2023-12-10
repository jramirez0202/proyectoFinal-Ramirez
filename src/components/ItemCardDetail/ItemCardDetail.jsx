import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import ItemCount from "../ItemCount/ItemCount";

const ItemCardDetail = ({
  name,
  price,
  stock,
  description,
  category,
  img,
  id,
}) => {
  const { t } = useTranslation();
  return (
    <div className=" mx-auto my-auto mt-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={img} alt={name} />
      </a>
      <div className="p-5">
        <div className="flex flex-col items-start">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t("itemCard.card.name")}{" "}
            {t(`itemCard.card.productName.p${id}`) || name}
          </h5>
          <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            {t("itemCard.card.price")} {price}
          </h5>
          <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            {t("itemCard.card.category")}{" "}
            {t(`itemCard.card.categoryName.c${id}`) || category}
          </h5>
        </div>

        <p className="flex justify-center mb-3 font-normal text-gray-700 dark:text-gray-400">
          {t(`itemCard.card.productDescription.product_${id}`) || description}
        </p>
        <div className="flex justify-center items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            <ItemCount
              initial={1}
              stock={stock}
              onAdd={(quantity) => console.log(quantity)}
            />
          </span>
        </div>
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
};

export default ItemCardDetail;
