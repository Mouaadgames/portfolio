import TechIcons from "./TechIcons"
import { useEffect, useState, useRef } from "react"


function ProjectCard({ project, highLightBool, highLightIds, scrollToViewBool }, ref) {
  const projectDivRef = useRef(null)
  const allReadyScrolled = useRef(false)
  const [highLight, setHighLight] = useState(false);
  useEffect(() => {
    for (let i = 0; i < highLightIds.length; i++) {
      const highLightId = highLightIds[i];
      if (highLightId === project.id) {
        if (scrollToViewBool && !allReadyScrolled.current) {
          if (i === 0) {
            console.log(i)
            projectDivRef.current?.scrollIntoView({ behavior: 'smooth' })
          }
          allReadyScrolled.current = true
        }
        allReadyScrolled.current = !scrollToViewBool ? false : allReadyScrolled.current
        setHighLight(highLightBool)
        break
      }
    }
  }, [highLightBool, scrollToViewBool])
  return (
    <div ref={projectDivRef} onClick={() => window.my_modal_1.showModal()} className={`select-none card bg-base-100 shadow-xl w-full max-h-[60vh] image-full cardBackground ${project.style ? "col-span-2" : ""}`}>

      <figure className="boarderNone halfBlackImg" ><img className="rounded-none w-full" src={project.img1} alt="Shoes" /></figure>
      <div className={`z-10 transition-all ${highLight ? "bg-[#FFF6]" : "hover:bg-[#0007] "}`}>
        <div className={`card-body transition-all p-2 ${highLight ? "" : "hover:p-8 cursor-pointer"}   flex flex-col h-full justify-end`}>
          <TechIcons techs={project.techUsed} />
          <h2 className="card-title">{project.name}</h2>
          <span className="flex-shrink">{project.smallDescription}</span>
        </div>
      </div>

    </div>
  )
}
export default ProjectCard