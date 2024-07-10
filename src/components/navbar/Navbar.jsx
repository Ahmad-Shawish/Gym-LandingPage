import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <span>IRON</span>
        <span className="redTitle">GYM</span>
      </div>
      <div className="links">
        <a href="#">HOME</a>
        <a href="#service">SERVICE</a>
        <a href="#trainers">TRAINERS</a>
        <a href="#testimonials">TESTIMONIAL</a>
        <a href="#contactUs">CONTACT US</a>
      </div>
      <div className="button">
        <button>START NOW</button>
      </div>
    </div>
  );
};

export default Navbar;
