import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";
import MyBasket from "./Pages/MyBasket";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/basket" element={<MyBasket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
