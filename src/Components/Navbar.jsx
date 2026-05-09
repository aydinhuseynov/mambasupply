import React, { useEffect, useState } from "react";
import { translations } from "../Data/translations";
import "../App.css";

const logo = "/src/assets/ms-logo.png";

function Navbar({
  lang,
  setLang,
  theme,
  toggleTheme
}) {

  const t = translations[lang];

  useEffect(() => {
    document.body.classList.toggle(
      "theme-dark",
      theme === "dark"
    );
  }, [theme]);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className="navbar">

        <div className="navbar-inner">

          {/* BRAND */}
          <a
            href="#home"
            className="brand"
            onClick={closeMobile}
          >

            <div className="brand-logo">

              {!logoError ? (
                <img
                  src={logo}
                  alt="MambaSupply Logo"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="brand-fallback">MS</div>
              )}

            </div>

            <div className="brand-text">
              <span className="brand-title">
                MambaSupply
              </span>
              <span className="brand-subtitle">
                Business Supply Solutions
              </span>
            </div>

          </a>

          {/* DESKTOP MENU */}
          <nav className="nav-center desktop-only">

            <a href="#home">
              {t.nav.home}
            </a>

            <a href="#about">
              {t.nav.about}
            </a>

            <a href="#products">
              {t.nav.products}
            </a>

            <a href="#contact">
              {t.nav.contact}
            </a>

          </nav>

          {/* RIGHT SIDE */}
          <div className="nav-right desktop-only">

            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
            >
              {theme === "dark" ? "☀️" : "🌙"}

              <span className="theme-toggle-text">
                {theme === "dark"
                  ? t.theme.toLight
                  : t.theme.toDark}
              </span>
            </button>

            <span className="lang-label">
              {t.langLabel}:
            </span>

            <div className="lang-switch">

              <button
                className={lang === "az" ? "active" : ""}
                onClick={() => setLang("az")}
              >
                AZ
              </button>

              <button
                className={lang === "en" ? "active" : ""}
                onClick={() => setLang("en")}
              >
                EN
              </button>

              <button
                className={lang === "ru" ? "active" : ""}
                onClick={() => setLang("ru")}
              >
                RU
              </button>

            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="menu-btn mobile-only"
            onClick={() => setMobileOpen((p) => !p)}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>

        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (

          <div className="mobile-menu">

            <a href="#home" onClick={closeMobile}>
              {t.nav.home}
            </a>

            <a href="#about" onClick={closeMobile}>
              {t.nav.about}
            </a>

            <a href="#products" onClick={closeMobile}>
              {t.nav.products}
            </a>

            <a href="#contact" onClick={closeMobile}>
              {t.nav.contact}
            </a>

          </div>

        )}

      </header>
    </>
  );
}

export default Navbar;