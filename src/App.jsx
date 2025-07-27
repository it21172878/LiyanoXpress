import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ContactUsPage from "@/pages/contact-us/ContactUsPage";
import HomePage from "./pages/home/HomePage";
import WomenAccessoriesPage from "@/pages/women/WomenAccessoriesPage";
import WomenFashionsPage from "@/pages/women/WomenFashionsPage";
import ProductPage from "./pages/product/ProductPage";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/women/accessories" element={<WomenAccessoriesPage />} />
        <Route path="/women/fashions" element={<WomenFashionsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
