import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { songsData } from "../lib/songs-data";
import { getBackgroundImageUrl } from "../lib/util";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
const Category = () => {
  const { categoryName } = useParams();
  const songsFromCurrentCategory = songsData.filter(
    (category) => category.category === categoryName
  );
  return (
    <>
      <Navbar />
      <div className="songDetail">
        <div
          className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat text-center"
          style={{
            backgroundImage: getBackgroundImageUrl(categoryName),
            height: "25vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            <div className="flex h-full items-center justify-center">
              <div className="text-white">
                <h1 className="text-center xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl bold tracking-wide text-gray-100 ">
                  {categoryName}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center max-w-full overflow-hidden h-full pt-20 pb-40">
        <div className="flex flex-col bg-black border rounded">
          <div className="divide-y divide-gray-200 xs:text-md sm:text-md md:text-xl lg:text-xl xl:text-xl">
            {songsFromCurrentCategory.map((song, index) => (
              <NavLink to={`/song/${song.id}`} key={index} className="row">
                <div className="cell">{song.id}</div>
                <div className="cell w-1/3 ">{song.sthalam}</div>
                <div className="cell w-1/3 ">{song.songTitle}</div>
                <div className="cell w-1/3 ">{song.author}</div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
