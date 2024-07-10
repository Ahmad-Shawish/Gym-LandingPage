import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero" id="#">
      <div className="container">
        <div className="title">
          <h1>READY TO TRAIN</h1>
          <h1 className="redText">YOUR BODY</h1>
        </div>
        <p className="desc">
          Gym training is a structured and disciplined approach to physical
          exercise that focuses on strength, endurance and overall fitness
          improvement.
        </p>
        <button>LETS JOIN NOW</button>
        <div className="props">
          <div>
            <p className="redProp">20+</p>
            <p>Years of Experience</p>
          </div>
          <hr />
          <div>
            <p className="redProp">15K+</p>
            <p>Members Join</p>
          </div>
          <hr />
          <div>
            <p className="redProp">14K+</p>
            <p>Happy Members</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
