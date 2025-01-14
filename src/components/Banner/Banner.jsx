import "./Banner.css";

import banner1 from "../../../public/images/banner5.jpg";
import banner2 from "../../../public/images/banner1.png";
import banner3 from "../../../public/images/banner2.png";
import banner4 from "../../../public/images/banner3.png";

const Banner = () => {
  return (
    <section className="banner__section">
      <div className="banner__slides">
        {/* Duplicating slides for circular effect */}
        <img src={banner1} alt="Banner 1" />
        <img src={banner2} alt="Banner 2" />
        <img src={banner3} alt="Banner 3" />
        <img src={banner4} alt="Banner 4" />
        <img src={banner1} alt="Banner 1 Duplicate" />
      </div>
    </section>
  );
};

export default Banner;
