import TechIcons from "../../sections/projects/TechIcons";
import PreviewImg from "./PreviewImg";
import youtube from "../../assets/youtube.png"
import Lottie from "lottie-react"
import { useRef, useEffect } from "react";
import about from "../../assets/animation_lk5ptfo6.json"
function Model({ project, setModelProject }) {
  useEffect(() => {
    window.modal1.addEventListener("close", () => {
      setModelProject(null)
    })
    return () => {
      window.modal1.removeEventListener("close", () => {
        setModelProject(null)
      })

    };
  }, []);

  return (
    <>
      <dialog id="modal1" className="modal bg-[#012A] ">
        {project == null ? null : (<>
          <form method="dialog" className=" modal-box max-w-6xl">
            <div>
              <button className=" btn default float-right btn-circle">✖</button>
            </div>
            <h3 className="font-bold  text-gray-200 titleFont text-4xl text-center">{project.name}</h3>
            <br />
            <div className="flex flex-col-reverse gap-4 lg:flex-row max-w-[100%] ">
              <div className="flex flex-col basis-full justify-between  max-h-[60vh] ">
                <div className="overflow-y-auto over min-h-[40vh]">
                  <div>
                    <Lottie className="invert" animationData={about} />
                  </div>
                  <ul className="text-xl list-disc">{project.bigDescription.map((elem, i) => { return (<li key={i} className="my-4 mr-3">✅ {elem}</li>) })}</ul>
                </div>
                <div className="flex justify-start mt-4 flex-wrap">
                  <a href={project.demoLink} className="btn w-32 mr-4 bg-orange-400">👁Live Demo</a>
                  <a href={project.openSource.link} className={`btn w-32 ${project.openSource.isOpen ? "" : "btn-disabled "}`}>{project.openSource.isOpen ? "⌨" : "🔒"}View Code</a>
                </div>
                <div className="flex flex-col gap-1 mt-3">
                  <span>Technologies used : </span>
                  <TechIcons techs={project.techUsed} />
                </div>
              </div>
              <div className="flex flex-col basis-full gap-3">
                <div className="carousel w-full aspect-video">
                  <div id="item1" className="carousel-item  w-full bg-black">
                    <iframe className="h-full w-full" src={"https://www.youtube.com/embed/" + project.videoLink} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>                </div>
                  <div id="item2" className="carousel-item  w-full bg-black">
                    <img src={project.img1} className="w-full object-scale-down" />
                  </div>
                  <div id="item3" className="carousel-item  w-full bg-black">
                    <img src={project.img2} className="w-full object-scale-down" />
                  </div>
                </div>
                <PreviewImg
                  images={[youtube, project.img1, project.img2]}
                />
              </div>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button className="cursor-default">close</button>
          </form>
        </>
        )}
      </dialog>
    </>
  )
}
export default Model