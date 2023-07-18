import { useRef, useState } from 'react';
import Header from './sections/navBar/NavBar';
import Home from './sections/home/home';
import Skills from './sections/Skills/Skills';
import Projects from './sections/projects/Projects'
import Model from './components/model/model';
import Contact from './sections/contact/Contact';
import { Projects as ProjectsData } from './context/constants';
function App() {
  const homeSectionRef = useRef(null)
  const skillsSectionRef = useRef(null)
  const projectsSectionRef = useRef(null)
  const contactSectionRef = useRef(null)

  function onHomeClick() {
    homeSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  function onSkillsClick() {
    skillsSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  function onProjectsClick() {
    projectsSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  function onContactClick() {
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }


  const [highLightBool, setHighLightBool] = useState(false);
  const [highLightIds, setHighLightIds] = useState([]);
  const [scrollToViewBool, setScrollToViewBool] = useState(false);
  function HighLight(techName) {
    const projects = ProjectsData.filter((pro) => {
      const projectArr = pro.techUsed.filter((projectUsed) => {
        return projectUsed === techName
      })
      return !!projectArr.length
    })
    if (!projects.length) return
    projects.reverse()
    setHighLightIds(projects.map((project) => project.id))
    setScrollToViewBool(true)
    setTimeout(() => {
      setHighLightBool(true)
    }, 500);
    setTimeout(() => {
      setScrollToViewBool(false)
      setHighLightBool(false)
    }, 900);
  }

  return (
    <>
      <Header
        onContactClick={onContactClick}
        onHomeClick={onHomeClick}
        onProjectsClick={onProjectsClick}
        onSkillsClick={onSkillsClick}
      />
      <Home
        ref={homeSectionRef}
        onContactClick={onContactClick}
      />
      <Skills
        HighLight={HighLight}
        ref={skillsSectionRef}
      />
      <Projects
        ref={projectsSectionRef}
        scrollToViewBool={scrollToViewBool}
        highLightIds={highLightIds}
        highLightBool={highLightBool} />
      <Model
        project={ProjectsData[0]} />
      <Contact
        ref={contactSectionRef}
      />
    </>

  );
}
export default App;