import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <img className="bgImg" src="/Image (2).png" alt="" />

      <div className="leftText">
        <h1>WE HAVE A LOT OF</h1>
        <h1 className="red">EXPERIENCE</h1>
        <div className="text">
          <p>
            In quisque nunc dictumst etiam pellentesque et. Vel malesuada diam
            lorem tellus. Amet mauris feugiat ipsum natoque odio donec. Sit at
            lacus consequat justo odio condimentum dui. Faucibus id blandit
            feugiat mi tellus sit etiam donec aliquam. Dictumst egestas ut
            facilisi vel.
          </p>
          <p>
            Sem consequat fermentum pellentesque risus purus quis gravida. Nulla
            porttitor ultrices facilisis non commodo diam morbi cursus eu.
            Semper ut in mauris gravida id cursus urna. Magnis vulputate orci
            risus felis eget lectus morbi. Et cursus mauris condimentum pretium
            arcu sed dignissim.
          </p>
        </div>
        <button>ABOUT US</button>
      </div>
      <div className="rightImg">
        <div className="imgCont">
          <img src="/image (3).png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
