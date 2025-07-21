import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BagProvider } from './context/BagContext.jsx'
import { FavProvider } from './context/FavContext.jsx'
import ClickSpark from "./components/ClickSpark.jsx"

createRoot(document.getElementById('root')).render(
  <BagProvider>
    <FavProvider>
      <ClickSpark>
      <App />
      </ClickSpark>
    </FavProvider>
  </BagProvider>
  ,
)
