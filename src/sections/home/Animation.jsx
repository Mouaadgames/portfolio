import Lottie from "lottie-react"
import { useEffect, useRef, useState } from "react";
import animationData from '../../assets/black-bg-web-dev.json'
function Animation({ IsIntersecting }) {
  const aniRef = useRef(null)
  const [playTimeout, setPlayTimeout] = useState(false)
  const timeoutRef = useRef(null)
  const setSegmentTimeoutRef = useRef(null)

  useEffect(() => {
    setPlayTimeout(false)
    if (IsIntersecting && !playTimeout) {
      setSegmentTimeoutRef.current = setTimeout(() => {
        aniRef.current.playSegments([100, 300], false)
      }, 700);
    }

    if (IsIntersecting) {
      timeoutRef.current = setTimeout(() => {
        setPlayTimeout(true)
      }, 15000)
    }


    return () => {
      clearTimeout(timeoutRef.current)
      clearTimeout(setSegmentTimeoutRef.current)
    }
  }, [IsIntersecting]);
  return (
    <div className={`relative min-w-full aspect-square grid content-center top-[-100px] ${IsIntersecting && !playTimeout && "left-10"} lg:top-0`}>
      {IsIntersecting && !playTimeout ? (< Lottie lottieRef={aniRef} animationData={animationData} />) :
        (<p className="text-center  px-4  text-lg font-semibold ">Animation is turn off to save CPU resource. scroll DOWN and again UP to reActivate the animation</p>)}
    </div>
  )
}
export default Animation