import React from "react";
import Image from "./Image";

export default function Header() {
  return (
    <div className="w-[100%] fixed top-0 left-0 z-50">
      <div className="common-x-spacing">
        <div className="flex items-center justify-between py-4">
          <Image
            src="/logo.png"
            alt="Bhatia Calicut Logo"
            parentClass="aspect-[1.5/1] w-[6rem] h-[auto]"
          />
        </div>
      </div>
    </div>
  );
}
