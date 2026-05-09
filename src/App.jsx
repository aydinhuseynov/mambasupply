import { useState, useEffect } from "react";
import "./App.css";

// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Product";
import Contact from "./pages/Contact";

function App() {
  // Language state
  const [lang, setLang] = useState("az");

  // Theme state
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.classList.toggle(
      "theme-dark",
      theme === "dark"
    );
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) =>
      prev === "dark" ? "light" : "dark"
    );

  return (
    <div className="ms-app">

    {/* NAVBAR (global) */}
    <Navbar
      lang={lang}
      setLang={setLang}
      theme={theme}
      toggleTheme={toggleTheme}
    />

    {/* HOME */}
    <Home lang={lang} />

    {/* ABOUT */}
    <About lang={lang} />

    {/* PRODUCTS */}
    <Products lang={lang} />

    {/* CONTACT */}
    <Contact lang={lang} />

    {/* FOOTER (global) */}
    <Footer lang={lang} />

  </div>
  );
}

export default App;