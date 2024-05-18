import React from "react";
import { useParams } from "react-router-dom";
import { songsData } from "../lib/songs-data";
import { getBackgroundImageUrl } from "../lib/util";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";

const Song = () => {
  const { id } = useParams();
  const currentSong = songsData.filter((song) => song.id === id);

  return (
    <>
      <Navbar />
      <div className="songDetail ">
        <div
          className="songDetailTitle "
          style={{
            backgroundImage: getBackgroundImageUrl(currentSong[0].category),
            height: "25vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="rounded-md pt-5 bg-black align-middle text-center xs:text-2xl sm:text-3xl md:text-4xl text-6xl bold tracking-wide text-gray-100 ">
          {currentSong[0].sthalam} &nbsp; &#x1F3B5;&nbsp;&nbsp;
          {currentSong[0].songTitle}
        </div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-20 pt-20 pb-20">
          <div>
            <div className="grid w-full grid-cols-2 sm:grid-cols-2 rounded-md p-2">
              <div className="font-light pl-4 grow-0 col-span-1 text-center">
                Author:
              </div>
              <div className="col-span-1 text-left break-words">
                {currentSong[0].author}
              </div>
            </div>
            <div className="grid w-full grid-cols-2 sm:grid-cols-2 rounded-md p-2">
              <div className="font-light pl-4 grow-0 col-span-1 text-center">
                Raga:
              </div>
              <div className="col-span-1 text-left break-words">
                {currentSong[0].songRagam}
              </div>
            </div>
            <div className="grid w-full grid-cols-2 sm:grid-cols-2 rounded-md p-2">
              <div className="font-light pl-4 grow-0 text-center col-span-1">
                Thala:
              </div>
              <div className="col-span-1 break-words">
                {currentSong[0].songThalam}
              </div>
            </div>
            {currentSong[0].songURL && (
              <div className="grid w-full grid-cols-2 sm:grid-cols-2 rounded-md p-2">
                <div className="font-light pl-4 grow-0 text-center col-span-1">
                  Song on <br />
                  {currentSong[0].sthalam}:
                </div>
                <iframe
                  title={currentSong[0].songTitle}
                  src={currentSong[0].songURL}
                  width="100%"
                  height="100"
                  scrolling="no"
                  frameBorder="no"
                  loading="lazy"
                ></iframe>
              </div>
            )}
            {currentSong[0].additionalSongs && (
              <div className="grid w-full grid-cols-2 sm:grid-cols-2 rounded-md p-2">
                <div className="font-light pl-4 grow-0 text-center col-span-1">
                  Additional Songs:
                </div>
                <div className="items-center">
                  {currentSong[0].additionalSongs.map((additionalSong, id) => (
                    <iframe
                      key={id}
                      title={currentSong[0].songRagam}
                      src={additionalSong}
                      width="100%"
                      height="100"
                      scrolling="no"
                      frameBorder="no"
                      loading="lazy"
                    ></iframe>
                  ))}
                </div>
              </div>
            )}
            {currentSong[0].songIntro !== "<span></span>" && (
              <div className="grid w-full grid-cols-2 sm:grid-cols-2 rounded-md p-2">
                <div className="font-light pl-4 grow-0 text-center col-span-1">
                  Background Story:
                </div>
                <div
                  className="container mx-auto wrap justify-center items-center text-justify h-22 overflow-y-auto"
                  dangerouslySetInnerHTML={{ __html: currentSong[0].songIntro }}
                ></div>
              </div>
            )}
          </div>
          <div>
            {currentSong[0].songLyrics && (
              <div className="songDetailLyricsStory container mx-auto wrap">
                <div className="lyrics items-center ">
                  <iframe
                    title={currentSong[0].songTitle}
                    src={currentSong[0].songLyrics}
                    width="100%"
                    height="770"
                    frameBorder="no"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Song;
