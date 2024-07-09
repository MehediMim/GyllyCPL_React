import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import News from "./news";
import image1 from "./HomeImages/p1.jpg";

import Syndicatelogo from "./TeamLogo/Syndicate.png";
import Syndicate from "./TeamLogo/Syndicate.png"
import NM69 from "./TeamLogo/NM69.png"
import Gladiators from "./TeamLogo/Gladiators.png"
import Mavericks from "./TeamLogo/Mavericks.png"
import MachineGun from "./TeamLogo/MachineGun.png"
import ShotGun from "./TeamLogo/ShotGun.png"

import Photos from "./Photos";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import Intro from "./intro";
const MainHome = () => {
    return (
        <Fragment>
            <div className="relative top-16 md:top-10 z-2 bg-slate-900">
                <Intro/>
                <News/>
                
                <div className="min-h-96">
                    <div className="text-white font-body text-4xl w-full flex justify-center pt-20 ">PHOTOS</div>
                    <Photos />
                </div>
            <Footer/>
            </div>
        </Fragment>
    )
}
export default MainHome;