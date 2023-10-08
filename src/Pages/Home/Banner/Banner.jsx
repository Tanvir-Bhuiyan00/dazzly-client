import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import sliderOne from "../../../assets/slider1.jpg";
import sliderTwo from "../../../assets/slider2.jpg";
import sliderThree from "../../../assets/slider3.jpg";
import mobiSliderOne from "../../../assets/mobile-slider-1.jpg";
import mobiSliderTwo from "../../../assets/mobile-slider-2.jpg";
import mobiSliderThree from "../../../assets/mobile-slider-3.jpg";
import BannerTemplate from "./BannerTemplate";
import { useEffect, useState } from "react";

const Banner = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < 768; // Adjust the breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider w-full">
        <div className="keen-slider__slide">
          <BannerTemplate
            sliderImg={isMobile ? mobiSliderOne : sliderOne}
            sliderTitle="AMAZING JEWELRY COLLECTION"
          ></BannerTemplate>
        </div>
        <div className="keen-slider__slide">
          <BannerTemplate
            sliderImg={isMobile ? mobiSliderTwo : sliderTwo}
            sliderTitle="NEW DESIGN WEDDING RINGS"
            textContainer="md:pl-28 md:justify-end"
          ></BannerTemplate>
        </div>
        <div className="keen-slider__slide">
          <BannerTemplate
            sliderImg={isMobile ? mobiSliderThree : sliderThree}
            sliderTitle="FASHIONABLE DESIGNING JEWELLARY"
            textContainer="md:pl-28 md:justify-end"
          ></BannerTemplate>
        </div>
      </div>
    </>
  );
};

export default Banner;
