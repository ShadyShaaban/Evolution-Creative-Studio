import NavBar from "../Components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./home.module.css"
import Footer from "../Components/footer"
import Scards from "../Components/Scards"
import { useNavigate } from "react-router-dom";



const Home =()=>{
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `../about`; 

    navigate(path);
    window.scrollTo(0, 0);
  }
return(
    <div className={classes.pagebody}>
    <NavBar/>
<div>
    <div className={classes.section1}>
        <h5>WELCOME TO THE NEW AGE</h5>
     <h2>EVOLUTION CREATIVE<br></br>STUDIOAGENCY </h2>
    <h4>where creativity connects people</h4>
 <p>Evolution creative studio agency focuses on bringing together the world class expertise in each project they handle.</p>
 <div className={classes.halfchimp}></div> 
</div>
<div  className={classes.section2}>
    <div className={classes.section2img}></div>
    <div className={classes.section2txt}>
<h3>A Little To Know About Us!</h3>

<p>Our company was established in 2021 by a team of incredible people on board.
    Ms. Sherine Rashed CEO,  Mr.Ahmed Mourad Chairman,  Mr. Ahmed Abo Zahra Managing Director 
    and Mr. Karim Adam Creative Art Director. Evolution creative studio agency focuses on bringing 
    together the world class expertise in each project they handle. Client satisfaction being their priority,
    evolution creative studio works with the most proficient and skilled people in the business ensuring 100% accomplishment in each project. 
    We reach places with our innovative ideas and creativity! </p>

    <button onClick={routeChange}> LEARN MORE</button>
       </div>
    
       </div>
     
    


     <div className={classes.gradient}></div> 

    <div className={classes.cardcont}>
    <div className={classes.servtext}>
    <h2> OUR SERVICES </h2> 
    <p>Services tailored for creators, making their lives easier and their creations wider!</p>
    </div>
    <Scards/>
    </div>


    <div  className={classes.section2}>
    <div className={classes.section2img}></div>
    <div className={classes.section2txt}>
<h3>Our Uniqueness! </h3>

<p>We are one of a kind and join us to get the most out of your money! We don’t break your pockets, but we break all the stereotypes. Ramp up to your ultimate one stop hub for all your creative needs. We are experts in concepting your TV shows,  talk shows and movies. We provide concepting for business strategies and commercial campaigns. We serve the best value to all our clients. With us you get the top-rated services with a cutting edge in each project. 
We understand what’s trending and we could make your business trending all over! If not us who else could be so creative in delivering the best for you? </p>

       </div>
     
       </div>
    </div>
<Footer/>
   

    </div>
    
)

}

export default Home;