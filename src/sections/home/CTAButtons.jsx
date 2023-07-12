import Button from "../../components/Button"
import { RESUMEURL } from "../../context/constants"

function CTAButtons({ onContactClick, width }) {


  return (
    <div className={`flex flex-nowrap ${width < 350 ? "gap-2" : "gap-8"}`}>
      <Button
        text="Contact Me"
        textColor="text-black"
        color="btn-primary"
        onClick={onContactClick}
      />
      <Button

        text="Resume"
        textColor="text-neutral"
        color="btn-secondary"
        onClick={() => window.open(RESUMEURL, "_blank")}
      />
    </div>
  )
}
export default CTAButtons