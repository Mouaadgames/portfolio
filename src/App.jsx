import { useForm, ValidationError } from '@formspree/react';
import { useRef } from 'react';
import Header from './sections/Header/Header';
import Home from './sections/home/home';

function App() {
  const homeSectionRef = useRef(null)
  const skillsSectionRef = useRef(null)
  const projectsSectionRef = useRef(null)
  const contactSectionRef = useRef(null)



  function onHomeClick() { }
  function onSkillsClick() { }
  function onProjectsClick() { }
  function onContactClick() { }
  return (
    <>
      <Header
        onContactClick={onContactClick}
        onHomeClick={onHomeClick}
        onProjectsClick={onProjectsClick}
        onSkillsClick={onSkillsClick}
        ResumeUrl='/resume' // ?
      />

    </>
  );
}
export default App;