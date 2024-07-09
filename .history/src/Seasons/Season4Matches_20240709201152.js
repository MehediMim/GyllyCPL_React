import React, { Fragment } from 'react';

import Syndicate from "../TeamLogo/Syndicate.png"
import NM69 from "../TeamLogo/NM69.png"
import Gladiators from "../TeamLogo/Gladiators.png"
import Mavericks from "../TeamLogo/Mavericks.png"
import MachineGun from "../TeamLogo/MachineGun.png"
import ShotGun from "../TeamLogo/ShotGun.png"

const teamInfo=[
    [0,"SYNDICATE",Syndicate],
    [1,"SYNDICATE",Syndicate],
    [2,"NM69",NM69],
    [3,"GLADIATORS",Gladiators],
    [4,"MAVERICKS",Mavericks],
    [5,"MACHINE GUN",MachineGun],
    [6,"SHOT GUN",ShotGun],
]

const groupMatchInfo=[
    {
        team1:6,
        team2:1,
        winner:1,
        team1_run:45,
        team1_wicket:5,
        team1_over:10,
        team2_run:46,
        team2_wicket:2,
        team2_over:5.5,
    },
    {
        team1:2,
        team2:4,
        winner:2,
        team1_run:58,
        team1_wicket:7,
        team1_over:10,
        team2_run:41,
        team2_wicket:4,
        team2_over:10,
    },
    {
        team1:5,
        team2:2,
        winner:2,
        team1_run:43,
        team1_wicket:7,
        team1_over:10,
        team2_run:67,
        team2_wicket:6,
        team2_over:10,
    },
    {
        team1:3,
        team2:6,
        winner:6,
        team1_run:73,
        team1_wicket:8,
        team1_over:10,
        team2_run:92,
        team2_wicket:6,
        team2_over:10,
    },
    {
        team1:4,
        team2:5,
        team1_run:58,
        team1_wicket:10,
        team1_over:10,
        team2_run:60,
        team2_wicket:3,
        team2_over:7.2,
    },
    {
        team1:1,
        team2:3,
        team1_run:55,
        team1_wicket:6,
        team1_over:10,
        team2_run:64,
        team2_wicket:7,
        team2_over:10,
    }
]
const koMatchInfo=[
    {
        team1:3,
        team2:6,
        winner:6,
        team1_run:73,
        team1_wicket:8,
        team1_over:10,
        team2_run:92,
        team2_wicket:6,
        team2_over:10,
    },
]

const Season4Matches = () => {
    return (<Fragment>
        <div className='bg-slate-200'>
            <div className='text-slate-950 text-5xl font-body flex justify-center bg-slate-300'>MATCH RESULT</div>
            <div>
            {
                groupMatchInfo.map((match)=>(
                    <div className='bg-slate-300 w-1/2 m-3 flex'>
                        <div className='flex bg-white justify-center'> 
                            <div className='w-2/3 flex bg-slate-300'>
                                <div className='w-1/4  flex justify-center'><img src={teamInfo[match.team1][2]} className='h-10'></img></div>
                                <div className='flex text-xl font-Titillium items-center'>{teamInfo[match.team1][1]}</div>
                            </div>
                            <div className='flex w-1/3 items-center bg-slate-600 justify-end pr-4'>
                                <div>{match.team1_run}-</div>
                                <div>{match.team1_wicket}</div>
                                <div>({match.team1_over})</div>
                            </div>
                        </div>
                        <div className='flex bg-white justify-center'> 
                            <div className='w-2/3 flex bg-slate-300'>
                                <div className='w-1/4  flex justify-center'><img src={teamInfo[match.team2][2]} className='h-10'></img></div>
                                <div className='flex text-xl font-Titillium items-center'>{teamInfo[match.team2][1]}</div>
                            </div>
                            <div className='flex items-center w-1/3 bg-slate-600 justify-end pr-4'>
                                <div>{match.team2_run}-</div>
                                <div>{match.team2_wicket}</div>
                                <div>({match.team2_over})</div>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </Fragment>);
}

export default Season4Matches;