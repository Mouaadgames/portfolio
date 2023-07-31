import { Projects as pro } from "../../context/constants"
import ProjectCard from "./ProjectCard"
import { forwardRef, useState, useEffect } from "react";
import Model from "../../components/model/model";

function Projects({ highLightBool, highLightIds, scrollToViewBool }, ref) {
  const [width, setWidth] = useState(window.innerWidth);
  const [modelProject, setModelProject] = useState(null)

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth))
    };
  }, []);


  return (
    <>
      <Model
        project={modelProject}
        setModelProject={setModelProject}
      />
      <div ref={ref}>

        <h2 className="text-center pb-8 pt-16 text-6xl font-extrabold text-black shadow-sm tracking-wider text-outline">PROJECTS</h2>
        <div className="h-1 max-w-xl rounded-full mx-auto bg-gray-800"></div>
        <br />
        <div className={`${width > 800 ? "grid grid-cols-3 grid-row-5" : "flex flex-col"} gap-4 max-w-7xl m-4 xl:mx-auto`}>
          {
            pro.map((value) => {
              return (
                <ProjectCard
                  key={value.id}
                  setModelProject={setModelProject}
                  scrollToViewBool={scrollToViewBool}
                  highLightIds={highLightIds}
                  highLightBool={highLightBool}
                  project={value}
                />)
            })
          }
        </div>
      </div>
    </>
  )
}
export default forwardRef(Projects)