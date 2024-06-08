import Advantages from "./components/Advantages/Advantages";
import Download from "./components/Download/Download";
import Faq from "./components/FAQ/Faq";
import Features from "./components/Features/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className=" bg-slate-50 w-full">
      <div className="w-[1090px] flex justify-center flex-col  mx-auto bg-slate-50">
        <Navbar />
        <Hero />
        <Features />
        <Advantages />
        <Testimonials />
        <Faq />
        <Download />
        <Footer />
      </div>
    </div>
  );
}

export default App;
