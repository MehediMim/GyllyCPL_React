import React, { Fragment } from 'react';
import Background from "../HomeImages/p2.jpg";
import Season4Logo from "../HomeImages/Season4Logo.png"

import Syndicate from "../TeamLogo/Syndicate.png"
import NM69 from "../TeamLogo/NM69.png"
import Gladiators from "../TeamLogo/Gladiators.png"
import Mavericks from "../TeamLogo/Mavericks.png"
import MachineGun from "../TeamLogo/MachineGun.png"
import ShotGun from "../TeamLogo/ShotGun.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Season4Intro = () => {
    return (
        <Fragment>
            
        <div className="bg-gradient-to-r from-black h-72 md:h-4/5 ">
          <div className="  md:justify-between  pl-10 pt-10  md:pl-10 ">
            <div>
              <div className="text-white text-6xl md:text-8xl font-Saira">SEASON 4</div>
              <div className="text-white text-2xl md:text-4xl font-Titillium">17 December 2023</div>
            </div>
            <div className="w-1/2 md:w-1/5 pt-7"> <img src={Season4Logo} alt="season4Logo" className="w-1/2"></img></div>
            <div className="text-white flex items-center text-xl md:text-xl font-Titillium pt-5">
              <div><FontAwesomeIcon icon={faLocationDot} size="2xs" /></div>
              <div className="mx-2">Rangpur Zilla School</div>
            </div>
          </div>

          <div className="w-full mt-10 md:mt-0 relative md:-top-48 flex md:justify-center">
            <div className="md:w-1/4 w-full flex md:justify-end flex-col items-center md:items-end">
              <div className="text-2xl text-white font-Titillium">CHAMPION</div>
              <div className="flex flex-col  items-center md:items-end">
                <div className="font-Saira text-white text-5xl">SYNDICATE</div>
                <div className=" w-1/4 md:w-1/2"><img src={Syndicate} alt="null"></img></div>
              </div>
            </div>
          </div>
          <div className="mt-5 w-full relative  md:-top-96 flex justify-center">
            <div className="w-full md:w-1/4 flex justify-start flex-col items-center md:items-start">
              <div className="text-xl text-white font-Titillium">RUNNERS UP</div>
              <div className="flex flex-col items-center md:items-start">
                <div className="font-Saira text-white text-3xl">SHOT GUN</div>
                <div className="w-1/5 md:w-1/3"><img src={ShotGun} alt="null"></img></div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </Fragment>
      );
}
 
export default Season4Intro;