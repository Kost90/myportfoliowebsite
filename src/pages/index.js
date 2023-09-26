import * as React from "react";
import { useState} from "react";
import './reset.module.css';
import Counter from "../components/counter/counter";
import WellcomeSection from "../components/wellcomsection/wellcomeSection";
import Gridlist from "../components/gridsection/Gridlist";
import Layout from "../components/layout/layout";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);
 
  return (
    <>
        {isOpen === false ? (
          <Counter setIsOpen={handleToggle}/>
        ) : (
          <>
           <WellcomeSection/>
            <Layout>
            <Gridlist/>
            </Layout>
          </>
        )}
    </>
  );
};

export default Homepage;

export const Head = () => <title>Home Page</title>;