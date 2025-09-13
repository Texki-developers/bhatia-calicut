import React from "react";
import { EducateIcon } from "../utilities/Icons";

export default function AboutCard() {
  return (
    <div className="flex flex-col text-black items-center w-[100%] p-[2rem] rounded-[25px] border-[2px] border-[#F3F4F6] bg-white gap-[1rem]">
      <div className="aspect-square bg-primary-50 p-[0.5rem] rounded-full">
        <EducateIcon className="text-primary-500" width={30} height={30} />
      </div>
      <h6 className="font-semibold text-center">Educate and Empower</h6>
      <p className="body-text text-gray font-[500] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, nisi!
      </p>
    </div>
  );
}
