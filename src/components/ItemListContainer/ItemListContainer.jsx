import { useEffect, useState } from 'react';'../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {getDocs, collection, query, where} from "firebase/firestore";
import {db} from "../../config/Firebase"
import { Banner } from "../Banner/Banner"

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
  
    const collectionRef = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products');
  
    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]); // Agregué categoryId como dependencia para que el efecto se ejecute cuando cambie.
  
  const showBanner= window.location.pathname === '/' 

  return (
    <div>
      {showBanner && <Banner/>}
      <ItemList products={products}/>
    </div>
  );
}

ItemListContainer.propTypes = {

};
