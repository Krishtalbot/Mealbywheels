import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Info from "../components/Info/info";
import Menu from "../components/Menu/Menu";
import Faq from "../components/Faq/Faq";
import Review from "../components/Review/Review";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Info />
      <Menu />
      <Faq />
      <Review />
      <Contact />
    </div>
  );
};

export default Home;
