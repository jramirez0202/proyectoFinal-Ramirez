import itemImage2 from "./assets/images/otras/fevernova.png"
import itemImage3 from "./assets/images/otras/roja.png"
import itemImage4 from "./assets/images/otras/guitarra.png"

export const products = [
  {
    id: 1,
    price: 19.99,
    name: "Guitarra Electica",
    category: "electronica",
    img: itemImage4,
    stock: 5,
    description: "Instrumento musical para bandas de rock",
  },
  {
    id: 2,
    price: 29.99,
    name: "Pelota de futbol",
    category: "deporte",
    img: itemImage2,
    stock: 30,
    description: "Balon redondo para que ruede de manera circular",
  },
  {
    id: 3,
    price: 49.99,
    name: "Camisa deportiva",
    category: "ropa",
    img: itemImage3,
    stock: 20,
    description: "Camisa ligera para salir de paseo",
  },
  {
    id: 4,
    price: 9.99,
    name: "Balon para Futbol sala",
    category: "deporte",
    img: itemImage2,
    stock: 100,
    description: "Balon fimrado retro mudial 2002",
  },
  {
    id: 5,
    price: 29.99,
    name: "Camisa Ligera",
    category: "ropa",
    img: itemImage3,
    stock: 20,
    description: "Camisa roja de mujer",
  },
  {
    id: 6,
    price: 79.99,
    name: "Guitarra GHJ-2003 ",
    category: "electronica",
    img: itemImage4,
    stock: 10,
    description: "Guitarra modelo GHJ-2003",
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 500)
  })
}

export const getProductById = (productId) => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id == productId))
    }, 500)
  })
}

export  const getProductByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      resolve(products.filter(prod=> prod.category === categoryId))
    },500)
  })
}

export default products;
