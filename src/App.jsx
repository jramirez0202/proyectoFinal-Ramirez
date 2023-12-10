import { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element ={<ItemListContainer/>}/>
          <Route path="/item/:itemId" element ={<ItemDetailContainer/>}/>
          <Route path="/category/:categoryId" element ={<ItemListContainer/>}/>
          <Route path="*" element ={<h1>No Found Page</h1>}/>      
        </Routes>
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
