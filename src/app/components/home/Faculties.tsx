import React from "react";
import SwiperSlider from "../UI/SwiperSlider";
import FacultyCard from "../UI/FacultyCard";

const cards = [
  {
    name: "Dr. Bhatia",
    subject: "Biology Faculty",
    description:
      "Dr. John Doe, MBBS (Calicut Medical College), brings over 10 years of medical experience.",
    image: "/images/mentors/mentor.jpg",
  },
  {
    name: "Dr. Bhatia",
    subject: "Biology Faculty",
    description:
      "Dr. John Doe, MBBS (Calicut Medical College), brings over 10 years of medical experience.",
    image: "/images/mentors/mentor.jpg",
  },
  {
    name: "Dr. Bhatia",
    subject: "Biology Faculty",
    description:
      "Dr. John Doe, MBBS (Calicut Medical College), brings over 10 years of medical experience.",
    image: "/images/mentors/mentor.jpg",
  },
  {
    name: "Dr. Bhatia",
    subject: "Biology Faculty",
    description:
      "Dr. John Doe, MBBS (Calicut Medical College), brings over 10 years of medical experience.",
    image: "/images/mentors/mentor.jpg",
  },
  {
    name: "Dr. Bhatia",
    subject: "Biology Faculty",
    description:
      "Dr. John Doe, MBBS (Calicut Medical College), brings over 10 years of medical experience.",
    image: "/images/mentors/mentor.jpg",
  },
  {
    name: "Dr. Bhatia",
    subject: "Biology Faculty",
    description:
      "Dr. John Doe, MBBS (Calicut Medical College), brings over 10 years of medical experience.",
    image: "/images/mentors/mentor.jpg",
  },
  {
    name: "Dr. Bhatia",
    subject: "Biology Faculty",
    description:
      "Dr. John Doe, MBBS (Calicut Medical College), brings over 10 years of medical experience.",
    image: "/images/mentors/mentor.jpg",
  },
];

export default function Faculties() {
  return (
    <div className="flex justify-center w-[100%]">
      <div className="common-x-spacing flex flex-col items-center gap-[2rem] md:gap-[4rem] w-[100%]">
        <div className="flex flex-col items-center justify-center gap-[1rem] text-center">
          <h2 className="heading text-dark font-[700]">Meet Our Faculties</h2>
          <p className="caption text-gray font-[500] max-w-[55rem]">
            Since 1996, Bhatia Calicut has been a beacon has excellence in NEET
            PG/NEXT preparation, offering unparalleled mentorship guidance to
            aspiring medical proffessionals
          </p>
        </div>

        <SwiperSlider
          items={cards}
          renderItem={(card, index) => (
            <FacultyCard
              key={index}
              subject={card.subject}
              name={card.name}
              description={card.description}
              image={card.image}
            />
          )}
          autoplay
          spaceBetween={40}
          slidesPerView={4}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            769: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1500: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
        />
      </div>
    </div>
  );
}
