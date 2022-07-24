import React, {useEffect} from "react";
import MultiStep from 'react-multistep';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";
import '../Static/Css/SignUp.css';


const steps = [
    { component: <StepOne /> },
    { component: <StepTwo /> },
    { component: <StepThree /> },
    { component: <StepFour /> }
]
  
  // custom styles
const prevStyle = { background: '#883772' }
const nextStyle = { background: '#883772' }


function SignUp() {
    return(
        <>
            <NavBar/>
            <div className="form-container">
                <h1>Sign Up</h1>
                <MultiStep activeStep={0} steps={steps} prevStyle={prevStyle} nextStyle={nextStyle} />
                <div className='app-footer'>
                    <h6>Press 'Enter' or click on progress bar for next step.</h6>
                </div>
            </div>
            <Footer/>
        </>
        
    );
}


export default SignUp;