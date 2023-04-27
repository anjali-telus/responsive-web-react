import React from 'react';
import { NavLink } from 'react-router-dom';
import sys from '../src/images/web-design.png'

const Common = (props) => {
  return (
   <>
     <section id="header" className="d-flex align-items-center">
     <div className="container-fluid">
       <div className="row">
       <div className="col-10 mx-auto my-auto">
       <div className="row">

       <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
         <h1>{props.name}<strong>{props.strongContent}</strong></h1>
         <h5>
           We are the team of technical developer making websites
         </h5>
        <div className="mt-3">
          <NavLink to={props.visit} className="btn btn-get-started">
            {props.btnSource}
          </NavLink>
        </div>
       </div>

       <div className="col-lg-6 order-1 order-lg-2 header-img">
        <img src={props.imgSource} className="img-fluid animated" alt=""/>
       </div>
       </div>

       </div>
       </div>
     </div>
     </section>
   </>
  );
};

export default  Common;
