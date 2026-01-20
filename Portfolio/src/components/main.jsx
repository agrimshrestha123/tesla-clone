import Navbar from "./Navigation.jsx";
import Hero from "./Hero.jsx";

const main = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#c7c7c7' }}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default main;
