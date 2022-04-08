import React from "react";
import Toggle from "../components/ThemeToggle";
import Navbar from "./Nabar";

const Header = () => {
  return (
    <header className="fixed w-full z-40 bg-white dark:bg-body">
      <div className="max-w-5xl mx-auto px-4 lg:px-0 flex justify-between items-center h-16">
        {/* brand section */}
        <a
          href="/"
          rel="noreferer"
          className="text-primary hover:secondary text-xl font-medium"
        >
          Stewart
        </a>
        {/* floating navigation section */}
        <Navbar />
        {/* dark mode toggle section */}
        <Toggle />
      </div>
    </header>
  );
};

export default Header;
