import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Syndicate from "./TeamLogo/Syndicate.png"
import NM69 from "./TeamLogo/NM69.png"
import Gladiators from "./TeamLogo/Gladiators.png"
import Mavericks from "./TeamLogo/Mavericks.png"
import MachineGun from "./TeamLogo/MachineGun.png"
import ShotGun from "./TeamLogo/ShotGun.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons'


const divs = [
    ["NAKIB ARMAN", "NOOBMASTER69", NM69, "#C97925"],
    ["SHAHRIAR KABIR", "GULLY GLADIATORS", Gladiators, "#3C3C3B"],
    ["ZUBAER JAHIN", "SHOTGUN", ShotGun, "#EFBF46"],
    ["FAHIM SIAM", "MACHINEGUN", MachineGun, "#5687A8"],
    ["MARUF ALLAM", "MAVERICKS", Mavericks, "#6A0000"],
    ["ABDULLAH MOURSHED", "SYNDICATE", Syndicate, "#266B63"],
];
const players = [
    [
        ["Md. Atakad Billah Hemel", "All Rounder", "30500"],
        ["Anupam Pal", "All Rounder", "2000"],
        ["Seeum Ahmed", "Batsman", "2000"],
        ["Aiman Khan", "Bataman", "4000"],
        ["Kaosar Kabbo", "All Rounder", "2000"],
        ["Nurunnobi Rahman", "Wicketkeeper-Batsman", "46000"],
        ["Hassin Arman Nihal", "AllRounder", "4000"],
        ["Md Arif Arman", "All Rounder", "2000"],
        ["Arif Almas Rahman", "AllRounder", "2000"],
        ["Soumya Jabid Prinon", "Batsman", "3000"],
        ["Mostofa Rafith", "AllRounder", "2000"],
    ],
    [
        ["Md. Atakad Billah Hemel", "All Rounder", "30500"],
        ["Anupam Pal", "All Rounder", "2000"],
        ["Seeum Ahmed", "Batsman", "2000"],
        ["Aiman Khan", "Bataman", "4000"],
        ["Kaosar Kabbo", "All Rounder", "2000"],
        ["Nurunnobi Rahman", "Wicketkeeper-Batsman", "46000"],
        ["Hassin Arman Nihal", "AllRounder", "4000"],
        ["Md Arif Arman", "All Rounder", "2000"],
        ["Arif Almas Rahman", "AllRounder", "2000"],
        ["Soumya Jabid Prinon", "Batsman", "3000"],
        ["Mostofa Rafith", "AllRounder", "2000"],
    ],
    [
        ["Md. Atakad Billah Hemel", "All Rounder", "30500"],
        ["Anupam Pal", "All Rounder", "2000"],
        ["Seeum Ahmed", "Batsman", "2000"],
        ["Aiman Khan", "Bataman", "4000"],
        ["Kaosar Kabbo", "All Rounder", "2000"],
        ["Nurunnobi Rahman", "Wicketkeeper-Batsman", "46000"],
        ["Hassin Arman Nihal", "AllRounder", "4000"],
        ["Md Arif Arman", "All Rounder", "2000"],
        ["Arif Almas Rahman", "AllRounder", "2000"],
        ["Soumya Jabid Prinon", "Batsman", "3000"],
        ["Mostofa Rafith", "AllRounder", "2000"],
    ],
    [
        ["Md. Atakad Billah Hemel", "All Rounder", "30500"],
        ["Anupam Pal", "All Rounder", "2000"],
        ["Seeum Ahmed", "Batsman", "2000"],
        ["Aiman Khan", "Bataman", "4000"],
        ["Kaosar Kabbo", "All Rounder", "2000"],
        ["Nurunnobi Rahman", "Wicketkeeper-Batsman", "46000"],
        ["Hassin Arman Nihal", "AllRounder", "4000"],
        ["Md Arif Arman", "All Rounder", "2000"],
        ["Arif Almas Rahman", "AllRounder", "2000"],
        ["Soumya Jabid Prinon", "Batsman", "3000"],
        ["Mostofa Rafith", "AllRounder", "2000"],
    ],
    [
        ["Md. Atakad Billah Hemel", "All Rounder", "30500"],
        ["Anupam Pal", "All Rounder", "2000"],
        ["Seeum Ahmed", "Batsman", "2000"],
        ["Aiman Khan", "Bataman", "4000"],
        ["Kaosar Kabbo", "All Rounder", "2000"],
        ["Nurunnobi Rahman", "Wicketkeeper-Batsman", "46000"],
        ["Hassin Arman Nihal", "AllRounder", "4000"],
        ["Md Arif Arman", "All Rounder", "2000"],
        ["Arif Almas Rahman", "AllRounder", "2000"],
        ["Soumya Jabid Prinon", "Batsman", "3000"],
        ["Mostofa Rafith", "AllRounder", "2000"],
    ],
    [
        ["Md. Atakad Billah Hemel", "All Rounder", "30500"],
        ["Anupam Pal", "All Rounder", "2000"],
        ["Seeum Ahmed", "Batsman", "2000"],
        ["Aiman Khan", "Bataman", "4000"],
        ["Kaosar Kabbo", "All Rounder", "2000"],
        ["Nurunnobi Rahman", "Wicketkeeper-Batsman", "46000"],
        ["Hassin Arman Nihal", "AllRounder", "4000"],
        ["Md Arif Arman", "All Rounder", "2000"],
        ["Arif Almas Rahman", "AllRounder", "2000"],
        ["Soumya Jabid Prinon", "Batsman", "3000"],
        ["Mostofa Rafith", "AllRounder", "2000"],
    ],

]


const ParticularTeam = (props) => {
    const [variable, setvariable] = useState(false);
    const funct = () => {
        setvariable(!variable);
    }
    return (
        <div className='' style={{ backgroundColor: props.team[3] }}>

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
            {variable &&
                <div className='relative  overflow-x-hidden'>
                    <div className=' flex'>

                        <div className='w-3/4  pl-20'>
                            <div className='text-white '>
                                <div className='font-Titillium text-2xl'>CAPTAIN</div>
                                <div className='font-Saira text-6xl'>{props.team[0]}</div>
                            </div>
                        </div>
                        <div className='w-1/4   m-10'><img src={props.team[2]}></img></div>
                    </div>
                    <div className='flex top-0 opacity-10 absolute left-20'>
                        <div className='text-9xl font-Saira'>{props.team[1]}</div>
                        <div><img src={props.team[2]}></img></div>
                    </div>

                    <div className='pl-20'>
                        <div className='font-Titillium text-white text-2xl'>CURRENT SQUAD</div>

                        <div>
                            {
                                props.squad.map((player, key) => (
                                    <div>
                                        <div>
                                            <div className='text-white font-body text-5xl'>{player[0]}</div>
                                            <div className='text-white font-body text-xl'>{player[1]}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

const Team = () => {
    return (
        <Fragment>
            <div className='pt-20 bg-slate-900'>
                {
                    divs.map((team, key) => (
                        <div>
                            <ParticularTeam team={team} squad={players[key]} />
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}
export default Team;