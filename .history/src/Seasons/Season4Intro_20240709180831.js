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
      <div className='md:w-full opacity-40'>
        <img src={Background} className='md:w-full h-screen md:h-auto object-cover'></img>
      </div>
      <div className=" md:h-4/5 absolute z-30 md:ml-10 md:mt-20 top-16">
        <div className="  md:justify-between flex flex-col justify-center md:justify-normal md:items-baseline items-center  md:pl-10 pt-10  md:pl-10 ">
          <div>
            <div className="text-white text-6xl md:text-8xl font-Saira">SEASON 4</div>
            <div className="text-white text-2xl md:text-4xl font-Titillium">17 December 2023</div>
          </div>
          <div className="w-1/2 md:w-1/5 pt-7 mb-5 flex md:justify-normal justify-center"> <img src={Season4Logo} alt="season4Logo" className="w-1/2"></img></div>
          <div className="text-slate-900 bg-white w-72 md:w-96 justify-center flex items-center text-xl md:text-xl font-Titillium ">
            <div><FontAwesomeIcon icon={faLocationDot} size="2xs" /></div>
            <div className="mx-2">Rangpur Zilla School</div>
          </div>
        </div>

        <div className='flex mx-20 mt-16 justify-evenly'>
          <div className='w-1/2 flex flex-col items-center'>
            <div className='text-xl text-white'>CHAMPIONS</div>
            <div className='text-5xl text-white'>SYNDICATE</div>
            <div className='w-1/4'><img src={Syndicate}></img></div>
          </div>
          <div className='w-1/2'>
            <div className='text-xl text-white'>CHAMPIONS</div>
            <div className='text-5xl text-white'>SYNDICATE</div>
            <div className='w-1/4'><img src={Syndicate}></img></div>
          </div>
        </div>
        
      </div>

    </Fragment>
  );
}

export default Season4Intro;