import "./About.scss";
import sliderImg1 from "../../assets/about_banner1.jpg";
import quality from "../../assets/icon/quality.png";
import fashion from "../../assets/icon/fashion.png";
import trust from "../../assets/icon/trust.png";
import person from "../../assets/icon/person.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="wrapper">
        <div className="banner">
          <img
            src={sliderImg1}
            alt="About banner"
            width="100%"
            height="auto"
            className="bannerImg"
          />
        </div>
        <div className="content">
          <div className="overTab">
            <div className="title">ThreadHaven</div>
            <p>
              At ThreadHaven, we extend a warm and heartfelt welcome to each and
              every one of our valued customers. As you step into our world, we
              invite you to experience more than just a transaction; it's about
              building connections, creating memories, and embarking on a
              journey together. Our dedicated team is committed to ensuring that
              your experience with us is nothing short of exceptional.{" "}
            </p>
            <Link to="/">
              {" "}
              <button>Explore More</button>
            </Link>
          </div>
          <div className="right">
            <div className="title">Why Choose Us?</div>
            <p>
              At ThreadHaven, we take pride in our commitment to providing an
              unparalleled experience for our customers. Experience the
              ThreadHaven difference today and discover why we're the preferred
              choice for fashion enthusiasts worldwide.
            </p>
            <div className="points">
              <div className="point">
                <img src={quality} alt="Quality" />
                <p>
                  <span>Exceptional Quality</span>
                </p>
              </div>
              <div className="point">
                <img src={fashion} alt="Quality" />
                <p>
                  <span>Trendsetting Styles</span>
                </p>
              </div>
              <div className="point">
                <img src={trust} alt="Quality" />
                <p>
                  <span>Trust and Reliability</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviewContainer">
        <div className="reviewWrapper">
          {" "}
          <div className="reviewTitle">Know From Our Customers...</div>
          <div className="reviews">
            <div className="review">
              <img src={person} alt="Quality" />
              <div className="name">Monica Jaiswal</div>
              <div className="comment">
                "ThreadHaven exceeded my expectations! The quality of their
                clothing is impeccable, and their customer service is
                outstanding. From browsing their trendy collections to receiving
                my order, every step was seamless. I'll definitely be a
                returning customer!"
              </div>
            </div>
            <div className="review">
              <img src={person} alt="Quality" />
              <div className="name">Monica Jaiswal</div>
              <div className="comment">
                "ThreadHaven exceeded my expectations! The quality of their
                clothing is impeccable, and their customer service is
                outstanding. From browsing their trendy collections to receiving
                my order, every step was seamless. I'll definitely be a
                returning customer!"
              </div>
            </div>
            <div className="review">
              <img src={person} alt="Quality" />
              <div className="name">Monica Jaiswal</div>
              <div className="comment">
                "ThreadHaven exceeded my expectations! The quality of their
                clothing is impeccable, and their customer service is
                outstanding. From browsing their trendy collections to receiving
                my order, every step was seamless. I'll definitely be a
                returning customer!"
              </div>
            </div>
            <div className="review">
              <img src={person} alt="Quality" />
              <div className="name">Monica Jaiswal</div>
              <div className="comment">
                "ThreadHaven exceeded my expectations! The quality of their
                clothing is impeccable, and their customer service is
                outstanding. From browsing their trendy collections to receiving
                my order, every step was seamless. I'll definitely be a
                returning customer!"
              </div>
            </div>
            <div className="review">
              <img src={person} alt="Quality" />
              <div className="name">Monica Jaiswal</div>
              <div className="comment">
                "ThreadHaven exceeded my expectations! The quality of their
                clothing is impeccable, and their customer service is
                outstanding. From browsing their trendy collections to receiving
                my order, every step was seamless. I'll definitely be a
                returning customer!"
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
