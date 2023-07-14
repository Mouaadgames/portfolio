import Lottie from "lottie-react"
import { useRef, useEffect } from "react"

function Animation({ animationData }) {

  const animationRef = useRef(null)
  useEffect(() => {
    animationRef.current.playSegments([100, 300])
  }, []);
  

  return (
    <div className="relative min-w-[300px] top-[-100px] left-10 lg:top-0">
      <Lottie lottieRef={animationRef} animationData={animationData} />
    </div>
  )
}
export default Animation