import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Service from "./sections/Service";
import Testimonial from "./sections/Testimonial";
import Work from "./sections/Work";

function App() {
  return (
    <div className="bg-white dark:bg-body h-full w-full">
      {/* Header Section */}
      <Header />
      <main className=" overflow-hidden">
        {/* Home Section */}
        <Home />
        {/* About Section */}
        <About />
        {/* Experience Section */}
        <Experience />
        {/* Service Section */}
        <Service />
        {/* Work Section  */}
        <Work />
        {/* Testimonial Section */}
        <Testimonial />
        {/* Contact Section */}
        <Contact />
      </main>
      {/* footer section */}
      <Footer />
    </div>
  );
}

export default App;
