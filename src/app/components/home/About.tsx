import React from "react";
import AboutCard from "../UI/AboutCard";

export default function About() {
  return (
    <div className="flex justify-center w-[100%] scroll-mt-30" id="about">
      <div className="common-x-spacing flex flex-col items-center gap-[2rem] md:gap-[4rem]">
        <div className="flex flex-col items-center justify-center gap-[1rem] text-center">
          <h2 className="heading text-dark font-[700]">
            Why choose Bhatia Calicut?
          </h2>
          <p className="caption text-gray font-[500] max-w-[55rem]">
            Since 1996, Bhatia Calicut has been a beacon has excellence in NEET
            PG/NEXT preparation, offering unparalleled mentorship guidance to
            aspiring medical proffessionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1rem] md:gap-[2rem]">
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </div>
      </div>
    </div>
  );
}
