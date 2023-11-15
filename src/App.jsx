import { Suspense } from "react"
import Navbar from "./components/Navbar.jsx"
import ItemListContainer from "./components/ItemListContainer.jsx"




function App() {
  return (
    <div >
      <Navbar/>
      <ItemListContainer sayHello={'Hola estan ahi?'}/>
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
