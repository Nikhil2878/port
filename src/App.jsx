import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // loader duration (1.8s)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <HelmetProvider>
    <BrowserRouter>
      <div className="bg-[#0a0a0a] min-h-screen text-gray-100 font-poppins">
        <Navbar />

        <main className="pt-20 px-4 md:px-12 lg:px-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
