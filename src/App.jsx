import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/home/Hero";
import Categories from "./components/home/Categories";
import FeaturedProducts from "./components/home/FeaturedProducts";
import AboutStudio from "./components/home/AboutStudio";
import GalleryPreview from "./components/home/GalleryPreview";
import WhyChooseUs from "./components/home/WhyChooseUs";
import HowItWorks from "./components/home/HowItWorks";
import Testimonials from "./components/home/Testimonials";
import FAQPreview from "./components/home/FAQPreview";
import ContactCTA from "./components/home/ContactCTA";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";

import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";

import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css"; 

function PagePlaceholder({ title, description }) {
  return (
    <main className="page-placeholder">
      <span className="placeholder-label">PAGE UNDER DEVELOPMENT</span>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link to="/" className="placeholder-link">
        Back to Home
      </Link>
    </main>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <AboutStudio />
      <GalleryPreview />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <FAQPreview />
      <ContactCTA />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
