import TechIcons from "./TechIcons"
import { useEffect, useState, useRef } from "react"


function ProjectCard({ project, highLightBool, highLightId }, ref) {
  const projectDivRef = useRef(null)
  const [highLight, setHighLight] = useState(false);
  useEffect(() => {
    if (highLightId === project.id) {
      projectDivRef.current?.scrollIntoView({ behavior: 'smooth' })
      setHighLight(highLightBool)
    }
  }, [highLightBool])
  return (
    <div ref={projectDivRef} className={`select-none card bg-base-100 shadow-xl w-full max-h-[60vh] image-full cardBackground ${project.style ? "col-span-2" : ""}`}>
      <figure className="boarderNone halfBlackImg" ><img className="rounded-none w-full" src={project.img1} alt="Shoes" /></figure>
      <div className={`z-10 transition-all ${highLight ? "bg-[#FFF6]" : "hover:bg-[#0007] "}`}>
        <div className="card-body transition-all p-2 hover:p-8  flex flex-col h-full justify-end">
          <TechIcons techs={project.techUsed} />
          <h2 className="card-title">{project.name}</h2>
          <span className="flex-shrink">{project.smallDescription}</span>
        </div>
      </div>

    </div>
  )
}
export default ProjectCard