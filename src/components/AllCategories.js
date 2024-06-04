import { default as React } from "react";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import { songsData } from "../lib/songs-data";
import { getBackgroundImageUrl } from "../lib/util";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";

const Home = () => {
  const songCategories = [...new Set(songsData.map((song) => song.category))];
  return (
    <>
      <Navbar />
      <div className="h-full w-full flex flex-col p-10">
        <div className="rounded-md p-5 bg-black align-middle text-center xs:text-md sm:text-lg md:text-xl lg:text-3xl xl:text-4xl bold tracking-wide text-gray-100 ">
          Welcome!
        </div>
        <div className="rounded-md p-5 bg-black align-middle text-center xs:text-sm sm:text-md md:text-lg lg:text-2xl xl:text-3xl bold tracking-wide text-gray-100 ">
          Enjoy taking a musical journey to the Vaishnava Divya Desams alongside{" "}
          <br />
          Dr. D. Veeraragavathatham
        </div>
        <div className="flex flex-col flex-wrap content-center">
          <div className="container grid grid-cols-2 gap-10">
            {songCategories.map((category, index) => (
              <NavLink to={`/category/${category}`} key={index}>
                <div
                  className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat text-center"
                  style={{
                    backgroundImage: getBackgroundImageUrl(category),
                    width: "100%",
                    height: "25vh",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden bg-fixed"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="flex h-full items-center justify-center">
                      <div className="text-white">
                        <h1 className="text-center xs:text-md sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl bold tracking-wide text-white ">
                          {category}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
