import { Projects as pro } from "../../context/constants"
import ProjectCard from "./ProjectCard"

function Projects() {
  return (
    <div className="grid grid-cols-3 grid-row-5">
      {
        pro.map((value) => {
          return (
            <ProjectCard
              key={value.id}
              style={value.style}
              projectName={value.name}
              projectSmallDescription={value.smallDescription}
              projectImg={value.img1}
            />)
        })
      }
    </div>
  )
}
export default Projects