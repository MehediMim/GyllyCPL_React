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
import TrophyCabinet from "./TrophyCabinet";
const MainHome = () => {
    return (
        <Fragment>
            <div className="relative top-16 md:top-10 z-2 bg-slate-900">

                <img src={image1} alt="img" className=" opacity-50 h-screen object-cover md:h-auto  md:w-full z-1"></img>
                <div className="absolute w-full top-10  md:top-36  text-white flex flex-col place-items-center justify-center">
                    <div className="text-2xl md:text-4xl font-Saira"><h1 className="text-white md:text-white">CONGRATULATIONS</h1></div>
                    <div className="text-4xl md:text-8xl flex w-full justify-center backdrop-blur-xl">
                        <div><h1 className="font-body text-white mx-5">Syndicate</h1></div>
                        <div className="w-7 md:w-16 mx-5"><img src={Syndicatelogo} alt="chmp" ></img></div>
                        <div className=" drop-shadow-lg shadow-black flex justify-center absolute w-full top-72 text-3xl font-body"><Link to="/season4" className="  text-white px-4 p-2 rounded-lg ring-2 ring-white">Season 4</Link></div>
                    </div>
                    <div className="text-2xl md:text-xl text-sm font-Titillium"><h1 className="bg-white md:text-white">CHAMPIONS OF GULLY CRICKET PREMIER LEAGUE SEASON 4</h1></div>
                </div>
                <News/>
                <TrophyCabinet/>
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