import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { songsData } from "../lib/songs-data";
import { getBackgroundImageUrl } from "../lib/util.js";
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
        <div className="songDetail flex-1">
          <div
            className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
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
        <div className="songDetail flex-1">
          <div className="pt-5 bg-black align-middle">
            <div className="flex flex-col p-10">
              <div className="overflow-x-auto">
                <div className="w-full inline-block align-middle">
                  <div className="overflow-hidden border rounded-lg">
                    <table className="w-screen table:auto min-w-full divide-y divide-gray-200">
                      {/* <thead className="bg-gray-100">
                      <tr className="flex flex-row">
                        <th
                          scope="col"
                          className="w-1/12 px-6 py-4 text-left text-md text-gray-500 uppercase tracking-wide"
                        >
                          Id
                        </th>
                        <th
                          scope="col"
                          className="w-1/3 px-3 py-4 text-left text-md text-gray-500 uppercase tracking-wider"
                        >
                          Sthalam
                        </th>
                        <th
                          scope="col"
                          className="w-1/3 px-3 py-4 text-left text-md text-gray-500 uppercase tracking-wider"
                        >
                          Song
                        </th>
                        <th
                          scope="col"
                          className="w-1/5 px-3 py-4 text-left text-md text-gray-500 uppercase tracking-wider"
                        >
                          Author
                        </th>
                      </tr>
                    </thead> */}
                      <tbody className="divide-y divide-gray-200">
                        {songsFromCurrentCategory.map((song, index) => (
                          <tr className="tr-class" key={index}>
                            <td className="td-class px-3 py-4">
                              <NavLink to={`/song/${song.id}`} key={index}>
                                {song.id}
                              </NavLink>
                            </td>
                            <td className="td-class w-1/4 px-3 py-4">
                              <NavLink to={`/song/${song.id}`} key={index}>
                                {song.sthalam}
                              </NavLink>
                            </td>
                            <td className="td-class w-1/3 px-3 py-4">
                              <NavLink to={`/song/${song.id}`} key={index}>
                                {song.songTitle}
                              </NavLink>
                            </td>
                            <td className="td-class w-1/3 px-3 py-4">
                              <NavLink to={`/song/${song.id}`} key={index}>
                                {song.author}
                              </NavLink>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
