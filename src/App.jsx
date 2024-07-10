import "./app.scss";
import About from "./components/about/About";
import CTA from "./components/cta/CTA";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Testimonials from "./components/testimonials/Testimonials";
import Trainers from "./components/trainers/Trainers";
import WhyChooseUs from "./components/whyChooseUs/WhyChooseUs";

function App() {
  return (
    <>
      <div className="main">
        <img src="/Image.png" alt="" />
        <Navbar />
        <Hero />
      </div>
      <WhyChooseUs />
      <About />
      <Trainers />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
