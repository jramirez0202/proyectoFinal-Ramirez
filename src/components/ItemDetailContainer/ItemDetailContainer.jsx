
import { useEffect, useState } from 'react';
import { getProductById } from '../../asyncMock';
import ItemCardDetail from '../ItemCardDetail/ItemCardDetail.jsx'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then(response => {
        setProduct(response);
      })
      .catch(error => {
        console.error(error);
      });
  },[itemId]);

  return (
    <div className='flex items-center'>
      <ItemCardDetail {...product}/>
    </div>
  );
}

ItemDetailContainer.propTypes = {
  
}

export default ItemDetailContainer