import React, { Fragment } from 'react';

import Syndicate from "../TeamLogo/Syndicate.png"
import NM69 from "../TeamLogo/NM69.png"
import Gladiators from "../TeamLogo/Gladiators.png"
import Mavericks from "../TeamLogo/Mavericks.png"
import MachineGun from "../TeamLogo/MachineGun.png"
import ShotGun from "../TeamLogo/ShotGun.png"

const teamInfo=[
    [1,"SYNDICATE",Syndicate],
    [2,"NM69",NM69],
    [3,"GLADIATORS",Gladiators],
    [4,"MAVERICKS",Mavericks],
    [5,"MACHINE GUN",MachineGun],
    [6,"SHOT GUN",ShotGun],
]

const Season4Matches = () => {
    return (<Fragment>
        <div className='bg-slate-200'>
            <div className='text-slate-950 text-5xl font-body flex justify-center bg-slate-300'>MATCH RESULT</div>
            <div>

            </div>
        </div>
    </Fragment>);
}

export default Season4Matches;