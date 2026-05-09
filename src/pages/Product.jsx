import { useMemo } from "react";
import { translations } from "../Data/translations";
import "../App.css";


// Images
import office_sanitary from "../assets/pictures/office_sanitary.jpg";
import private_protect from "../assets/pictures/private-protect.png";
import it from "../assets/pictures/IT EQUIPMENT AND ACCESSORIES.webp";
import handTools from "../assets/pictures/hand tools.jpg";
import safety_helmets from "../assets/pictures/safety_helmets.jpg";
import powerTools from "../assets/pictures/power tools.jpg";
import valves from "../assets/pictures/valves.jpg";
import hoses_hubing from "../assets/pictures/hoses_hubing.jpg";
import cabels from "../assets/pictures/cabels.jpg";
import fasteners from "../assets/pictures/fasteners.webp";
import pump from "../assets/pictures/pump.jpg";
import officeCleaning from "../assets/pictures/officeCleaning.jpg";
import kitchen_equipments from "../assets/pictures/kitchen_equipments.jpg";

const productItems = [
  { key: "office", icon: office_sanitary },
  { key: "cleaning", icon: officeCleaning },
  { key: "ppe", icon: private_protect },
  { key: "it", icon: it },
  { key: "hoses", icon: hoses_hubing },
  { key: "tools", icon: handTools },
  { key: "powerTools", icon: powerTools },
  { key: "safety_helmets", icon: safety_helmets },
  { key: "cables", icon: cabels },
  { key: "valve", icon: valves },
  { key: "fasteners", icon: fasteners },
  { key: "pump", icon: pump },
  { key: "kitchen_equipments", icon: kitchen_equipments },
];

function Products({ lang }) {
  const t = translations[lang];

   const products = useMemo(() => {
    return productItems.map((item) => {
      const name = t.products.names[item.key];
      const description = t.products.productDesc.replace("{name}", name);
      return { ...item, name, description };
    });
  }, [t]);

  return (
    <section
      id="products"
      className="section"
    >

      <div className="section-header">

        <h2 style={{ textAlign: "center" }}>
          {t.products.title}
        </h2>

        <p>{t.products.desc}</p>

      </div>

      <div className="product-grid">

        {products.map((product) => (

          <article
            className="product-card"
            key={product.key}
          >

            <div className="product-media">
              <img
                src={product.icon}
                alt={product.name}
                loading="lazy"
              />
            </div>

            <div className="product-content">

              <h3 style={{ textAlign: "center" }}>
                {product.name}
              </h3>

              {/* <p>{product.description}</p> */}

            </div>

          </article>

        ))}

      </div>
    </section>
  );
}

export default Products;