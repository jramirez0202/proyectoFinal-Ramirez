import PropTypes from 'prop-types';
import ItemCard from "../ItemCard/ItemCard"
import { useTranslation } from "react-i18next";

const ItemList = ({ products }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
        {products.map(prod => (
          <ItemCard
            key={prod.id}
            name={prod.name}
            description={prod.description}
            category={prod.category}{...prod}
          />
        ))}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  products: PropTypes.array,
};

export default ItemList;
