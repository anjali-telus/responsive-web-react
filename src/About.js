import React from 'react';
import Common from './Common';
import about from "../src/images/about.jpeg"


const About = () => {
  return (
   <>
       <Common name="Let's Know " 
           visit="service" 
           strongContent = "Our Team"
           imgSource={about} 
           btnSource = "Contact Us"
       />
   </>
  );
};

export default About;
