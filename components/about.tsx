"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";

export default function About() {

  const {ref, inView} = useInView(
    {
      threshold: 0.75,
    }
  );
  const {setActiveSection} = useActiveSectionContext();
  
  useEffect(() => {
    if (inView) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection]);
 
  return (
    <motion.section 
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{delay:0.175}}
    id="about">
    
        <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      i still need to tell you about me...the introduction above should do for now. <p>Also, I REALLY like maths.</p> 
        </p>
        
      
    </motion.section>
  );
}