import { IoStar } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./testimonials.scss";
import { useState } from "react";

const data = [
  {
    text: "I am extremely grateful for the positive impact gym training has had on my life; through consistent training, expert guidance from coaches, and access to top-notch facilities, I have witnessed a remarkable transformation in strength, endurance, and overall fitness levels.",
    name: "JHONY BREAKER",
    img: "/Image (9).png",
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas qui natus ullam, corporis aspernatur consectetur doloribus, incidunt voluptatibus quod similique tenetur nemo, sapiente neque vero ut. Reprehenderit dolores porro perferendis.",
    name: "JANE DOE",
    img: "/Image (5).png",
  },
  {
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas qui natus ullam, corporis aspernatur consectetur doloribus, incidunt voluptatibus quod similique tenetur nemo, sapiente neque vero ut. Reprehenderit dolores porro perferendis.",
    name: "JON DOE",
    img: "/Image (6).png",
  },
];

const Testimonials = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    if (selectedIndex == data.length - 1) setSelectedIndex(0);
    else setSelectedIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (selectedIndex == 0) setSelectedIndex(data.length - 1);
    else setSelectedIndex((prev) => prev - 1);
  };

  return (
    <div className="testimonial" id="testimonials">
      <img src="/Image (8).png" alt="" className="testBG" />
      <div className="filler"></div>

      <div className="testCont">
        <div className="testTitle">
          <span>WHAT</span>
          <span className="red"> CLIENTS SAY </span>
          <span>WITH US</span>
        </div>

        <div className="carousel">
          <IoIosArrowBack className="arrow" onClick={handlePrev} />
          <div className="data">
            <p className="revText">"{data[selectedIndex].text}"</p>
            <div className="stars">
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
            </div>
            <span>{data[selectedIndex].name}</span>
            <img
              src={data[selectedIndex].img}
              alt=""
              className="avatar"
              draggable={false}
            />
          </div>
          <IoIosArrowForward className="arrow" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
