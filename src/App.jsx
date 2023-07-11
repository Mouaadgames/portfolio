import { useForm, ValidationError } from '@formspree/react';
import { useRef } from 'react';
import Header from './sections/Header/Header';
import Home from './sections/home/home';
import Skills from './sections/Skills/Skills';

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
        onContactClick = {onContactClick}
      />
      <Skills
      ref={skillsSectionRef}
      />
      
    </>
  );
}
export default App;