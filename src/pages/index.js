import * as React from "react";
import { useState, useRef} from "react";
import './reset.module.css';
import Counter from "../components/counter/counter";
import WellcomeSection from "../components/wellcomsection/wellcomeSection";
import Gridlist from '../components/gridsection/Gridlist'
import Layout from "../components/layout/layout";
import SkillsSection from "../components/skillssection/SkillsSection";
import Contact from "../components/contact/Contact";

const Homepage = () => {
  const refProjects = useRef(null)
  const refContact = useRef(null)

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  const handelClickContact = () => {
    refContact.current?.scrollIntoView({behavior: 'smooth'})
  }

  const handelClickProjects = () => {
    refProjects.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <>
        {isOpen === false ? (
          <Counter setIsOpen={handleToggle}/>
        ) : (
          <>
            <Layout>
            <WellcomeSection onClickContact={handelClickContact} onClickProjects={handelClickProjects}/>
            <SkillsSection/>
            <Gridlist ref={refProjects}/>
            <Contact ref={refContact}/>
            </Layout>
          </>
        )}
    </>
  );
};

export default Homepage;

export const Head = () => <title>Home Page</title>;
