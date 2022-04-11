import React, { useContext } from "react";
import { BsMoon } from "react-icons/bs";
import { BiSun } from "react-icons/bi";
import { ThemeContext } from "../context/themeContext";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <BsMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className=" text-white text-xl cursor-pointer"
        />
      ) : (
        <BiSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
