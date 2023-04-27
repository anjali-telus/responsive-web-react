import React from 'react';
import { NavLink } from 'react-router-dom';
import sys from '../src/images/web-design.png'
import Common from './Common';

const Home = () => {
  return (
   <>
    <Common name="The one-stop solution for your company in " 
           visit="service" 
           strongContent = "Digital Marketing"
           imgSource={sys} 
           btnSource = "Get Started"
       />

  
   </>
  );
};

export default Home;
