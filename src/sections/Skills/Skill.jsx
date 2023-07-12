import {useRef } from "react"
function Skill({ tech, isBig }) {
  return (
    <div className={`alert btn h-fit ${tech.isYellow ? "bg-yellow-400" : "bg-slate-500"} flex items-center justify-start flex-nowrap pl-3 gap-2`}>
      <div className={`${tech.isYellow ? "bg-yellow-400" : "bg-slate-500"} grid content-center border rounded-full border-black aspect-square  ${isBig ? "h-24 w-24" : "h-12 w-12"} p-3`}>
        <img className={`w-full h-full`} src={tech.img} alt={tech.name} />
      </div>
      <span className="text-2xl " >{tech.name}</span>
    </div>
  )
}
export default Skill