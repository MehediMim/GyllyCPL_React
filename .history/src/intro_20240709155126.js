import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

import image1 from "./HomeImages/p1.jpg";

import Syndicatelogo from "./TeamLogo/Syndicate.png";

const Intro = () => {
    return ( 
        <Fragment>
            <img src={image1} alt="img" className=" opacity-50 h-screen object-cover md:h-auto  md:w-full z-1"></img>
                <div className="absolute w-full top-10  md:top-36  text-white flex flex-col place-items-center justify-center">
                    <div className="text-2xl md:text-4xl font-Saira"><h1 className="text-white md:text-white">CONGRATULATIONS</h1></div>
                    <div className="text-4xl md:text-8xl flex w-full justify-center backdrop-blur-xl">
                        <div><h1 className="font-body text-white mx-5">Syndicate</h1></div>
                        <div className="w-7 md:w-16 mx-5"><img src={Syndicatelogo} alt="chmp" ></img></div>
                        <div className=" bg-white flex w-40 justify-center absolute text-black top-72 text-3xl font-Saira"><Link to="/season4" className="   px-4 p-2 ">Season 4</Link></div>
                    </div>
                    <div className="text-2xl md:text-xl text-sm font-Titillium"><h1 className="text-white md:text-white">CHAMPIONS OF GULLY CRICKET PREMIER LEAGUE SEASON 4</h1></div>
                </div>
        </Fragment>
     );
}
 
export default Intro;