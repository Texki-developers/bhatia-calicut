import React from "react";
import Button from "../UI/Button";

export default function Banner() {
  return (
    <div
      className="flex justify-center w-[100%] min-h-[70vh] md:min-h-[80vh]"
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
        <Button className="btn-solid rounded-full">
          Book for free consultation
        </Button>
      </div>
    </div>
  );
}
