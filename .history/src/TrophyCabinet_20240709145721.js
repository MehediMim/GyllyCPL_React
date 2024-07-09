import React, { Fragment } from "react";

import Syndicate from "./TeamLogo/Syndicate.png"
import NM69 from "./TeamLogo/NM69.png"
import Gladiators from "./TeamLogo/Gladiators.png"
import Mavericks from "./TeamLogo/Mavericks.png"
import MachineGun from "./TeamLogo/MachineGun.png"
import ShotGun from "./TeamLogo/ShotGun.png"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

const trophys = [
    [Syndicate, 2, 2],
    [NM69, 2, 2],
    [Gladiators, 2, 2],
    [Mavericks, 2, 2],
    [MachineGun, 2, 2],
    [ShotGun, 2, 2]
];

const forPush = (j) => {
    
    const trophycount = [];
    for (let i = 0; i < j; i++) {
        trophycount.push(
            <FontAwesomeIcon icon={faTrophy} style={{ color: "#d3ac22", }} className="drop-shadow-lg" />
        )
    }
    return (
        <div>{trophycount}</div>
    )
}
const TrophyCabinet = () => {
    return (<Fragment>
        <div className="bg-slate-200 pb-20">
            <div className="font-body text-black text-5xl w-full ">
                <div className="bg-slate-300 text-4xl w-full flex justify-center">TROPHY CABINET</div>
                <div className="mx-5 flex flex-col md:flex-row items-center md:items-stretch justify-evenly pt-10">
                    {
                        trophys.map((trophy, key) => (
                            <div className="shadow-xl w-2/3 md:w-1/4  rounded-md flex flex-col items-center justify-center pt-5 my-5 md:my-0">
                                <div className="w-2/3 h-3/4  flex justify-center items-center"><img src={trophy[0]} alt="syndicate"></img></div>
                                <div className=" bg-slate-400 w-2/3 h-1/4  pt-5 font-Titillium text-3xl justify-evenly flex">
                                    <forPush j={trophy[1]} />
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    </Fragment>);
}

export default TrophyCabinet;