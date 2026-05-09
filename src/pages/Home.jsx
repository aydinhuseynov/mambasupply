import { translations } from "../Data/translations";
import "../App.css";

function Home({ lang }) {
  const t = translations[lang];

  return (
    <section id="home" className="hero-section">

      <div className="hero-grid">

        {/* LEFT */}
        <div className="hero-left">

          <div className="hero-badges">
            <span>{t.hero.badge1}</span>
            <span>{t.hero.badge2}</span>
            <span>{t.hero.badge3}</span>
          </div>

          <h1>{t.hero.title}</h1>

          <p>{t.hero.desc}</p>

          <div className="hero-actions">

            {/* ROUTER SİLİNDİ → SCROLL LINK */}
            <a href="#products" className="btn btn-primary">
              {t.hero.ctaPrimary}
            </a>

            <a href="#contact" className="btn btn-secondary">
              {t.hero.ctaSecondary}
            </a>

          </div>

        </div>

        {/* RIGHT */}
        <div className="hero-right">

          <div className="hero-card">

            <div className="hero-card-title">
              MambaSupply
            </div>

            <div className="hero-card-grid">
              <div>💻</div>
              <div>📄</div>
              <div>🔩</div>
              <div>🧤</div>
              <div>🔌</div>
              <div>🧴</div>
              <div>📦</div>
              <div>🛠️</div>
              <div>🪑</div>
            </div>

            <p>MambaSupply</p>
            <small>Sales • Supply • Solutions</small>

          </div>

        </div>

      </div>

      {/* MVV */}
      <div style={{ textAlign: "center" }} className="mvv-block">

        <h2>{t.mvv.title}</h2>

        <div className="mvv-grid">

          <div className="mvv-card">
            <h3>{t.mvv.missionTitle}</h3>
            <p>{t.mvv.missionDesc}</p>
          </div>

          <div className="mvv-card">
            <h3>{t.mvv.visionTitle}</h3>
            <p>{t.mvv.visionDesc}</p>
          </div>

          <div className="mvv-card">
            <h3>{t.mvv.valuesTitle}</h3>
            <p>{t.mvv.valuesDesc}</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;