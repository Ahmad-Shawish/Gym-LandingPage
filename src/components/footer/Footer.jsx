import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="text">
        <div className="title">
          <span>IRON</span>
          <span className="red">GYM</span>
        </div>
        <div className="links">
          <a href="#">HOME</a>
          <a href="#service">SERVICE</a>
          <a href="#trainers">TRAINERS</a>
          <a href="#testimonials">TESTIMONIAL</a>
          <a href="#contactUs">CONTACT US</a>
        </div>
      </div>

      <hr />
      <div className="copyright">
        <p>Privacy | Terms and condition</p>
        <p>Ⓒ 2023 All rights reserved. IronGym Company</p>
      </div>
    </div>
  );
};

export default Footer;
