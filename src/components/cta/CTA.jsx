import "./cta.scss";

const CTA = () => {
  return (
    <div className="cta" id="contactUs">
      <div className="trapezoid">
        <img
          src="/Rectangle 83.png"
          alt=""
          draggable={false}
          className="trapImg"
        />
        <div className="content">
          <div className="leftImg">
            <img src="/Image (10).png" alt="" />
          </div>
          <div className="rightInfo">
            <h3>LET'S START GYM</h3>
            <h3 className="red">TRAINING NOW</h3>
            <p>
              Get 50% off the first three classes you sign up for this month any
              GYM membership
            </p>
            <div className="inputContainer">
              <input type="text" placeholder="Enter your name..." />
              <input type="text" placeholder="Phone number..." />
              <input
                type="text"
                placeholder="Email address..."
                className="emailInput"
              />
            </div>
            <button>LETS JOIN NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
