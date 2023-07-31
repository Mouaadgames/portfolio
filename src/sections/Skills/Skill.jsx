import { useRef, useEffect, useState } from "react"
import SkillImg from "../../components/SkillImg"
import useIsInViewport from "../../hooks/useIsInViewport"

function Skill({ HighLight, tech, isBig }) {
  const divRef = useRef(null)
  const [isFinished, setIsFinished] = useState(false)
  const timeoutRef = useRef(null)
  const isVisible = useIsInViewport(divRef, "30px")

  useEffect(() => {
    if (isVisible) {
      timeoutRef.current = setTimeout(() => {
        console.log("set to true");
        setIsFinished(true)
      }, 1100);
    }
    if (!isVisible) {
      console.log("dqsd");
      setIsFinished(false)
    }

    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [isVisible]);
  return (
    <div ref={divRef} onClick={() => { HighLight(tech.name) }} className={`default-hidden ${isVisible && (isFinished ? "visibleSkill" : "show")}  alert btn h-fit font-bold ${tech.isYellow ? "bg-yellow-400 text-black hover:text-white" : "bg-slate-500 "} flex items-center justify-start flex-nowrap pl-3 gap-2  `}>
      <SkillImg tech={tech} isBig={isBig} />
      <span className="text-2xl " >{tech.name}</span>
    </div>
  )
}
export default Skill