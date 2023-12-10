import { useEffect, useState } from 'react';
import { getProducts, getProductByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {

    const asyncFunc = categoryId ? getProductByCategory : getProducts

    asyncFunc(categoryId)
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error(error);
      });
  },[categoryId]);

  return (
    <div>
      <ItemList products={products}/>
    </div>
  );
}

ItemListContainer.propTypes = {

};
