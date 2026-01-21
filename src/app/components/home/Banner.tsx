'use client';

import React from "react";
import Button from "../UI/Button";
import { Download } from "lucide-react";

export default function Banner() {
  const handleBrochureClick = () => {
    if (typeof window !== "undefined") {
      window.open("/pdf/bhatia-brochure.pdf", "_blank");
    }
  };

  return (
    <div
      className="flex justify-center w-[100%] min-h-[70vh] md:min-h-[80vh] pt-[7rem] lg:pt-[4rem]"
      id="banner"
      style={{
        backgroundImage: `
          linear-gradient(
            0deg,
            rgba(9, 46, 73, 1) 0%,
            rgba(9, 46, 73, 0.82) 40%,
            rgba(217, 217, 217, 0) 100%,
            rgba(9, 46, 73, 1) 68%
          ),
          url("/images/celebration.png")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="common-x-spacing text-center flex flex-col items-center justify-center gap-[1rem]">
        <h1 className="heading-main">
          India’s Most <span className="text-primary-100">Trusted</span> Symbol
          in
        </h1>
        <h2 className="heading">NEET PG/NEXT PREPARATION SINCE 1996</h2>
        <Button className="btn-solid rounded-full flex items-center gap-2" onClick={handleBrochureClick}>
          <Download className="w-4 h-4" />
          <span>View Brochure</span>
        </Button>
      </div>
    </div>
  );
}
