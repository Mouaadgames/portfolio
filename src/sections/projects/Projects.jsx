import { Projects as pro } from "../../context/constants"
import ProjectCard from "./ProjectCard"
import { forwardRef, useRef } from "react"

function Projects({ highLightBool,highLightIds ,scrollToViewBool}) {
  return (
    <div className="grid gap-4 grid-cols-3 grid-row-5 max-w-7xl m-4 xl:mx-auto">
      {
        pro.map((value) => {
          return (
            <ProjectCard
              key={value.id}
              scrollToViewBool={scrollToViewBool}
              highLightIds={highLightIds}
              highLightBool={highLightBool}
              project={value}
            />)
        })
      }
    </div>
  )
}
export default Projects