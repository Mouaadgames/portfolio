import {useRef } from "react"
import SkillImg from "../../components/SkillImg"
function Skill({ HighLight, tech, isBig }) {
  return (
    <div onClick={()=>{HighLight(1)}} className={`alert btn h-fit font-bold ${tech.isYellow ? "bg-yellow-400 text-black  hover:text-white" : "bg-slate-500 "} flex items-center justify-start flex-nowrap pl-3 gap-2`}>
      <SkillImg tech = {tech} isBig={isBig}/>
      <span className="text-2xl " >{tech.name}</span>
    </div>
  )
}
export default Skill