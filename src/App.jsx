import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ContactUsPage from "@/pages/contact-us/ContactUsPage";
import HomePage from "./pages/home/HomePage";
import WomenAccessoriesPage from "@/pages/women/WomenAccessoriesPage";
import WomenFashionsPage from "@/pages/women/WomenFashionsPage";
import ProductPage from "./pages/product/ProductPage";
import Footer from "./components/Footer";
import MenFashionsPage from "./pages/men/MenFashionsPage";
import MenAccessoriesPage from "./pages/men/MenAccessoriesPage";
import KidsFashionsPage from "./pages/kids/KidsFashionsPage";
import KidsToysPage from "./pages/kids/KidsToysPage";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/women/accessories" element={<WomenAccessoriesPage />} />
        <Route path="/women/fashions" element={<WomenFashionsPage />} />
        <Route path="/men/fashions" element={<MenFashionsPage />} />
        <Route path="/men/accessories" element={<MenAccessoriesPage />} />
        <Route path="/kids/fashions" element={<KidsFashionsPage />} />
        <Route path="/kids/toys" element={<KidsToysPage />} />

        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
