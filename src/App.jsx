import { useRef, useState } from 'react';
import Header from './sections/navBar/NavBar';
import Home from './sections/home/home';
import Skills from './sections/Skills/Skills';
import Projects from './sections/projects/Projects'
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
    setHighLightIds(projects.map((project) => project.id))
    setScrollToViewBool(true) // broadcast to all project card component 
    setTimeout(() => {
      setScrollToViewBool(false)
    }, 100);
  }

  return (
    <main className='bg-gray-900'>
      <Header
        onContactClick={onContactClick}
        onHomeClick={onHomeClick}
        onProjectsClick={onProjectsClick}
        onSkillsClick={onSkillsClick}
        refHome={homeSectionRef}
        refSkills={skillsSectionRef}
        refProjects={projectsSectionRef}
        refContact={contactSectionRef}
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

      <Contact
        ref={contactSectionRef}
      />
    </main>

  );
}
export default App;