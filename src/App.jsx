import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* About, Pricing, Products and Signup are built in the next passes */}
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
