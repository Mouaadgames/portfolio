import { useState, useEffect, useRef } from "react";
import { RESUMEURL } from "../../context/constants";
import useIsInViewport from "../../hooks/useIsInViewport";
function Header({ onHomeClick, onSkillsClick, onProjectsClick, onContactClick, refHome, refSkills, refProjects, refContact }) {
  const [width, setWidth] = useState(window.innerWidth);
  const boolHome = useIsInViewport(refHome, "-20%")
  const boolSkills = useIsInViewport(refSkills, "-50%")
  const boolProjects = useIsInViewport(refProjects, "-30%")
  const boolContact = useIsInViewport(refContact, "-150px")
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth))
    };
  }, []);

  return (
    <div className="navbar bg-base-300 z-50 p-2 sticky top-0">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu flex flex-col gap-2 dropdown-content mt-3 z-50 shadow-sm shadow-gray-400 bg-base-300 rounded-md w-52">
            <li className="bg-slate-800 p-2 rounded-md underline underline-offset-2 text-lg" onClick={onHomeClick}>Home</li>
            <li className="bg-slate-800 p-2 rounded-md text-neutral-400 text-lg" onClick={onSkillsClick}>Skills</li>
            <li className="bg-slate-800 p-2 rounded-md text-neutral-400 text-lg" onClick={onProjectsClick}>My Projects</li>
            <li className="bg-slate-800 p-2 rounded-md text-neutral-400 text-lg" onClick={onContactClick}>Contact</li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className={`tab tab-xs sm:tab-md md:tab-lg tab-bordered ${boolHome && !boolSkills ? "tab-active" : ""}`} onClick={onHomeClick}>Home</li>
          <li className={`tab tab-xs sm:tab-md md:tab-lg tab-bordered ${boolSkills && !boolProjects ? "tab-active" : ""}`} onClick={onSkillsClick}>Skills</li>
          <li className={`tab tab-xs sm:tab-md md:tab-lg tab-bordered ${boolProjects && !boolContact ? "tab-active" : ""}`} onClick={onProjectsClick} >My Projects</li>
          <li className={`tab tab-xs sm:tab-md md:tab-lg tab-bordered ${boolContact ? "tab-active" : ""}`} onClick={onContactClick}  >Contact</li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost flex self-center text-[#ececec] " href={RESUMEURL} target="_blank">
          <span className="mx-2 material-symbols-outlined mr-3">description</span>{width > 500 ? "RESUME" : ""}
        </a>
      </div>
    </div>
  )
}
export default Header