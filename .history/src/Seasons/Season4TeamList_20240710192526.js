import React, { Fragment } from 'react';
import Syndicate from "../TeamLogo/Syndicate.png"
import NM69 from "../TeamLogo/NM69.png"
import Gladiators from "../TeamLogo/Gladiators.png"
import Mavericks from "../TeamLogo/Mavericks.png"
import MachineGun from "../TeamLogo/MachineGun.png"
import ShotGun from "../TeamLogo/ShotGun.png"
const Season4TeamList = () => {
    return ( <Fragment>
        <div className="bg-slate-200 mt-6 pt-16 py-16">
        <div className="font-body text-black text-5xl w-full ">
        <div className='text-white font-Saira px-6 md:px-0 text-4xl py-20'>
                <div>SEASON 4 IN A NUTSHELL</div>
            </div><div className="flex flex-col md:flex-row items-center md:items-stretch justify-evenly pt-10">
            <div className="shadow-xl w-2/3 md:w-1/4  rounded-md flex flex-col items-center justify-center pt-5 my-5 md:my-0">
              <div className="w-2/3 h-3/4  flex justify-center items-center"><img src={Syndicate} alt="syndicate"></img></div>
              <div className="w-2/3 h-1/4  pt-5 font-Titillium text-3xl justify-center flex">SYNDICATE</div>
            </div>
            <div className="shadow-xl w-2/3 md:w-1/4  rounded-md flex flex-col items-center justify-center pt-5 my-5 md:my-0">
              <div className="w-2/3 h-3/4  flex justify-center items-center"><img src={NM69} alt="syndicate"></img></div>
              <div className="w-2/3 h-1/4  pt-5 font-Titillium text-3xl justify-center flex">NM 69</div>
            </div>
            <div className="shadow-xl w-2/3 md:w-1/4  rounded-md flex flex-col items-center justify-center pt-5 my-5 md:my-0">
              <div className="w-2/3 h-3/4  flex justify-center items-center"><img src={Gladiators} alt="syndicate"></img></div>
              <div className="w-2/3 h-1/4  pt-5 font-Titillium text-3xl justify-center flex">GLADIATORS</div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-stretch justify-evenly pt-10">
            <div className="shadow-xl w-2/3 md:w-1/4  rounded-md flex flex-col items-center justify-center pt-5 my-5 md:my-0">
              <div className="w-2/3 h-3/4  flex justify-center items-center"><img src={MachineGun} alt="syndicate"></img></div>
              <div className="w-2/3 h-1/4  pt-5 font-Titillium text-3xl justify-center flex">MACHINE GUN</div>
            </div>
            <div className="shadow-xl w-2/3 md:w-1/4  rounded-md flex flex-col items-center justify-center pt-5 my-5 md:my-0">
              <div className="w-2/3 h-3/4  flex justify-center items-center"><img src={ShotGun} alt="syndicate"></img></div>
              <div className="w-2/3 h-1/4  pt-5 font-Titillium text-3xl justify-center flex">SHOT GUN</div>
            </div>
            <div className="shadow-xl w-2/3 md:w-1/4  rounded-md flex flex-col items-center justify-center pt-5 my-5 md:my-0">
              <div className="w-2/3 h-3/4  flex justify-center items-center"><img src={Mavericks} alt="syndicate"></img></div>
              <div className="w-2/3 h-1/4  pt-5 font-Titillium text-3xl justify-center flex">MAVERICKS</div>
            </div>
          </div>
        </div>
      </div>
      
    </Fragment> );
}
 
export default Season4TeamList;