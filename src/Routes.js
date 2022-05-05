import React from "react";
import { Route,Routes,Navigate } from "react-router-dom";
import About from "./Pages/about";
import Services from "./Pages/services";
import Home from "./Pages/home";
import ContactUS from "./Pages/contact";


const Network= () => {
    return (
     
       
        <Routes>
                <Route  path="/" element={<Home/>}/>
               <Route  path="/home" element={<Home/>}/>
               <Route  path="/services" element={<Services/>}/>
               <Route  path='/about'element={<About/>}/>
               <Route  path="/contactus" element={<ContactUS/>}/>

        </Routes>
    
        
    )
 
};
export default Network;