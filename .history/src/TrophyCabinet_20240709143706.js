import React, { Fragment } from "react";

import Syndicate from "./TeamLogo/Syndicate.png"
import NM69 from "./TeamLogo/NM69.png"
import Gladiators from "./TeamLogo/Gladiators.png"
import Mavericks from "./TeamLogo/Mavericks.png"
import MachineGun from "./TeamLogo/MachineGun.png"
import ShotGun from "./TeamLogo/ShotGun.png"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

const trophys=[
    [Syndicate,"2","2"],
    [NM69,"2","2"],
    [Gladiators,"2","2"],
    [Mavericks,"2","2"],
    [MachineGun,"2","2"],
    [ShotGun,"2","2"]
];

const TrophyCabinet = () => {
    return ( <Fragment>
        <div className="bg-slate-200 pb-20">
                    <div className="font-body text-black text-5xl w-full ">
                        <div className="bg-slate-300 text-4xl w-full flex justify-center">TROPHY CABINET</div>
                        <div className="mx-5 flex flex-col md:flex-row items-center md:items-stretch justify-evenly pt-10">
                            {
                                trophys.map((trophy,key)=>(
                                    
                                ))
                            }

                        </div>
                    </div>
                </div>
    </Fragment> );
}
 
export default TrophyCabinet;