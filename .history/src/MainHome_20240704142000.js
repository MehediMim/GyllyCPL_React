import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
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
                    <div className="text-2xl md:text-xl text-sm font-Titillium"><h1 className="text-white md:text-white">CHAMPIONS OF GULLY CRICKET PREMIER LEAGUE SEASON 4</h1></div>
                </div>
                <div className="bg-slate-200 mt-6 pt-16 py-16">
                    <div className="font-body text-black text-5xl w-full ">
                        <div className="bg-slate-300 w-full flex justify-center">TROPHY CABINET</div>
                        <div className="mx-5 flex flex-col md:flex-row items-center md:items-stretch justify-evenly pt-10">
                            <div className="shadow-xl w-2/3 md:w-1/4  rounded-md flex flex-col items-center justify-center pt-5 my-5 md:my-0">
                                <div className="w-2/3 h-3/4  flex justify-center items-center"><img src={Syndicate} alt="syndicate"></img></div>
                                <div className="w-2/3 h-3/4  pt-5 font-Titillium text-3xl justify-evenly flex">
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#d3ac22", }} className="drop-shadow-lg" /></div>
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#d3ac22", }} className="drop-shadow-lg" /></div>
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#d3ac22", }} className="drop-shadow-lg" /></div>
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#bababa", }} className="drop-shadow-lg" /></div>
                                </div>
                            </div>
                            <div className="shadow-xl w-2/3 md:w-1/4  rounded-md flex flex-col items-center justify-center pt-5 my-5 md:my-0">
                                <div className="w-2/3 h-3/4  flex justify-center items-center"><img src={Gladiators} alt="syndicate"></img></div>
                                <div className="w-2/3 h-1/4  pt-5 font-Titillium text-3xl justify-evenly flex">
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#d3ac22", }} className="drop-shadow-lg" /></div>
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#d3ac22", }} className="drop-shadow-lg" /></div>
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#d3ac22", }} className="drop-shadow-lg" /></div>
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#bababa", }} className="drop-shadow-lg" /></div>
                                </div>
                            </div>
                            <div className="shadow-xl w-2/3 md:w-1/4  rounded-md flex flex-col items-center justify-center pt-5 my-5 md:my-0">
                                <div className="w-2/3 h-3/4  flex justify-center items-center"><img src={NM69} alt="syndicate"></img></div>
                                <div className="w-2/3 h-1/4  pt-5 font-Titillium text-3xl justify-evenly flex">
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#d3ac22", }} className="drop-shadow-lg" /></div>
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#d3ac22", }} className="drop-shadow-lg" /></div>
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#d3ac22", }} className="drop-shadow-lg" /></div>
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#bababa", }} className="drop-shadow-lg" /></div>
                                </div>
                            </div>
                            <div className="shadow-xl w-2/3 md:w-1/4  rounded-md flex flex-col items-center justify-center pt-5 my-5 md:my-0">
                                <div className="w-2/3 h-3/4  flex justify-center items-center"><img src={MachineGun} alt="syndicate"></img></div>
                                <div className="w-2/3 h-3/4  pt-5 font-Titillium text-3xl justify-evenly flex">
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#d3ac22", }} className="drop-shadow-lg" /></div>
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#d3ac22", }} className="drop-shadow-lg" /></div>
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#d3ac22", }} className="drop-shadow-lg" /></div>
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#bababa", }} className="drop-shadow-lg" /></div>
                                </div>
                            </div>
                            <div className="shadow-xl w-2/3 md:w-1/4  rounded-md flex flex-col items-center justify-center pt-5 my-5 md:my-0">
                                <div className="w-2/3 h-3/4  flex justify-center items-center"><img src={Syndicate} alt="syndicate"></img></div>
                                <div className="w-2/3 h-3/4  pt-5 font-Titillium text-3xl justify-evenly flex">
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#d3ac22", }} className="drop-shadow-lg" /></div>
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#d3ac22", }} className="drop-shadow-lg" /></div>
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#d3ac22", }} className="drop-shadow-lg" /></div>
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#bababa", }} className="drop-shadow-lg" /></div>
                                </div>
                            </div>
                            <div className="shadow-xl w-2/3 md:w-1/4  rounded-md flex flex-col items-center justify-center pt-5 my-5 md:my-0">
                                <div className="w-2/3 h-3/4  flex justify-center items-center"><img src={Syndicate} alt="syndicate"></img></div>
                                <div className="w-2/3 h-3/4  pt-5 font-Titillium text-3xl justify-evenly flex">
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#d3ac22", }} className="drop-shadow-lg" /></div>
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#d3ac22", }} className="drop-shadow-lg" /></div>
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#d3ac22", }} className="drop-shadow-lg" /></div>
                                    <div><FontAwesomeIcon icon={faTrophy} style={{ color: "#bababa", }} className="drop-shadow-lg" /></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="min-h-96">
                    <div className="text-white font-body text-4xl w-full flex justify-center pt-20 ">PHOTOS</div>
                    <Photos />
                </div>
            </div>

        </Fragment>
    )
}
export default MainHome;