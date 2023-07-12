import BigTitle from "./BigTitle"
import { forwardRef, useState, useEffect } from "react"
import animationData from "../../assets/black-bg-web-dev.json"
import Animation from "./Animation"
import Description from "./Description"
import CTAButtons from "./CTAButtons"
function Home({ onContactClick }, ref) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth))
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth))
    };
  }, []);
  return (
    <main ref={ref} className={`bg-black flex justify-center `}>
      <div className={`grid grid-cols-1 lg:grid-cols-2 overflow-hidden ${width > 650 ? "pl-10" : "px-auto"} max-w-7xl`}>
 
        <div className="relative pb-16 z-10">
          <BigTitle
            name="Mouaad ELBARRIK" />
          <div className=" bg-gradient-to-b from-black to-[rgb(0 0 0 / 0)] ">
            <Description text="A FullStack web developer" />
            <div className={width > 320 ? "pl-10" : "flex justify-center"}>
              <CTAButtons
                onContactClick={onContactClick}
                width={width}

              />
            </div>
          </div>
        </div>

        <Animation
          animationData={animationData}
        />

      </div>
    </main>
  )
}
export default forwardRef(Home)