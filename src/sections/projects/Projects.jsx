import { Projects as pro } from "../../context/constants"
import ProjectCard from "./ProjectCard"
import { forwardRef, useState, useEffect } from "react";

function Projects({ highLightBool, highLightIds, scrollToViewBool }, ref) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth))
    };
  }, []);
  return (
    <div ref={ref} className={`${width > 800 ? "grid gap-4 grid-cols-3 grid-row-5" : "flex flex-col gap-4"} max-w-7xl m-4 xl:mx-auto`}>
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
export default forwardRef(Projects)