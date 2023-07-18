import { programmingTech } from "../../context/constants"
import Skill from "./skill"
import { forwardRef} from "react";

function Skills({ HighLight }, ref) {
  return (
    <section ref={ref} className=" bg-blue-950 flex justify-center">
      <div className={`max-w-7xl flex-1 select-none pt-12 p-4 flex flex-col items-center`}>
        <p className="mb-6 text-lg underline-offset-4 text-neutral-400 underline text-center ">Click to view projects that use the specified technologies</p>
        <div
          className={`w-full grid gap-2 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]`}>
          {programmingTech.map((tech) => <Skill key={tech.name} HighLight={HighLight} tech={tech} isBig={true} />)}
        </div>
      </div>
    </section>
  )
}
export default forwardRef(Skills)