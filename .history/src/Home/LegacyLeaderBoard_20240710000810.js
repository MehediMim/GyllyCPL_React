import React, { Fragment } from 'react';
import Syndicate from "../TeamLogo/Syndicate.png"
import NM69 from "../TeamLogo/NM69.png"
import Gladiators from "../TeamLogo/Gladiators.png"
import Mavericks from "../TeamLogo/Mavericks.png"
import MachineGun from "../TeamLogo/MachineGun.png"
import ShotGun from "../TeamLogo/ShotGun.png"

const teaminfo=[
    {
        teamName:"Syndicate",
        teamLogo:Syndicate,
        seasonParticipated:2,
        matchPlay:0,        
        matchWin:0,        
        Champion:0,        
        RunnerUp:0,        
    },
    {
        teamName:"NoobMaster69",
        teamLogo:NM69,
        seasonParticipated:4,
        matchPlay:0,        
        matchWin:0,        
        Champion:0,        
        RunnerUp:0,        
    },
    {
        teamName:"MachineGun",
        teamLogo:MachineGun,
        seasonParticipated:4,
        matchPlay:0,        
        matchWin:0,        
        Champion:0,        
        RunnerUp:0,        
    },
    {
        teamName:"ShotGun",
        teamLogo:ShotGun,
        seasonParticipated:4,
        matchPlay:0,        
        matchWin:0,        
        Champion:0,        
        RunnerUp:0,        
    },
    {
        teamName:"Mavericks",
        teamLogo:Mavericks,
        seasonParticipated:2,
        matchPlay:0,        
        matchWin:0,        
        Champion:0,        
        RunnerUp:0,        
    },
    {
        teamName:"Gullygladiators",
        teamLogo:Gladiators,
        seasonParticipated:4,
        matchPlay:0,        
        matchWin:0,        
        Champion:0,        
        RunnerUp:0,        
    },
]
const LegacyLeaderBoard = () => {
    return ( 
        <Fragment>
            <div className='bg-slate-900 '>
                <div className='text-white my-10 ml-20 pl-2 text-4xl flex w-1/3 font-Saira'>LEGACY LEADERBOARD</div>
                <div className='flex flex-wrap'>
                {
                    teaminfo.map((team,key)=>(
                        <div className='m-2 w-60 h-72 bg-white'>
                            <div>
                                <div className='m-3 text-7xl font-Saira'>{key+1}</div>                                
                            </div>
                            <div>
                                <div className=' w-60 h-96 bg-slate-500 object-cover'>
                                    <img src={team.teamLogo} alt='hello' className=' object-cover'></img>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </Fragment>
     );
}
 
export default LegacyLeaderBoard;