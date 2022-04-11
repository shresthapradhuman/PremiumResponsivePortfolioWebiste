import React, { useEffect } from "react";
import Profile from "../images/perfil.png";
import CV from "../pdf/Ansel-Cv.pdf";
import { Link, scroller } from "react-scroll";
import { socials } from "../data/setting";
import { BiMouse } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  const scrollTo = (item) => {
    scroller.scrollTo(item, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <section className="pt-32" name="home">
      <div className="max-w-5xl mx-auto px-4 lg:px-0 text-center relative">
        {/* personel details section */}
        <span
          className="block font-medium text-lg dark:text-white mb-2"
          data-aos="fade-down"
        >
          Hello I'm
        </span>
        <h2
          className="text-2xl font-medium dark:text-white lg:text-4xl mb-2"
          data-aos="fade-down"
        >
          Stewart Kristen
        </h2>
        <h3
          className="text-lg font-medium dark:text-white"
          data-aos="fade-down"
        >
          Full Stack Developer
        </h3>
        {/* call to action button section */}
        <div className="space-x-4 mt-6 mb-14" data-aos="fade-down">
          <a
            href={CV}
            rel="noreferer"
            download
            className="w-max px-2 py-3 border-2 border-primary rounded-xl text-primary font-medium hover:bg-primary hover:text-inherit"
          >
            Download CV
          </a>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="w-max px-2 py-3 border-2 border-primary rounded-xl font-medium bg-primary cursor-pointer"
          >
            About Me
          </Link>
        </div>
        {/* profile image section */}
        <div
          className="w-[200px] h-[300px] overflow-hidden mx-auto flex justify-center items-end rounded-t-full rounded-b-[50rem] profilebg md:w-[290px] md:h-[400px]"
          data-aos="fade-down"
        >
          <img
            src={Profile}
            alt="profileImage"
            className="w-[160px] md:w-[220px] h-full object-contain pt-5"
          />
        </div>
        {/* social link section */}
        <div
          className="flex flex-col space-y-2 absolute bottom-16 left-2 after:w-8 after:h-[2px] after:absolute after:bg-primary after:-bottom-7 after:-left-1 after:rotate-90"
          data-aos="fade-up"
        >
          {socials.map((item, k) => (
            <a
              href={item.url}
              key={k}
              aria-label={item.title}
              rel="noreferrer"
              className="h-6 w-6 flex justify-center items-center dark:bg-body hover:bg-primary dark:hover:bg-primary rounded text-primary hover:text-white"
              target="_blank"
            >
              {item.icon}
            </a>
          ))}
        </div>
        {/* scroll down section */}
        <span
          className="absolute bottom-16 right-0 md:-right-4 grid gap-y-9 justify-items-center cursor-pointer text-primary hover:text-black dark:hover:text-white"
          onClick={() => {
            scrollTo("about");
          }}
          data-aos="fade-up"
        >
          <BiMouse className="text-xl mb-2" />
          <span className="rotate-90">Scroll Down</span>
        </span>
      </div>
    </section>
  );
};

export default Home;
