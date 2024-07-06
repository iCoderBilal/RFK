import React, {useRef} from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Socials from './components/Socials'
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {



const locomotiveScroll = new LocomotiveScroll();

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const handleScrollToSection1 = () => {
    if (section1Ref.current) {
      section1Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection2 = () => {
    if (section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection3 = () => {
    if (section3Ref.current) {
      section3Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div>
      <Header link1={handleScrollToSection1} link2={handleScrollToSection2} link3={handleScrollToSection3} />
      <Hero/>
      <Marquee/>
      <About mainLink = {section1Ref} />
      <Features mainLink = {section2Ref} />
      <Socials  mainLink={section3Ref}/>
      <Footer/>
    </div>
  )
}

export default App
