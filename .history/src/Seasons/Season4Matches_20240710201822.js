import React, { Fragment,useState } from 'react';

import Syndicate from "../TeamLogo/Syndicate.png"
import NM69 from "../TeamLogo/NM69.png"
import Gladiators from "../TeamLogo/Gladiators.png"
import Mavericks from "../TeamLogo/Mavericks.png"
import MachineGun from "../TeamLogo/MachineGun.png"
import ShotGun from "../TeamLogo/ShotGun.png"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons'


const MatchExplre = (prop) => {

    return <div>
        <div className='bg-slate-200'>

            <div className='md:flex flex-wrap justify-center pt-10'>
                {
                    prop.groupMatchInfo.map((match, key) => (
                        <div className='bg-slate-200 drop-shadow-md md:w-2/5 md:m-3 mt-10 mx-3'>
                            <div className='bg-slate-300 py-1 font-Titillium text-xl mb-3 px-5'>Match No {key + 1}</div>
                            <div className='flex  justify-center'>
                                <div className='w-2/3 flex '>
                                    <div className='w-1/4  flex justify-center'><img src={teamInfo[match.team1][2]} className='h-10'></img></div>
                                    <div className='flex text-xl font-Titillium items-center'>{teamInfo[match.team1][1]}</div>
                                </div>
                                <div className='flex w-1/3 items-center  justify-end pr-4 font-body text-2xl'>
                                    <div>{match.team1_run}-</div>
                                    <div>{match.team1_wicket}</div>
                                    <div className='ml-2'>({match.team1_over})</div>
                                </div>
                            </div>
                            <div className='flex  justify-center'>
                                <div className='w-2/3 flex '>
                                    <div className='w-1/4  flex justify-center'><img src={teamInfo[match.team2][2]} className='h-10'></img></div>
                                    <div className='flex text-xl font-Titillium items-center'>{teamInfo[match.team2][1]}</div>
                                </div>
                                <div className='flex items-center w-1/3  justify-end pr-4 font-body text-2xl'>
                                    <div>{match.team2_run}-</div>
                                    <div>{match.team2_wicket}</div>
                                    <div className='ml-2'>({match.team2_over})</div>
                                </div>
                            </div>
                            <div className='flex justify-center text-slate-700 pt-2 text-xl font-Saira'>{teamInfo[match.winner][1]} Won By {match.wonBy}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
}
const teamInfo = [
    [0, "SYNDICATE", Syndicate],
    [1, "SYNDICATE", Syndicate],
    [2, "NM69", NM69],
    [3, "GLADIATORS", Gladiators],
    [4, "MAVERICKS", Mavericks],
    [5, "MACHINE GUN", MachineGun],
    [6, "SHOT GUN", ShotGun],
]

const groupMatchInfo = [
    {
        team1: 6,
        team2: 1,
        winner: 1,
        wonBy: "8 Wickets",
        team1_run: 45,
        team1_wicket: 5,
        team1_over: 10,
        team2_run: 46,
        team2_wicket: 2,
        team2_over: 5.5,
    },
    {
        team1: 2,
        team2: 4,
        winner: 2,
        wonBy: "17 Runs",
        team1_run: 58,
        team1_wicket: 7,
        team1_over: 10,
        team2_run: 41,
        team2_wicket: 4,
        team2_over: 10,
    },
    {
        team1: 5,
        team2: 2,
        winner: 2,
        wonBy: "24 Runs",
        team1_run: 43,
        team1_wicket: 7,
        team1_over: 10,
        team2_run: 67,
        team2_wicket: 6,
        team2_over: 10,
    },
    {
        team1: 3,
        team2: 6,
        winner: 6,
        wonBy: "19 Runs",
        team1_run: 73,
        team1_wicket: 8,
        team1_over: 10,
        team2_run: 92,
        team2_wicket: 6,
        team2_over: 10,
    },
    {
        team1: 4,
        team2: 5,
        winner: 5,
        wonBy: "7 Wickets",
        team1_run: 58,
        team1_wicket: 10,
        team1_over: 10,
        team2_run: 60,
        team2_wicket: 3,
        team2_over: 7.2,
    },
    {
        team1: 1,
        team2: 3,
        winner: 3,
        wonBy: "9 Runs",
        team1_run: 55,
        team1_wicket: 6,
        team1_over: 10,
        team2_run: 64,
        team2_wicket: 7,
        team2_over: 10,
    }
]
const koMatchInfo = [
    {
        team1: 2,
        team2: 6,
        winner: 6,
        wonBy: "6 Runs",
        team1_run: 45,
        team1_wicket: 8,
        team1_over: 10,
        team2_run: 50,
        team2_wicket: 1,
        team2_over: 10,
    },
    {
        team1: 1,
        team2: 5,
        winner: 1,
        wonBy: "8 Wickets",
        team1_run: 68,
        team1_wicket: 2,
        team1_over: 8.2,
        team2_run: 65,
        team2_wicket: 7,
        team2_over: 10,
    },
]
const finalMatchInfo = [
    {
        team1: 6,
        team2: 1,
        winner: 1,
        wonBy: "9 Wickets",
        team1_run: 49,
        team1_wicket: 10,
        team1_over: 10,
        team2_run: 50,
        team2_wicket: 1,
        team2_over: 5,
    },
]

const Season4Matches = () => {

    const [variable, setvariable] = useState(false);
    const funct = () => {
        setvariable(!variable);
    }


    return (<div className=' bg-slate-200 '>
        <div className='text-black justify-between flex items-center font-Saira px-6 md:px-20 text-4xl py-20'>
            <div>TEAM LIST</div>
            <div>
                {!variable &&
                    <button onClick={funct}>
                        <FontAwesomeIcon icon={faAnglesDown} size="xl" style={{ color: "#0F172A", }} />
                    </button>
                }
                {variable &&
                    <button onClick={funct}>
                        <FontAwesomeIcon icon={faAnglesUp} size="xl" style={{ color: "#0F172A", }} />
                    </button>
                }
            </div>
        </div>

        {
            variable && <div>
                <div>
            <div className='bg-slate-200 font-Saira pt-10'><div className='md:ml-20 px-3 text-xl bg-slate-900 md:w-60 w-32 text-white'>GROUP STAGE</div></div>
            <MatchExplre groupMatchInfo={groupMatchInfo} />
        </div>
        <div>
            <div className='bg-slate-200 font-Saira pt-10'><div className='md:ml-20 px-3 text-xl bg-slate-900 md:w-60 w-32 text-white'>SEMI FINAL</div></div>
            <MatchExplre groupMatchInfo={koMatchInfo} />
        </div>
        <div>
            <div className='bg-slate-200 font-Saira pt-10'><div className='md:ml-20 px-3 text-xl bg-slate-900 md:w-60 w-32 text-white'>FINAL</div></div>
            <MatchExplre groupMatchInfo={finalMatchInfo} />
        </div>

            </div>
        }
    </div>);
}

export default Season4Matches;