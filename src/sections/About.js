import React from "react";
import about from "../images/about.jpg";
import { about_items } from "../data/setting";
import { scroller } from "react-scroll";

const About = () => {
  const scrollTo = () => {
    scroller.scrollTo("contact", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <section className="pt-20 px-4 lg:px-0" name="about">
      <h2 className="text-center text-3xl text-primary ">About Me</h2>
      <div className="grid gap-y-8 pt-20 max-w-5xl mx-auto text-center md:grid-cols-2 md:gap-12">
        <img
          src={about}
          alt={about}
          className=" w-80 justify-self-center rounded-3xl"
        />
        <div className="text-center md:text-left">
          <div className="grid grid-cols-3 gap-2">
            {about_items.map((item, i) => (
              <div
                key={i}
                className="bg-container rounded-xl py-3 px-2 text-txt text-center"
              >
                <span className="flex justify-center items-center text-primary mb-3">
                  {item.icon}
                </span>
                <h3 className="text-sm md:text-lg">{item.title}</h3>
                <span className="text-xs md:text-base">{item.details}</span>
              </div>
            ))}
          </div>
          <p className="dark:text-white my-4 md:mt-6 md:mb-6">
            Frontend developer, I create web pages with UI / UX user interface,
            I have years of experience and many clients are happy with the
            projects carried out.
          </p>
          <div className="flex justify-center md:justify-start items-center mb-4">
            <a
              rel="noreferer"
              className="border-2 border-primary bg-primary text-body py-3 px-4 rounded-lg font-medium transition cursor-pointer hover:bg-secondary"
              onClick={scrollTo}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
