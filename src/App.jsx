import Advantages from "./components/Advantages/Advantages";
import Download from "./components/Download/Download";
import Faq from "./components/FAQ/Faq";
import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="w-[1090px] flex justify-center flex-col  mx-auto">
      <Navbar />
      <Hero />
      <Features />
      <Advantages />
      <Testimonials />
      <Faq />
      <Download />
    </div>
  );
}

export default App;
