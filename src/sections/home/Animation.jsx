import Lottie from "lottie-react"
import { useEffect, useRef } from "react";
import animationData from '../../assets/black-bg-web-dev.json'
import useIsInViewport from "../../hooks/useIsInViewport"
function Animation() {
  const aniRef = useRef(null)
  const divRef = useRef(null)
  const IsIntersecting = useIsInViewport(divRef)
  useEffect(() => {
    if (IsIntersecting)
      aniRef.current.playSegments([100, 300], false)
  }, [IsIntersecting]);
  return (
    <div ref={divRef} className="relative min-w-full aspect-square  top-[-100px] left-10 lg:top-0">
      {IsIntersecting ? (< Lottie lottieRef={aniRef} animationData={animationData} />) : null}
    </div>
  )
}
export default Animation