
import { useEffect, useState } from 'react';
import ItemCardDetail from '../ItemCardDetail/ItemCardDetail.jsx'
import { useParams } from 'react-router-dom';
import {getDoc, doc} from "firebase/firestore";
import {db} from "../../config/Firebase"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    
    const docRef = doc(db, 'products', itemId);

    getDoc(docRef)
    .then(response => {
      const data = response.data();
      const productAdapted = { id: response.id, ...data };
      setProduct(productAdapted)
    })

  }, [itemId]);

  return (
    <div className='flex items-center'>
      <ItemCardDetail {...product}/>
    </div>
  );
}

ItemDetailContainer.propTypes = {
  
}

export default ItemDetailContainer