import "./Slider.scss";
import sliderImg1 from "../../assets/slider-1.jpg";
import sliderImg2 from "../../assets/slider-2.jpg";
import sliderImg3 from "../../assets/slider-3.jpg";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
  };

  return (
    <div className="slider">
      <div
        className="sliderContainer"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <div className="slider1">
          <img src={sliderImg1} alt="" />
          <div className="info">
            {" "}
            <div className="slider1Title">THREADHAVEN</div>
            <div className="slider1Text">
              &quot;Fashion is the armor to <br />
              survive the reality of everyday life.&quot;
            </div>
            <div className="button">
              {" "}
              <Link className="link" to="/ShoppingSite/products/2">
                Explore More
              </Link>
            </div>
          </div>
        </div>
        <div className="slider2">
          {" "}
          <img src={sliderImg2} alt="" />
          <div className="info2">
            <div className="slider1Title">SALE!!!</div>
            <div className="slider1Text">
              Apply coupon #MENSWEAR to get 10% off on every product from men
              category!
            </div>
            <div className="button">
              <Link className="link" to="/ShoppingSite/products/1">
                Explore More
              </Link>
            </div>
          </div>
        </div>
        <div className="slider3">
          {" "}
          <img src={sliderImg3} alt="" />
          <div className="info3">
            <div className="slider1Title">SALE!!!</div>
            <div className="slider1Text">
              Apply coupon #WOMENSWEAR to get 10% off on every product from
              women category!
            </div>
            <div className="button">
              {" "}
              <Link className="link" to="/ShoppingSite/products/2">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <BiLeftArrow />
        </div>
        <div className="icon" onClick={nextSlide}>
          <BiRightArrow />
        </div>
      </div>
    </div>
  );
};

export default Slider;
