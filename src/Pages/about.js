import NavBar from "../Components/Navbar"
import classes from "./about.module.css"
import Footer from "../Components/footer"
import Aos from "aos"
import "aos/dist/aos.css"
import TeamCard from "../Components/teamcard"
import logo from "../Resources/ON RED OR WHITE.png"
import vision from "../Resources/vision.png"
import mission from "../Resources/mission.png"
import { HashLink as Link } from 'react-router-hash-link';

const About=()=>{


    return(
        <div   className={classes.pagebody}>
            <NavBar/>
    <div className={classes.headerbox}>
        <h1>ABOUT</h1>
        <div className={classes.gradient}></div> 
        <div className={classes.chimp}></div> 
    </div>
    <h2 className={classes.header2}>Our Core</h2>
<div className={classes.gridboxcontainer}>

<div   className={classes.box1}>
    <div className={classes.coreheader}>
        <h3>Our Vision </h3>
        <img  src={vision} ></img>
    </div>
    <div className={classes.coretext}>
         To make a difference in the field of creative agency. To become versatile in whatever we do now and to establish ourselves as the unbeatable market giants in the future. 
     </div>
</div>

<div   className={classes.box1}>
    <div className={classes.coreheader}>
     <h3>Our Mission</h3>
     <img  src={mission} ></img>
    </div>
    
    <div className={classes.coretext}>
        To deliver measurable and result oriented projects to each client. To become the one step creative hub for all creative needs in the business. 
     </div>
</div>


<div   className={classes.box2}>

    <div className={classes.coreheader}>
        <h3>Our Perspective on Business!</h3>
    </div>

<div className={classes.coretext}>
    With dreams flying high ,  with passion thriving hard ,  We created a place where creativity connects people. Evolution creative studio is where you could inspire and get inspired with the brightest minds of the field. 
    
    </div>
   
    <details>
        <summary data-open="Collapse" data-close="Read More"> </summary>
            <div className={classes.description}>
                Turning the tables around with our curiosity and inspiring with imagination. Our idea of connecting the creative community together under one hub will let you enjoy a hassle-free experience that your business deserves. Crafting the most artistic form of creatives with the ultimate modern technology in hand. 
           </div>
    </details>
    
</div>

<div   className={classes.box3}>
    <div className={classes.coreheader}>
        <h3>Our Culture</h3>
        </div>
        <div className={classes.coretext}>
We are welcoming to those aspiring people who wants to be a part of the creative studio. We work and manifest multicultural level where we prioritize skilled,  creative and innovative people to be onboard with us.
    </div> 
</div>


<div  className={classes.box4}>
    <div className={classes.coreheader}>
     <h3>Our Uniqueness!</h3> </div>
     <div className={classes.coretext}> We are one of a kind and join us to get the most out of your money! We don’t break your pockets, but we break all the stereotypes. Ramp up to your ultimate one stop hub for all your creative needs. 
   
    </div>
    <details>
        <summary data-open="Collapse" data-close="Read More"> </summary>
        <div className={classes.description}>We are experts in concepting your TV shows,  talk shows and movies. We provide concepting for business strategies and commercial campaigns. We serve the best value to all our clients. With us you get the top-rated services with a cutting edge in each project. 
    We understand what’s trending and we could make your business trending all over! If not us who else could be so creative in delivering the best for you? 
        </div>
    </details>
  
</div>

<div className={classes.box5}>
    <div className={classes.coreheader}>
        <h3>Our Expertise</h3> </div>
        <div className={classes.coretext}>
    Our way of working is unique. “We don’t understand why people are frightened of new ideas .we are frightened of the old ones”. 
    Evolution creative studios assists the creative minds in securing their intellectual copyrights.
    </div>

    <details>
        <summary data-open="Collapse" data-close="Read More"> </summary>
        <div className={classes.description}>From the initial process of online documentation to registration and accreditation,  evolution creative studios have their hands on in assisting the creators. We help your ideas reach the creative platforms and we are pro in pitching. 
            Our expertise includes crafting engaging business creatives through  graphic design,  motion graphic design,3D graphic design , event branding services etc… We are not just a creative agency or a branding agency or an advertising agency. We are all of it under one roof. With us you can harness the power of creativity,  innovation and determination. Bringing the best to the best of you with our expert team.
        </div>
    </details>
  
    
  </div>

</div>


<h2 className={classes.header3}>Our Team</h2>
<div data-aos="fade" className={classes.team}>
  
    <div className={classes.team1}><TeamCard  /></div>
    <div className={classes.team1}><TeamCard  /></div>
    <div className={classes.team2}><TeamCard  /></div>
    <div className={classes.team2}><TeamCard  /></div>
    <div className={classes.team3}><TeamCard  /></div>
    <div className={classes.team3}><TeamCard  /></div>
    <div className={classes.team4}><TeamCard  /></div>
    <div className={classes.team4}><TeamCard  /></div>
    <div className={classes.team5}><TeamCard  /></div>
 
  
</div>
<Footer/>
        </div>
    )
}


export default About;