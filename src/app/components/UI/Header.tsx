"use client";
import React, { useEffect, useState } from "react";
import Image from "./Image";
import Link from "next/link";
import clsx from "clsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        "w-[100%] fixed top-0 left-0 z-50",
        scrolled &&
          "bg-white/30 backdrop-blur-md border-b border-white/20 shadow-md"
      )}
    >
      <div className="common-x-spacing">
        <div className="flex items-center justify-between py-4">
          <Link href="/">
            <Image
              src={scrolled ? "/logo-invert.png" : "/logo.png"}
              alt="Bhatia Calicut Logo"
              parentClass="aspect-[1.5/1] w-[6rem] h-[auto]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
