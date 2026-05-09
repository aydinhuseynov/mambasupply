import { translations } from "../Data/translations";
import "../App.css";

function About({ lang }) {
  const t = translations[lang];

  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2 style={{ textAlign: "center" }}>{t.about.title}</h2>
      </div>

      <div className="about-layout">
        <div className="about-text">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
        </div>

        <div className="about-cards">
          {t.about.cards.map((card, index) => (
            <div className="about-card" key={index}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
