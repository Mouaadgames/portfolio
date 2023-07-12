import { programmingTech } from "../../context/constants"
import SkillImg from "../../components/SkillImg"
function TechIcons({ techs = [] }) {
  return (
    <div className="flex flex-1 gap-2">{
      techs.map((tech) => {
        const techUsedObjArr = programmingTech.filter((value) => value.name == tech)
        return techUsedObjArr.map((techUsedObj) => <SkillImg key = {tech.name+" small"}tech={techUsedObj} isBig={false} />)
      })

    }</div>
  )
}
export default TechIcons