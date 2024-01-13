import { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"
import { CartProvider } from "./components/Context/CartContext.jsx"
import  Cart  from "./components/Cart/Cart.jsx"
import UpdateImages from "./components/UpdateImages/UpdateImages.jsx"
import Checkout from "./components/Checkout/Checkout.jsx"


function App() {
  return (
    <div >
      <BrowserRouter>
        <CartProvider>
          <Navbar/>
            <Routes>
              <Route path='/' element= {<ItemListContainer/>}/>
              <Route path='/item/:itemId' element= {<ItemDetailContainer/>}/>
              <Route path='/category/:categoryId' element= {<ItemListContainer/>}/>
              <Route path='/cart' element= {<Cart/>} />
              <Route path='/checkout' element= {<Checkout/>} /> 
              <Route path='/admin' element= {<UpdateImages/>} /> 
              <Route path='*' element ={<h1>No Found Page</h1>}/>    
            </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default function wrappedApp() {
  return (
    <Suspense fallback= "...loading">
      <App />
    </Suspense>
  )
}
