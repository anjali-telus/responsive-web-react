import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import contactimg from '../src/images/img2.jpeg'
import Common from './Common';

const Contact = () => {
const [data,setData] = useState({
fullname:'',
phone:'',
email:'',
message:''
});

const InputEvent = (event)=>{
const {name, value} = event.target;

setData((preValue) =>{
  return{
    ...preValue,
    [name]:value
    
  }

})
};
  const formSubmit =(e)=>{
e.preventDefault();
alert(`My name is ${data.fullname},
My email id is ${data.email}, 
the phone number is ${data.phone} 
and the message is ${data.message}` )

  };
  return (
    <>
    <div className="my-5">
 <h1 className="text-center"> Contact Us</h1>
    </div>
 
    <div className="container contact_box mb-5">
 <div className="row">
 <div className="col-6 mx-auto">
 <div className="row gy-5">

 <form onSubmit={formSubmit}>
 <div className="row mb-3">
    <label  className="form-label px-0 font-weight-bold">Full Name</label>
      <input type="text" className="form-control"
       name="fullname" 
       value={data.fullname}
       onChange={InputEvent} 
       placeholder="Enter Your Name" />
  </div>

  <div className="row mb-3">
    <label className="form-label px-0 font-weight-bold">Email Address</label>
      <input type="email" className="form-control" 
       name="email" 
       value={data.email}
       onChange={InputEvent} 
       placeholder="Enter Your Email"/>
    </div>

  <div className="row mb-3">
  <label className="form-label px-0 font-weight-bold">Phone</label>
  <input type="phone" className="form-control"
   name="phone" 
   value={data.phone}
   onChange={InputEvent} 
   placeholder="Enter Your Phone" />
  </div>

  <div className="row mb-3">
  <label className="form-label px-0 font-weight-bold">Message</label>
  <textarea className="form-control"
  name="message" 
  value={data.message}
  onChange={InputEvent} 
  placeholder="Enter Your Message" rows="3"></textarea>
</div>

<div className="row mb-3">
<div className="col-3 px-0">
  <button type="submit" className="btn btn-outline-primary">Submit</button>
</div>
</div>

</form>

     </div>
     </div>
     </div>
 </div>
 
 
   
    </>
  );
};

export default Contact;
