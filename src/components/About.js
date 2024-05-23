import React from "react";
import { getBackgroundImageUrl } from "../lib/util";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="h-full grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-5 pb-20">
        <div
          className="bg-cover bg-center h-screen m-10"
          style={{
            backgroundImage: getBackgroundImageUrl("About"),
          }}
        ></div>
        <div className="text-justify tracking-wide pt-10 ml-10 mr-10 xs:text-sm sm:text-sm md:text-md lg:text-lg xl:text-xl">
          <p className="mb-5">
            The author, Dr. D. VEERARAGAVATHATHAM, Ph.D. (Horticulture) is the
            son of Srirangam Kodikannikathanam Desikathathachary and is a
            retired Dean of Horticultural College in Tamil Nadu Agricultural
            University, India.
          </p>
          <p className="mb-5">
            From his childhood days, he had a passion for Indian music, both
            Classical Carnatic and Indian film music. His mother, late Smt.
            Lakshmi Ammal, was a Carnatic Music disciple of music legend Sattur
            A.G. Subramania Iyer. She regularly performed in gatherings and
            celebrations. The author grew up listening to her and learning from
            her. Right from early days, he had a passion to identify the ragas
            of Carnatic songs and film songs based on Carnatic music.
          </p>
          <p className="mb-5">
            The author regularly listened to katcheris of great legends like
            M.S. Subbulakshmi, Madurai Mani Iyer, D.K. Pattammal, Dr. Sirkazhi
            Govindarajan, T.M.Soundararajan, Dr. K.J. Yesudas, Dr. Jeyaraman,
            Unnikrishnan as well as instrumental katcheris of Kadri Gopalnath,
            Karaikurichi Arunachalam and others. The author himself performed on
            stage alongside other Carnatic music singers with supporting
            instrumental artists of Harmonimum, Mridhangam, Thabela at Varadarja
            Perumal Koil, P. N. Pudur, Coimbatore, and also regularly
            participated in bhajans and Naamavali renditions.
          </p>
          <p className="mb-5">
            During the pre-covid period, when he traveled to certain temples in
            South India he had an urge to compose and sing songs in specific
            Carnatic ragas. He experienced this feeling especially in
            Soundararaja Perumal kovil of Thadikombu (Dindigul district, Tamil
            Nadu) and Yoga Narasimhar temple (Thondanur Mandiya district ,
            Karnataka). During the covid pandemic, he started writing on
            Sriranga Perumal Thayaar Mahalakshmi, Narasimhar, Sudarshanar,
            Krishna seeking their grace to bring an end to the dreaded disease
            of Covid-19. He also wrote Krithis on Achariars and Azhwars.
          </p>
          <p className="mb-5">
            The music on this website started as a project when the author's
            wife Smt. Amudha suggested he write Krithis on Perumals of 108 Divya
            Desams. His daughter Smt. Hema suggested incorporating the name of
            the ragam towards the end of the song and his name as a musical
            signature. Then he started singing along with his wife Smt. Amudha
            and sharing the recording and the sthala puranam in whatsapp with
            his family and friends. Based on the positve feedback he received
            from his audience, he decided to work with his daughter Smt. Hema,
            to present the work as an e-book and this website for the listeners
            who want to enjoy the divine musical journey of the 108 Divya
            Desams.
          </p>
          <p className="mb-5">
            By the grace of Shreeman Narayanan, Aazhwars and Aachariars, the
            musical journey to all 108 Divya Desams has been completed through
            the 108 Krithis sung in 108 different ragas.
          </p>
        </div>
        {/* </div> */}
        {/* <div className="flex flex-row sm:flex-col md:flex-col lg:flex-row justify-center p-10">
          <div
            className="bg-cover"
            style={{
              width: "100%",
              height: "auto",
              backgroundImage: getBackgroundImageUrl("About"),
              // backgroundPosition: "center",
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "cover",
            }}
          ></div>
          <div className="text-justify tracking-wide text-xl ml-10 mr-10 xs:text-md sm:text-md md:text-md">
            <p className="mb-5">
              The author, Dr. D. VEERARAGAVATHATHAM, Ph.D. (Horticulture) is the
              son of Srirangam Kodikannikathanam Desikathathachary and is a
              retired Dean of Horticultural College in Tamil Nadu Agricultural
              University, India.
            </p>
            <p className="mb-5">
              From his childhood days, he had a passion for Indian music, both
              Classical Carnatic and Indian film music. His mother, late Smt.
              Lakshmi Ammal, was a Carnatic Music disciple of music legend
              Sattur A.G. Subramania Iyer. She regularly performed in gatherings
              and celebrations. The author grew up listening to her and learning
              from her. Right from early days, he had a passion to identify the
              ragas of Carnatic songs and film songs based on Carnatic music.
            </p>
            <p className="mb-5">
              The author regularly listened to katcheris of great legends like
              M.S. Subbulakshmi, Madurai Mani Iyer, D.K. Pattammal, Dr. Sirkazhi
              Govindarajan, T.M.Soundararajan, Dr. K.J. Yesudas, Dr. Jeyaraman,
              Unnikrishnan as well as instrumental katcheris of Kadri Gopalnath,
              Karaikurichi Arunachalam and others. The author himself performed
              on stage alongside other Carnatic music singers with supporting
              instrumental artists of Harmonimum, Mridhangam, Thabela at
              Varadarja Perumal Koil, P. N. Pudur, Coimbatore, and also
              regularly participated in bhajans and Naamavali renditions.
            </p>
            <p className="mb-5">
              During the pre-covid period, when he traveled to certain temples
              in South India he had an urge to compose and sing songs in
              specific Carnatic ragas. He experienced this feeling especially in
              Soundararaja Perumal kovil of Thadikombu (Dindigul district, Tamil
              Nadu) and Yoga Narasimhar temple (Thondanur Mandiya district ,
              Karnataka). During the covid pandemic, he started writing on
              Sriranga Perumal Thayaar Mahalakshmi, Narasimhar, Sudarshanar,
              Krishna seeking their grace to bring an end to the dreaded disease
              of Covid-19. He also wrote Krithis on Achariars and Azhwars.
            </p>
            <p className="mb-5">
              The music on this website started as a project when the author's
              wife Smt. Amudha suggested he write Krithis on Perumals of 108
              Divya Desams. His daughter Smt. Hema suggested incorporating the
              name of the ragam towards the end of the song and his name as a
              musical signature. Then he started singing along with his wife
              Smt. Amudha and sharing the recording and the sthala puranam in
              whatsapp with his family and friends. Based on the positve
              feedback he received from his audience, he decided to work with
              his daughter Smt. Hema, to present the work as an e-book and this
              website for the listeners who want to enjoy the divine musical
              journey of the 108 Divya Desams.
            </p>
            <p className="mb-5">
              By the grace of Shreeman Narayanan, Aazhwars and Aachariars, the
              musical journey to all 108 Divya Desams has been completed through
              the 108 Krithis sung in 108 different ragas.
            </p>
          </div>
        </div> */}
      </div>

      <Footer />
    </>
  );
}
