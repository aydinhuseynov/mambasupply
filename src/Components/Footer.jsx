import { translations } from "../Data/translations";
import "../App.css";

function Footer({ lang }) {
  const t = translations[lang];

  return (
    <footer className="footer">

      <div className="footer-inner">

        {/* Logo + tagline */}
        <div className="footer-brand">

          <div className="footer-logo">
            MS
          </div>

          <p className="footer-tagline">
            Premium quality. Reliable supply.
          </p>

        </div>

        {/* Footer Columns */}
        <div className="footer-columns">

          {/* Navigation */}
          <div className="footer-col">

            <h4 className="footer-col-title">
              Navigation
            </h4>

            {/* ROUTER SİLİNDİ → SCROLL LINKS */}
            <a href="#home">{t.footer.home}</a>
            <a href="#about">{t.footer.about}</a>
            <a href="#products">{t.footer.products}</a>
            <a href="#contact">{t.footer.contact}</a>

          </div>

          {/* Legal */}
          <div className="footer-col">

            <h4 className="footer-col-title">
              Legal
            </h4>

            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
            <a href="/refund">Refund Policy</a>

          </div>

          {/* Social */}
          <div className="footer-col">

            <h4 className="footer-col-title">
              Follow Us
            </h4>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="social-row"
            >
              Facebook
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-row"
            >
              LinkedIn
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="social-row"
            >
              Instagram
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="social-row"
            >
              YouTube
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">

          <p className="copyright">
            &copy; 2026 MambaSupply. All rights reserved.
          </p>

          <p className="footer-made">
            Crafted with care for our customers.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;