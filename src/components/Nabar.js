import React from "react";
import { nav } from "../data/setting";
import { Link } from "react-scroll";

const Nabar = () => {
  return (
    <div className="bg-nav backdrop-blur-[10px] z-[1000] w-11/12 md:w-[328px] mx-auto py-4 px-9 rounded-[4rem] flex justify-between items-center fixed bottom-4 -translate-x-1/2 left-1/2">
      {nav.map((item, i) => (
        <Link
          activeClass="active"
          to={item.title}
          spy={true}
          smooth={true}
          key={i}
          className="text-2xl text-txt p-3 bg-transparent mx-1 rounded-full cursor-pointer hover:bg-slate-700"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Nabar;
