import Button from "../../components/Button"
import { RESUMEURL } from "../../context/constants"

function CTAButtons({ onContactClick, isBig }) {


  return (
    <div className={`flex flex-nowrap`}>
      <Button
        text="Contact Me"
        textColor="text-black"
        color="btn-primary"
        onClick={onContactClick}
      />
      <span className="mx-4"></span>
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