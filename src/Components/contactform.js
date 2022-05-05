import React, { Fragment, useRef } from 'react';
import emailjs from 'emailjs-com';
import classes from "./contactform.module.css"
import contact from "../Resources/home1.png"


 const ContactForm = () => {
  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d35xuge', 'template_1ln15lo', form.current, '7iaoJpZORD17snrJk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      document.getElementById("myForm").reset();
      alert("Thank You For Contacting Us")
    };

  return (
  <Fragment>
    <div className={classes.contactcontainer}>
      <img  className={classes.contactimg} src={contact}></img>
    <form id="myForm" ref={form} onSubmit={sendEmail} className={classes.form}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <input type="text" name="message" />
      <input className={classes.send} type="submit" value="SUBMIT" />
    </form>
    </div>
    <div className={classes.infocontainer}>
    <div className={classes.info}>E: info@info.com<br></br>
    P: +20 12 3456 7890<br></br>
    P: 601 Sherwood Ave. San Bernandino</div>
<iframe className={classes.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27641.275900717734!2d31.40876660700625!3d30.003576556225973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583cc75436d909%3A0x7f921d4528ec3e03!2sThe%205th%20Settlement%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1651249218519!5m2!1sen!2seg" style={{width:"100%", height:"70vh", style:"border:0;" ,allowfullscreen:"" ,loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
  </div>
  </Fragment>
  );
};

export default ContactForm;