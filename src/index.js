import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Apropos from "./pages/apropos/Apropos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import NosPrestations from "./pages/nosPrestations/NosPrestations";
import NosRealisations from "./pages/nosRealisations/NosRealisations";
import Contact from "./pages/contact/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      <Routes>
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
      <Routes>
        <Route path="/nos-prestations" element={<NosPrestations />} />
      </Routes>
      <Routes>
        <Route path="/nos-realisations" element={<NosRealisations />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
