import BigTitle from "./BigTitle"
import { forwardRef, useImperativeHandle, useRef } from "react"
import animationData from "../../assets/black-bg-web-dev.json"
import Animation from "./Animation"
import Description from "./Description"
import CTAButtons from "./CTAButtons"
function Home({ onContactClick }, ref) {
  // const homeRef = useRef(null)
  // useImperativeHandle(
  //   ref,
  //   () => {
  //     return {
  //       scrollToHome() {
  //         homeRef.current?.scrollIntoView()
  //       }
  //     }
  //   }, []
  // )
  return (
    <main ref={ref} className="bg-black grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      <div className="relative z-10 ml-10">
        <BigTitle
          name="Mouaad ELBARRIK" />
        <div className="bg-gradient-to-b  from-black to-[rgb(0 0 0 / 0)] p-10 ">
          <Description text="A FullStack web developer" />
          <CTAButtons
            onContactClick={onContactClick}
            />
        </div>
      </div>

      <Animation
        animationData={animationData}
      />
    </main>
  )
}
export default forwardRef(Home)