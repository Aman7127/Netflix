// @ts-nocheck
import "./Register.scss"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState , useRef } from "react";



const Register = () => {


    const [email ,setEmail] = useState("");
    const [password ,setPassword] = useState("");
    
    const emailRef = useRef();
    const passwordRef = useRef();


    const handleStart = () => {
        setEmail(emailRef.current.value);
    };

    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    };

    return (
        <div className="register">
            <div className="top">
                   <div className="wrapper">
                        <img
                        className="logo" 
                        alt="netflix"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"

                        />
                        <button className="loginButton">Sign In</button>
                    </div>
                </div>
            <div className="container">
                <h1>Unlimited movies, TV </h1>
                <h1>shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                 Ready to watch? Enter your email to create or restart your membership.
                </p>

                {!email ? (
                    <div className="input">
                        <input type="email" placeholder="Enter your email" ref={emailRef}/>
                        <button className="registerButton" onClick={handleStart}>Get Started
                        </button>
                     </div>
                ) : (
                     <form className="input">
                        <input type="password" placeholder="password" ref={passwordRef}/>
                        <button className="registerButton" onClick={handleFinish}>Start
                        </button>
                     </form>
                )}
                
            </div>
        </div>
    ) 
}

export default Register