import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { scroller } from "react-scroll";

const Footer = () => {
  const scrollTo = (item) => {
    scroller.scrollTo(item, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <footer className="bg-primary">
      {/* footer container */}
      <div className="max-w-5xl mx-auto pt-8 px-4 md:px-0 pb-32">
        {/* footer title */}
        <h1 className="text-body text-center mb-4 text-lg md:text-xl">
          Shrestha Pradhuman
        </h1>
        {/* footer list */}
        <ul className="flex justify-center gap-x-4 mb-4 text-base md:text-xl">
          <li className="cursor-pointer">
            <a
              onClick={() => {
                scrollTo("about");
              }}
              rel="noreferer"
              className="text-body"
            >
              About
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              onClick={() => {
                scrollTo("work");
              }}
              rel="noreferer"
              className="text-body"
            >
              Project
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              onClick={() => {
                scrollTo("testimonial");
              }}
              rel="noreferer"
              className="text-body"
            >
              Testimonial
            </a>
          </li>
        </ul>
        {/* social links */}
        <ul className="flex justify-center gap-x-4 ">
          <a
            href="/"
            rel="noreferer"
            className="bg-body text-primary p-1 rounded text-base inline-flex"
          >
            <FaFacebook />
          </a>
          <a
            href="/"
            rel="noreferer"
            className="bg-body text-primary p-1 rounded text-base inline-flex"
          >
            <FaInstagram />
          </a>
          <a
            href="/"
            rel="noreferer"
            className="bg-body text-primary p-1 rounded text-base inline-flex"
          >
            <FaGithub />
          </a>
          <a
            href="/"
            rel="noreferer"
            className="bg-body text-primary p-1 rounded text-base inline-flex"
          >
            <FaYoutube />
          </a>
        </ul>
        <span className="block mt-8 text-center text-sm text-container">
          &#169; Shrestha. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
