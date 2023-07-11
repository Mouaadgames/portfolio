import {useRef } from "react"
function Skill({ tech, isBig }) {

  // const helpIsShown = useRef(false)
  // const timeout = useRef(null)

  // function showHelp() {
  //   helpIsShown.current = true
  //   console.log("help : " + tech.name);
  // }
  // function hideHelp() {
  //   if (helpIsShown.current) {
  //     console.log("help is hided : " + tech.name);
  //     helpIsShown.current = false
  //   }
  // }

  // function onEnter() {
  //   timeout.current = setTimeout(showHelp, 1000)

  // }

  // function onLeave() {
  //   clearTimeout(timeout.current)
  //   hideHelp()
  // }

  return (
    <div className="flex items-center gap-4">

      <div className={`${tech.isYellow ? "bg-yellow-400" : "bg-slate-500"} grid content-center btn btn-circle  ${isBig ? "h-24 w-24" : "h-12 w-12"} p-3`}>
        <img className={`w-full h-full`} src={tech.img} alt={tech.name} />
      </div>
      <span className="text-2xl font-semibold " >{tech.name}</span>
    </div>
  )
}
export default Skill