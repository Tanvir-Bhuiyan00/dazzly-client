import { Link } from "react-router-dom";

const BannerTemplate = ({ sliderImg, sliderTitle, textContainer }) => {
  return (
    <div
      className="hero min-h-screen min-w-full "
      style={{
        position: "relative",
        width: "100vw",
        backgroundImage: `url(${sliderImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className={`flex ${textContainer} text-center md:w-3/4 md:text-left text-neutral-content`}>
        <div className="md:w-2/3">
          <h1 className="mb-5 text-5xl leading-tight font-display font-bold">
            {sliderTitle}
          </h1>
          <Link to="/login">
            <button className="btn btn-accent text-white font-body">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerTemplate;
