import Header from "../src/components/Header"
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return <div className="App text-2xl" > 
   <Header/>
   <Hero/>
   <Feature/>
   <Testimonials/>
   <CTA/>
   <Footer/>
  </div>;
}

export default App;
