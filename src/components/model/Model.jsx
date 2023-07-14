import { Projects, programmingTech } from "../../context/constants"
import TechIcons from "../../sections/projects/TechIcons";
import PreviewImg from "./PreviewImg";
function Model({ project }) {
  return (
    <>
      <dialog id="my_modal_1" className="modal bg-[#012A]">
        <form method="dialog" className="modal-box max-w-6xl ">
          <h3 className="font-bold  text-2xl text-center">{project.name}</h3>
          <br />
          <div className="flex max-w-[100%] ">
            <div className="flex flex-col basis-full justify-between  max-h-[60vh] ">
              <div className="overflow-y-auto over min-h-[40vh]">
                <h4>About This Project</h4>
                <p>Lorem ipsum dolor.</p>
              </div>
              <div className="flex gap-6 justify-start mt-4">
                <a className="btn w-32">hello</a>
                <a className="btn w-32">hello</a>
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <span className="">Technologies used</span>
                <TechIcons techs={Projects[0].techUsed} />
              </div>
            </div>
            <div className="flex flex-col basis-full gap-3">
              <div className="carousel w-full aspect-video">
                <div id="item1" className="carousel-item  w-full bg-black">
                  <img src={project.img1} className="w-full object-scale-down" />
                </div>
                <div id="item2" className="carousel-item  w-full bg-black">
                  <img src={project.img2} className="w-full object-scale-down" />
                </div>
                <div id="item3" className="carousel-item  w-full bg-black">
                  <img src={project.img1} className="w-full object-scale-down" />
                </div>
              </div>
              <PreviewImg
                images={[Projects[1].img1, Projects[0].img1, Projects[0].img2]}
              />
            </div>
          </div>

        </form>
      </dialog>
    </>
  )
}
export default Model