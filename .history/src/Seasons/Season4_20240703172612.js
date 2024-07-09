import React, { Fragment } from "react";
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

const Season = () => {
  return (
    <Fragment>
      <div
        className="py-14 md:top-16 "
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100vh'
        }}
      >
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



      <div className="bg-slate-200 mt-6 pt-16 py-16">
        <div className="font-body text-black text-5xl w-full ">
          <div className="bg-slate-300 w-full flex justify-center">TEAMS</div>
          <div className="flex flex-col md:flex-row items-center md:items-stretch justify-evenly pt-10">
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
      {/* TEAM DONE */}

      <div className="bg-slate-200  pt-16 py-16">
        <div className="font-body text-black text-5xl w-full ">
          <div className="bg-slate-300 w-full flex justify-center">LEADERBOARD</div>
          <div className="flex flex-col md:flex-row items-center md:items-stretch justify-evenly pt-10">
            <div className="shadow-xl md:w-1/2 md:ml-24 md:mr-5  rounded-md flex flex-col items-center justify-start pt-5 my-5 md:my-0">
              <div className="w-full flex font-Saira text-2xl justify-center items-start bg-slate-300">
                GROUP A
              </div>
              <div className="w-full min-w-full mt-4">
                <table className="w-full">
                  <thead>
                    <tr className="font-Saira text-lg bg-red-400 w-full">
                      <th className="w-1/2 bg-slate-300"></th>
                      <th className="w-1/12 bg-slate-300">M</th>
                      <th className="w-1/12 bg-slate-300">W</th>
                      <th className="w-1/12 bg-slate-300">L</th>
                      <th className="w-1/12 bg-slate-300">P</th>
                      <th className="w-1/12 bg-slate-300">NRR</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr className="font-Saira text-lg  w-full ">
                      <th className="w-1/2 bg-teal-500">
                        <div className="flex justify-start items-center ">
                          <div className="w-1/12 mx-5"><img src={Syndicate} alt="null"></img></div>
                          <div className="px-5">SYNDICATE</div></div></th>
                      <th className="w-1/12 bg-slate-300">2</th>
                      <th className="w-1/12 bg-slate-200">1</th>
                      <th className="w-1/12 bg-slate-300">1</th>
                      <th className="w-1/12 bg-slate-200">2</th>
                      <th className="w-1/12 bg-slate-300">0.93</th>
                    </tr>
                    <tr className="font-Saira text-lg  w-full ">
                      <th className="w-1/2 bg-amber-300">
                        <div className="flex justify-start items-center ">
                          <div className="w-1/12 mx-5"><img src={Gladiators} alt="null"></img></div>
                          <div className="px-5">GLADIATORS</div></div></th>
                      <th className="w-1/12 bg-slate-300">2</th>
                      <th className="w-1/12 bg-slate-200">1</th>
                      <th className="w-1/12 bg-slate-300">1</th>
                      <th className="w-1/12 bg-slate-200">2</th>
                      <th className="w-1/12 bg-slate-300">-0.50</th>
                    </tr>
                    <tr className="font-Saira text-lg  w-full ">
                      <th className="w-1/2 bg-white">
                        <div className="flex justify-start items-center ">
                          <div className="w-1/12 mx-5 "><img src={ShotGun} className="h-8" alt="null"></img></div>
                          <div className="px-5">SHOT GUN</div></div></th>
                      <th className="w-1/12 bg-slate-300">2</th>
                      <th className="w-1/12 bg-slate-200">1</th>
                      <th className="w-1/12 bg-slate-300">1</th>
                      <th className="w-1/12 bg-slate-200">2</th>
                      <th className="w-1/12 bg-slate-300">-0.67</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="shadow-xl md:w-1/2 md:mr-24 md:ml-5 rounded-md flex flex-col items-center justify-start pt-5 my-5 md:my-0">
              <div className="w-full font-Saira text-2xl flex justify-center items-start bg-slate-300">
                GROUP B
              </div>
              <div className="w-full min-w-full mt-4">
                <table className="w-full">
                  <thead>
                    <tr className="font-Saira text-lg bg-red-400 w-full">
                      <th className="w-1/2 bg-slate-300"></th>
                      <th className="w-1/12 bg-slate-300">M</th>
                      <th className="w-1/12 bg-slate-300">W</th>
                      <th className="w-1/12 bg-slate-300">L</th>
                      <th className="w-1/12 bg-slate-300">P</th>
                      <th className="w-1/12 bg-slate-300">NRR</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr className="font-Saira text-lg  w-full ">
                      <th className="w-1/2 bg-amber-600">
                        <div className="flex justify-start items-center ">
                          <div className="w-1/12 mx-5"><img src={NM69} alt="null"></img></div>
                          <div className="px-5">NM69</div></div></th>
                      <th className="w-1/12 bg-slate-300">2</th>
                      <th className="w-1/12 bg-slate-200">2</th>
                      <th className="w-1/12 bg-slate-300">0</th>
                      <th className="w-1/12 bg-slate-200">4</th>
                      <th className="w-1/12 bg-slate-300">2.05</th>
                    </tr>
                    <tr className="font-Saira text-lg  w-full ">
                      <th className="w-1/2 bg-blue-400">
                        <div className="flex justify-start items-center ">
                          <div className="w-1/12 mx-5"><img src={MachineGun} alt="null"></img></div>
                          <div className="px-5">MACHINE GUN</div></div></th>
                      <th className="w-1/12 bg-slate-300">2</th>
                      <th className="w-1/12 bg-slate-200">1</th>
                      <th className="w-1/12 bg-slate-300">1</th>
                      <th className="w-1/12 bg-slate-200">2</th>
                      <th className="w-1/12 bg-slate-300">-0.31</th>
                    </tr>
                    <tr className="font-Saira text-lg  w-full ">
                      <th className="w-1/2 bg-white">
                        <div className="flex justify-start items-center ">
                          <div className="w-1/12 mx-5"><img src={Mavericks} alt="null"></img></div>
                          <div className="px-5">MAVERICKS</div></div></th>
                      <th className="w-1/12 bg-slate-300">2</th>
                      <th className="w-1/12 bg-slate-200">0</th>
                      <th className="w-1/12 bg-slate-300">2</th>
                      <th className="w-1/12 bg-slate-200">0</th>
                      <th className="w-1/12 bg-slate-300">-1.86</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>


          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Season;
