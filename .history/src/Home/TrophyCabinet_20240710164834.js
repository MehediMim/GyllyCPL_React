import React, { Fragment } from "react";

import Syndicate from "../TeamLogo/Syndicate.png"
import NM69 from "../TeamLogo/NM69.png"
import Gladiators from "../TeamLogo/Gladiators.png"
import Mavericks from "../TeamLogo/Mavericks.png"
import MachineGun from "../TeamLogo/MachineGun.png"
import ShotGun from "../TeamLogo/ShotGun.png"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

const trophys = [
    [Syndicate, 1, 2],
    [NM69, 3, 1],
    [Gladiators, 2, 2],
    [Mavericks, 2, 2],
    [MachineGun, 2, 2],
    [ShotGun, 2, 2]
];

const ForPush = (props) => {

    const trophycount = [];
    for (let i = 0; i < props.j; i++) {
        if (props.verdict === "c") {
            trophycount.push(
                <div className="mx-1">
                    <FontAwesomeIcon icon={faTrophy} style={{ color: "#d3ac22", }} className="drop-shadow-lg" />
                </div>
            )
        }
        else if(props.verdict === "r") {
            trophycount.push(
                <div className="mx-1">
                <FontAwesomeIcon icon={faTrophy} style={{ color: "#b0b0b0", }} className="drop-shadow-lg" />
                </div>
            )
        }
    }
    return (
        <div className="flex">{trophycount}</div>
    )
}
const TrophyCabinet = () => {
    return (<Fragment>
        <div className="bg-slate-200 pb-20">
            <div className="font-body text-black text-5xl w-full ">
            <div className='text-slate-900 font-Saira text-4xl py-20'>
                <div>TROPHY CABINET</div>
            </div>
                <div className="mx-5 flex flex-col md:flex-row items-center md:items-stretch justify-evenly pt-10">
                    {
                        trophys.map((trophy, key) => (
                            <div className="shadow-xl w-2/3 md:w-1/4  rounded-md flex flex-col items-center justify-center pt-5 my-5 md:my-0">
                                <div className="w-2/3 h-3/5  flex justify-center items-center"><img src={trophy[0]} alt="syndicate"></img></div>
                                <div className=" w-2/3 h-2/5  pt-5 font-Titillium text-3xl w-full flex-col items-center justify-center">
                                    <div className="w-full flex justify-center items-center"><ForPush j={trophy[1]} verdict={"c"} /></div>
                                    <div className="w-full flex justify-center items-center"><ForPush j={trophy[2]} verdict={"r"} /></div>
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