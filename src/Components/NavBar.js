import React from 'react';
import {ReactNavbar} from 'react-responsive-animate-navbar';
import Logo from '../Static/images/Logo.svg';
// import { useNavigate } from 'react-router-dom';


function NavBar() {

    // const navigate = useNavigate();

    // const onClickHome = () => {
    //     navigate('/');
    // }

    // const onClickWinners = () => {
    //     navigate('/winners');
    // }

    // const onClickLogin = () => {
    //     navigate('/login');
    // }

    return(
        <ReactNavbar
            color="rgb(192, 76, 113)"
            logo={Logo}
            menu= {[
                    { name: "HOME", to: '/',},
                    { name: "WINNERS", to: '/winners',},
                    { name: "LOGIN", to: '/login'},
            ]}
            social={[
            {
                name: "Linkedin",
                icon: ["fab", "linkedin-in"],
                url: 'https://www.linkedin.com/in/arnab-gupta-516765221/'
            },
            {
                name: "Github",
                icon: ["fab", "github"],
                url: 'https://github.com/dev-ar7'
            },
            {
                name: "Instagram",
                icon: ["fab", "instagram"],
                url: 'https://www.instagram.com/ar7_.srt/'
            },
            {
                name: "Twitter",
                icon: ["fab", "twitter"],
                url: 'https://twitter.com/PHYM17?t=BHYzNfVA8zQj_Jqfl6b5Gg&s=03'
            },
            ]}
        />
    );
}


export default NavBar;