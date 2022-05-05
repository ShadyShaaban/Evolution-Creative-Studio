import useInput from "./Use-Input";
import classes from "./contactform.module.css"
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Draft = () => {
  const form = useRef();
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: FirstNameInputHasError,
    valueChangeHandler: FirstNameChangedHandler,
    inputBlurHandler: FirstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: LastNameInputHasError,
    valueChangeHandler: LastNameChangeHandler,
    inputBlurHandler:LastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) =>value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  const {
    value: enteredGPA,
    isValid: enteredGPAIsValid,
    hasError: GPAInputHasError,
    valueChangeHandler: GPAChangeHandler,
    inputBlurHandler: GPABlurHandler,
    reset: resetGPAInput,
  } = useInput((value) => value.match( /^[0-9\b]+$/));

  const {
    value: enteredExperience,
    isValid: enteredExperienceIsValid,
    hasError: ExperienceInputHasError,
    valueChangeHandler: ExperienceChangeHandler,
    inputBlurHandler:ExperienceBlurHandler,
    reset: resetExperienceInput,
  } = useInput((value) => value.match( /^[0-9\b]+$/));

  let formIsValid = false;

  if (enteredFirstNameIsValid && enteredLastNameIsValid  && enteredEmailIsValid && enteredGPAIsValid && enteredExperienceIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    
    event.preventDefault();
    emailjs.sendForm('service_d35xuge', 'template_1ln15lo', form.current, '7iaoJpZORD17snrJk')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    if (!formIsValid) {
      return;
    }


    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetGPAInput();
    resetExperienceInput();



  };

  const firstnameInputClasses =  ` ${classes.formcontrol} ${FirstNameInputHasError
    ?classes.invalid 
    :  classes.formcontrol}`;

  const lastnameInputClasses =` ${classes.formcontrol}  ${LastNameInputHasError
    ?classes.invalid 
    :  classes.formcontrol}`;

    const emailInputClasses = ` ${classes.formcontrol}  ${emailInputHasError
      ?classes.invalid 
      :  classes.formcontrol}`;

    const GPAInputClasses = ` ${classes.formcontrol}  ${GPAInputHasError
      ?classes.invalid 
      :  classes.formcontrol}`;

    const ExperieceInputClasses =  ` ${classes.formcontrol}  ${ExperienceInputHasError
      ?classes.invalid 
      :  classes.formcontrol}`;

  return (
    <form ref={form}  onSubmit={formSubmissionHandler}>
      <div className={firstnameInputClasses}>
        <label htmlFor='name'>First Name</label>
        <input
          type='text'
          id='fname'
          onChange={FirstNameChangedHandler}
          onBlur={FirstNameBlurHandler}
          value={enteredFirstName}
        />
        {FirstNameInputHasError && (
          <p className={classes.errortext}>Name must not be empty.</p>
        )}
      </div>

      <div className={lastnameInputClasses}>
        <label htmlFor='name'>Last Name</label>
        <input
          type='text'
          id='lname'
          onChange={LastNameChangeHandler}
          onBlur={LastNameBlurHandler}
          value={enteredLastName}
        />
        {LastNameInputHasError && (
          <p className={classes.errortext}>Name must not be empty.</p>
        )}
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className={classes.errortext}>Please enter a valid email.</p>
        )}
      </div>

    

      <div className={classes.bt}>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default Draft;