import { useForm, ValidationError } from '@formspree/react';
import { useRef, useState } from 'react';
import Header from './sections/navBar/NavBar';
import Home from './sections/home/home';
import Skills from './sections/Skills/Skills';
import Projects from './sections/projects/Projects'

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
  const [highLightId, setHighLightId] = useState(0);
  function HighLight(id) {
    const project = ProjectsData.filter((pro) => pro.id === id)
    if (!project) throw Error("no Project Found with the ID :" + id)
    setHighLightBool(true)
    setHighLightId(id)

    setTimeout(() => {
      setHighLightBool(false)
    }, 500);
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
        highLightId={highLightId}
        highLightBool={highLightBool} />
    </>
  );
}
export default App;