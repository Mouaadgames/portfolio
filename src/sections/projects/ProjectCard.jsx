import useIsInViewport from "../../hooks/useIsInViewport";
import TechIcons from "./TechIcons"
import { useEffect, useState, useRef } from "react"


function ProjectCard({ project, highLightBool, highLightIds, scrollToViewBool, setModelProject }) {
  const projectDivRef = useRef(null)
  const needToBeHighlight = useRef(false)
  const [highLight, setHighLight] = useState(false);
  const [returnToNormal, setReturnToNormal] = useState(true);
  const isShown = useIsInViewport(projectDivRef, "-100px")
  useEffect(() => {
    function main() {
      if (!scrollToViewBool) return

      if (highLightIds[0] === project.id) {
        projectDivRef.current?.scrollIntoView({ behavior: 'smooth' })
      }

      //define the project that need to be highlighted
      for (let i = 0; i < highLightIds.length; i++) {
        const highLightId = highLightIds[i];
        console.log(highLightIds);
        if (highLightId !== project.id) continue
        needToBeHighlight.current = true
        break
      }
    }

    main()


  }, [scrollToViewBool])

  useEffect(() => {
    if (isShown) { // animation of the scroll
      projectDivRef.current.classList.add("show")

      if (needToBeHighlight.current) {
        // here the high lite timing will go 
        const delay = 400
        const pulls = 200
        setReturnToNormal(false)
        setTimeout(() => { // delay before highligh
          setHighLight(true)
        }, delay);

        setTimeout(() => { // highligh pulls duration
          setHighLight(false)
        }, delay + pulls);

        setTimeout(() => { // highligh pulls duration 2
          setHighLight(true)
        }, delay + pulls * 2);

        setTimeout(() => { // highligh pulls duration 3
          setHighLight(false)
        }, delay + pulls * 3);

        setTimeout(() => { // return to normal using pulls duration 4
          setReturnToNormal(true)
        }, delay + pulls * 4);

        needToBeHighlight.current = false
      }
    }

  }, [isShown, needToBeHighlight.current]);

  return (
    <div ref={projectDivRef} onClick={() => { setModelProject(project); window.modal1.showModal() }} className={` default-hidden select-none card bg-base-100 shadow-xl w-full max-h-[60vh] image-full cardBackground ${project.style}  `}>

      <figure className="boarderNone halfBlackImg" >
        <img className="rounded-none w-full" src={project.img1} alt="Shoes" />
      </figure>
      <div className={`z-10 transition-all ${highLight ? "bg-[#0007]" : (returnToNormal ? "hover:bg-[#0007] " : "")}`}>
        <div className={`card-body transition-all p-2 hover:p-8 cursor-pointer flex flex-col h-full justify-end`}>
          <TechIcons techs={project.techUsed} />
          <h2 className="card-title">{project.name}</h2>
          <span className="flex-shrink">{project.smallDescription}</span>
        </div>
      </div>

    </div>
  )
}
export default ProjectCard