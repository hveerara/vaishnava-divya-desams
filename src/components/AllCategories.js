import { default as React } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import { songsData } from "../lib/songs-data";
import { getBackgroundImageUrl } from "../lib/util";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 250 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Home = () => {
  const songCategories = [...new Set(songsData.map((song) => song.category))];
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col justify-center">
        <div className="rounded-md p-5 bg-black align-middle text-center xs:text-xl sm:text-3xl md:text-4xl text-6xl bold tracking-wide text-gray-100 ">
          Welcome!
        </div>
        <div className="rounded-md p-5 bg-black align-middle text-center xs:text-xl sm:text-3xl md:text-4xl text-6xl bold tracking-wide text-gray-100 ">
          Enjoy taking a musical journey to the Vaishnava Divya Desams alongside{" "}
          <br />
          Dr. D. Veeraragavathatham
        </div>
        <div className="main">
          <Carousel
            responsive={responsive}
            autoPlay={false}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-10-px"
          >
            {songCategories.map((category, index) => (
              <NavLink to={`/category/${category}`} key={index}>
                <div
                  className="sliderItemImage"
                  key={index}
                  style={{
                    backgroundImage: getBackgroundImageUrl(category),
                    height: "25vh",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="sliderItemText">
                  <div className="text-gray-300 text-2xl bold tracking-wider p-1 text-center break-words">
                    {category}
                  </div>
                </div>
              </NavLink>
            ))}
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
