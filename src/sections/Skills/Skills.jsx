import { programmingTech } from "../../context/constants"
import Skill from "./skill"
import { forwardRef } from "react";

function Skills({ HighLight }, ref) {
  return (
    <section ref={ref} className=" bg-slate-950 flex justify-center">
      <div className={`max-w-7xl flex-1 select-none pt-12 p-4 flex flex-col items-center`}>
        <h2 className="text-6xl font-extrabold text-black shadow-sm tracking-wider text-outline">SKILLS</h2> <br />
        <div className="h-1 max-w-xl w-full rounded-full mx-auto bg-gray-800"></div>
        <br />
        <p className="mb-6 text-lg underline-offset-4 text-neutral-400 underline text-center ">Click to view projects that use the specified technologies</p>
        <div >
          <div className="inline-block mr-2 w-3 h-3 rounded-full bg-yellow-300"></div><span className="mr-4">Core technologies that I use</span>
          <br className="sm:hidden" />
          <div className="inline-block mr-2 w-3 h-3 rounded-full bg-gray-500"></div><span>other technologies I've worked with</span>
        </div> <br />
        <div
          className={`w-full grid gap-2 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]`}>
          {programmingTech.map((tech) => <Skill key={tech.name} HighLight={HighLight} tech={tech} isBig={true} />)}
        </div>
      </div>
    </section>
  )
}
export default forwardRef(Skills)