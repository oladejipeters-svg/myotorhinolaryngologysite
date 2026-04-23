import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import Looker from "./components/Looker";

function App() {
  return (
    <>
      <Navbar />
      <Timer />
      <Looker />
      <Hero />
      <About />
      <Services />
      <Appointment />
      <Footer />
    </>
  );
}

export default App;
