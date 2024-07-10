import "./trainers.scss";
import { IoStar } from "react-icons/io5";

const Trainers = () => {
  return (
    <div className="trainers" id="trainers">
      <h2>OUR PROFESSIONAL</h2>
      <h2 className="red">TRAINERS</h2>
      <p className="desc">
        Whether {"you're"} looking to set up a home gym or enhance your current
        workout routine
      </p>
      <div className="trainCards">
        <div className="trainCard">
          <div className="imgCont">
            <img src="/Image (4).png" alt="" />
          </div>
          <div className="info">
            <p className="name">BORNEY EXITEID</p>
            <p className="rate">Rate Trainer: </p>
            <div className="stars">
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
            </div>
          </div>
        </div>
        <div className="trainCard">
          <div className="imgCont">
            <img src="/Image (5).png" alt="" />
          </div>
          <div className="info">
            <p className="name">ELSA WINDIA</p>
            <p className="rate">Rate Trainer: </p>
            <div className="stars">
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
            </div>
          </div>
        </div>
        <div className="trainCard">
          <div className="imgCont">
            <img src="/Image (6).png" alt="" />
          </div>
          <div className="info">
            <p className="name">GEOURGE ARYO</p>
            <p className="rate">Rate Trainer: </p>
            <div className="stars">
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
            </div>
          </div>
        </div>
        <div className="trainCard">
          <div className="imgCont">
            <img src="/Image (7).png" alt="" />
          </div>
          <div className="info">
            <p className="name">BORNEY EXITEID</p>
            <p className="rate">Rate Trainer: </p>
            <div className="stars">
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
            </div>
          </div>
        </div>
        <div className="trainCard">
          <div className="imgCont">
            <img src="/Image (4).png" alt="" />
          </div>
          <div className="info">
            <p className="name">BORNEY EXITEID</p>
            <p className="rate">Rate Trainer: </p>
            <div className="stars">
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
