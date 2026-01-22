import Navbar from "./Navigation.jsx";
import Hero from "./Hero.jsx";
import Project from "./Project.jsx";
import Testimonials from "./Testimonials.jsx";
import Footer from "./Footer.jsx";

const main = () => {
  return (
    <div className='bg-gray-800' style={{ display: 'flex', flexDirection: 'column'}}>
      <Navbar />
      <Hero />
      <Project />
      <Testimonials />
      <Footer/>
    </div>
  );
};

export default main;
