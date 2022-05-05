import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './navbar.module.css';
import burger from "../Resources/burger.svg";
function NavBar() {
    

    return(
        <Fragment>
        <div className={classes.nav}>
            <div className={classes.logo}></div>
          <div className={classes.bar}>
            <div className={classes.item}>
               
                    <NavLink className={classes.navlink} activeClassName={classes.active} to='/home'>Home</NavLink>
                
            </div>

            <div className={classes.item}>
               
                    <NavLink className={classes.navlink} activeClassName={classes.active} to='/services'>Services</NavLink>
                
            </div>
            <div className={classes.item}>
               
                    <NavLink className={classes.navlink} activeClassName={classes.active} to='/about'>About</NavLink>
                
            </div>
            <div className={classes.item}>
               
                    <NavLink className={classes.navlink} activeClassName={classes.active} to='/contactus'>Contact Us</NavLink>
                
            </div>

            
           
            

            </div>
            </div>
            {/****************************************************************************************/}
            
                <div className={classes.mobilenav}>
                <div className={classes.mobilelogo}></div> 
                <div className={classes.mobileburger} >    
                <div className={classes.mobilebar}>
                    <div className={classes.mobileitem}>
               
                    <NavLink className={classes.mobilenavlink} activeClassName={classes.active} to='/home'>Home</NavLink>
                
                    </div>

                    <div className={classes.mobileitem}>
               
               <NavLink className={classes.mobilenavlink} activeClassName={classes.active} to='/services'>Services</NavLink>
           
               </div>

               <div className={classes.mobileitem}>
               
               <NavLink className={classes.mobilenavlink} activeClassName={classes.active} to='/about'>About</NavLink>
           
               </div>


               <div className={classes.mobileitem}>
               
               <NavLink className={classes.mobilenavlink} activeClassName={classes.active} to='/contactus'>Contact Us</NavLink>
           
               </div>
          
            </div>
         </div>
            </div>
            </Fragment>
        
        
    );
};
export default NavBar;