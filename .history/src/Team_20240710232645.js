import React, {Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Syndicate from "./TeamLogo/Syndicate.png"
import NM69 from "./TeamLogo/NM69.png"
import Gladiators from "./TeamLogo/Gladiators.png"
import Mavericks from "./TeamLogo/Mavericks.png"
import MachineGun from "./TeamLogo/MachineGun.png"
import ShotGun from "./TeamLogo/ShotGun.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons'


const divs=[
    ["NAKIB ARMAN","NM69",NM69,"#C97925"],
    ["SHAHRIAR KABIR","Gladiators",Gladiators,"#3C3C3B"],
    ["ZUBAER JAHIN","ShotGun",ShotGun,"#EFBF46"],
    ["FAHIM SIAM","MachineGun",MachineGun,"#5687A8"],
    ["MARUF ALLAM","MAVERICKS",Mavericks,"#6A0000"],
    ["ABDULLAH MOURSHED","SYNDICATE",Syndicate,"#266B63"],
];

const ParticularTeam=(props)=>{
    const [variable, setvariable] = useState(false);
    const funct = () => {
        setvariable(!variable);
    }
    return(
        <div className='' style={{backgrounColor:props.team[3]}}>
            
            <div className='text-white justify-between flex items-center font-Saira px-6 md:px-20 text-4xl py-20'>
                <div>{props.team[1]}</div>
                <div>
                    {!variable &&
                        <button onClick={funct}>
                            <FontAwesomeIcon icon={faAnglesDown} size="xl" style={{ color: "#ffffff", }} />
                        </button>
                    }
                    {variable &&
                        <button onClick={funct}>
                            <FontAwesomeIcon icon={faAnglesUp} size="xl" style={{ color: "#ffffff", }} />
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

const Team=()=>{
    return (
        <Fragment>
            <div>
                {
                    divs.map((team,key)=>(
                        <div>
                            <ParticularTeam team={team}/>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}
export default Team;