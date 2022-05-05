import ContactForm from "../Components/contactform";
import NavBar from "../Components/Navbar";
import Footer from "../Components/footer"
import classes from "./contact.module.css"
import Draft from "../Components/draft"

const ContactUS=()=>{

    return(
        
            <div className={classes.pagebody} >
        <NavBar/>
        <div className={classes.headerbox}>
        <h1>CONTACT</h1>
        <div className={classes.gradient}></div> 
        <div className={classes.chimp}></div> 
    </div>
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default ContactUS;