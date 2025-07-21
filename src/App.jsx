import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Landing from "./pages/Landing"
import Products from "./pages/Products"
import ProductInfo from "./pages/ProductInfo"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Footer2 from "./components/Footer2"
import Bag from "./pages/Bag"
import Fav from "./pages/Fav"
import Offers from "./pages/Offers"


function App() {
  const [isLarge, setIsLarge] = useState(window.innerWidth > 1200)

  const handleResize = ()=> {
        setIsLarge(window.innerWidth > 1200)
    }

    useEffect(()=> {
        window.addEventListener("resize", handleResize)
        return ()=> {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="relative">
          <div className="pages mt-20">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="products" element={<Products />} />
              <Route path="productInfo" element={<ProductInfo />} />
              <Route path="bag" element={<Bag />} />
              <Route path="fav" element={<Fav />} />
              <Route path="offers" element={<Offers />} />
            </Routes>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">{isLarge ? <Footer2 /> : <Footer />}</div>
      </BrowserRouter>
    </>
  )
}

export default App
