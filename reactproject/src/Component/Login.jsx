import { Carousel, Flex, Button} from "antd";
import React, { useState } from "react";
import SignIn from "./login/SignIn";
import SignUp from "./login/SignUp";

const contentStyle = {
    height: '450px', // Adjust the height as needed
    width: '100%',   // Make sure the width is set to 100%
    objectFit: 'cover', // Ensure the image covers the entire container
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:'1rem',
    
   
  };
  const globalContainerStylesignin = {
    margin: '8rem 0 0 0',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
    // Adjust the margin as needed
  };
  const globalContainerStylesignup = {
    margin: '4rem 0 0 0',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
    // Adjust the margin as needed
  };


function Login() {
    const url=process.env.PUBLIC_URL;
   const [signin,setsignin]=useState(false);
   const [signup,setsignup]=useState(false);
    const handlesign=()=>{
      console.log("hello from signin")
      setsignin(true);
      setsignup(false);
    }
    const handlesignup=()=>{
      console.log("hello from signup")
      setsignup(true);
      setsignin(false);
    }
    return ( <>
    <div >
   {signin?(<div style={globalContainerStylesignin}><SignIn></SignIn></div>):
   signup ?(<div style={globalContainerStylesignup}><SignUp></SignUp></div>):
   (
   <div >
   <Carousel autoplay autoplaySpeed={3000} pauseOnFocus={false}>
     
     <div >
     <img src={url+'/luke-moore-nbjhUb754DE-unsplash.jpg'} style={{...contentStyle,background: '#364d79'}}alt=""></img>
       
     </div>
     <div>
     <img src={url+'/neom-n7SdozgzvyA-unsplash.jpg'} style={{...contentStyle,background: '#364d79'}}alt=""></img>
     </div>
     <div>
     <img src={url+'/tarun-savvy-vIKKQcizSzw-unsplash.jpg'} style={{...contentStyle,background: '#364d79'}}alt=""></img>
     </div>
     <div>
     <img src={url+'/kal-visuals-IG1m3RomhPI-unsplash.jpg'} style={{...contentStyle,background: '#364d79'}}alt=""></img>
     </div>
     </Carousel>
</div>)}
<div style={{display:"flex",justifyContent:'center',alignItems:'center',padding:'10px 20px 30px'}}>
<Flex gap="small" wrap="wrap">
    <Button type="primary" onClick={handlesign} style={{display:signin || signup?'none':'inline-block'}}>SignIn</Button>
    <Button type="primary" onClick={handlesignup} style={{display:signin || signup?'none':'inline-block'}}>SignUp</Button>
    </Flex>
</div></div>
    </> );
}

export default Login;