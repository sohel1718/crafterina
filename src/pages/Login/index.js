import React, { useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/src/core/styles.scss';
import MoonCard from '../../components/MoonCard';
import { animateBg } from '../../utils';
import facebook from '../../assets/images/facebook.png';
import instagram from '../../assets/images/instagram.png';
import google from '../../assets/images/google.png';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fall-animation/fall-animation.scss';
import { auth, provider } from '../../firebase';

const Login = ({ history }) => {

    useEffect(() => {
        animateBg();
    }, [])

    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

    return (
        <div className="login-container">
            <canvas id="c" />
            <div className="login-container_bg-wrapper">
                <div className="login-container_bg-wrapper_logo">
                    <span>Crafterina</span>
                    <img onClick={() => history.push('/')} src="/images/close.png" alt="" />
                </div>
                <div className="login-container_bg-wrapper_slider">
                    <AwesomeSlider animation="fallAnimation" cssModule={AwesomeSliderStyles} buttons={false}>
                        <div>
                            <MoonCard bgColor="#1a2238" text="Money can’t buy happiness but it can buy craft supplies and that’s pretty close" />
                        </div>
                        <div>
                            <MoonCard bgColor="#89bce9" text="Crafting makes everything better even Mondays" />
                        </div>
                         <div>
                            <MoonCard bgColor="#963438" text="All i need is a little caffeine and a lot of crafting" />
                        </div>
                    </AwesomeSlider>
                </div>
                <div className="login-container_bg-wrapper_signin">
                    <span>Let's Sign In with</span>
                    <div className="login-container_bg-wrapper_signin_socials">
                        <div onClick={() => signIn()} className="login-container_bg-wrapper_signin_socials_box">
                            <img src={google} alt="" />
                            <span>Continue with google</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login