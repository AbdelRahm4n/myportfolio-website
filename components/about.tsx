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
      I’m a 20 year old Egyptian currently immersed in the fascinating worlds of {" "}
        <span className="font-medium">mathematics and computer science</span> at Université de Montréal{" "}
        <span className="font-medium">since January 2023</span>.{" "}
        </p>

        <p>

        <span className="italic">In the realm of mathematics,</span> Real Analysis is my niche. I love digging into the details—figuring out how sequences and series come together, playing with limits, and diving into mathematical proofs. It's a journey where things get both simple and complex, and there's something uniquely satisfying and elegant about solving these problems.{" "}

        </p>

        <p>

        Simultaneously, my passion extends into the dynamic universe of <span className="italic">computer science</span>, with a keen focus on <span className="font-medium">Machine Learning</span>. From peeling back the layers of algorithms to crafting intelligent systems that adapt and learn, I am very interested in the transformative power of machine intelligence. My proficiency includes working with powerful frameworks and tools, such as <span className="font-medium">TensorFlow and PyTorch</span>, allowing me to implement and experiment with various machine learning models.{" "}
{" "}

        </p>
         


        <p>
        I am also familiar with other languages such as Java, TypeScript and R. I am always looking to
        learn new technologies. I am currently looking for an{" "}
        <span className="font-medium">internship</span> as a software developer.
        </p>
        
      
    </motion.section>
  );
}