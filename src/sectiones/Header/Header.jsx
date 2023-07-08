import { useState, useEffect } from "react";

function Header({ onHomeClick, onSkillsClick, onProjectsClick, onContactClick, ResumeUrl = "#" }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth))
    };
  }, []);
  return (
    <header className="header-bg p-2 sticky">
      <div className="flex justify-between mx-auto max-w-[1000px] ">
        <div className="tabs flex justify-evenly flex-nowrap flex-1 max-w-[600px]">
          <button className="tab tab-xs sm:tab-md md:tab-lg tab-bordered  tab-active" onClick={onHomeClick}>Home</button>
          <button className="tab tab-xs sm:tab-md md:tab-lg tab-bordered " onClick={onSkillsClick}>Skills</button>
          <button className="tab tab-xs sm:tab-md md:tab-lg tab-bordered " onClick={onProjectsClick}>My Projects</button>
          <button className="tab tab-xs sm:tab-md md:tab-lg tab-bordered " onClick={onContactClick}>Contact Me</button>
        </div>
        <a className=" flex self-center text-[#ececec] cursor-pointer" href={ResumeUrl} target="_blank">
          <span class="mx-2 material-symbols-outlined">description</span>{width > 500 ? "RESUME" : ""}
        </a>
      </div>
    </header>
  )
}
export default Header