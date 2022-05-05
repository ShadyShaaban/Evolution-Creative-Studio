import Footer from "../Components/footer";
import NavBar from "../Components/Navbar"
import classes from "./services.module.css"
import ConceptCard from "../Components/conceptcard";
import BrandingCard from "../Components/brandingcard";


const Services =()=>{

    return (
<div className={classes.pagebody} >
        <NavBar/>
        <div className={classes.headerbox}>
        <h1>SERVICES</h1>
        <div className={classes.gradient}></div> 
        <div className={classes.chimp}></div> 
        
    </div>

<div className={classes.serv_container}>
    <div className={classes.serv_image}>
    </div>
    <div id="Concept" className={classes.serv_Ccard}>
    <h3> Concept & Strategy</h3>
    <p> We work on ideas that could catch a hold of a majority of public eyes and pitching it right to have highly rated TV shows or talk shows or movies. Our concepting technique is unique and we can get one’s hands on any versatile projects including concepting for business strategies and commercial campaigns. We create the pitch ,  We aspect the logline and ultimately, we launch it. </p>
    <li>Concepting for TV shows, talk shows and movies</li>
    <li>Concepting for business strategy</li>
    <li>Concepting for commercial campaigns</li>
        </div>
</div>

<div className={classes.serv_Bcontainer}>
    <div className={classes.serv_Bimage}>
         
       
    </div>
    <div id="Branding" className={classes.serv_Bcard}>
           <h3>  Branding</h3>
<p>Creative evolution studio believes in being focused,  consistent and enthused all the time to each client. Because we understand branding is just not a word,  its big-league!  With us you receive what’s unprecedented and we make it impressive every time.  </p>
<li>	Branding identity</li>
<li>	Logo design</li>
<li>	Emblem design</li>
<li>	Brand graphic elements</li>
<li>	Stationery</li>
<li>	Social media templates</li>
<li>	Instagram product photography</li>
        </div>
</div>

<div className={classes.serv_container}>
    <div className={classes.serv_image}>
         
       
    </div>
    <div className={classes.serv_Ccard}>
    <h3>Movie, TV series, show - branding and packaging</h3>
    <li>	Title treatment</li>
<li>	Main posters</li>
<li>	Single posters</li>
<li>	Teaser posters</li>
<li>	Social media campaign</li>
<li>	Opening titles (3D, Montage)</li>
<li>	End credits</li>
<li>	Animated posters</li>
<li>	promo</li>
        </div>
</div>

<div className={classes.serv_Bcontainer}>
    <div className={classes.serv_Bimage}>
         
       
    </div>
    <div className={classes.serv_Bcard}>
    <h3>Event Branding</h3>
    <li>	Logo design</li>
<li>	Poster’s design</li>
<li>	Brand graphic elements</li>
<li>	Stationery</li>
<li>	Social media templates</li>
        </div>
</div>
<div className={classes.serv_container}>
    <div className={classes.serv_image}>
         
       
    </div>
    <div className={classes.serv_Ccard}>
    <h3>Sound Design, Music & Voiceover Direction</h3>

        </div>
</div>

<div className={classes.serv_Bcontainer}>
    <div className={classes.serv_Bimage}>
         
       
    </div>
    <div className={classes.serv_Bcard}>
    <h3>Storyboarding and Director's Treatments</h3>

        </div>
</div>
<div className={classes.serv_container}>
    <div className={classes.serv_image}>
         
       
    </div>
    <div className={classes.serv_Ccard}>
    <h3>Copywriting and Scripting</h3>

        </div>
</div>
<div className={classes.serv_Bcontainer}>
    <div className={classes.serv_Bimage}>
         
       
    </div>
    <div className={classes.serv_Bcard}>
    <h3>Pitching Treatments to Media Platforms</h3>
    <li>	Films</li>
<li>	TV Shows</li>
<li>	Talk Shows</li>
        </div>
</div>
<div className={classes.serv_container}>
    <div className={classes.serv_image}>
         
       
    </div>
    <div className={classes.serv_Ccard}>
    <h3>Infographics 2D videos</h3>
    <li>	Illustration</li>
<li>	Animation</li>
<li>	Sound effects</li>
<li>	Music compositing</li>

        </div>
</div>

<Footer/>
</div>
    )
 }

 export default Services;