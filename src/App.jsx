import './App.css';
import Locura from './pages/productos/ProductoUnitario';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Productos from './pages/productos/Productos';



const App = () => (
  <>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Productos />} />
        <Route path="producto" element={<Locura />} />
      </Routes>
    </BrowserRouter>
  </>
)

export default App;
