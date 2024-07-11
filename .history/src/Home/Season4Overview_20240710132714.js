import React, { useState } from 'react';

import Syndicate from "../TeamLogo/Syndicate.png"
import NM69 from "../TeamLogo/NM69.png"
import Gladiators from "../TeamLogo/Gladiators.png"
import Mavericks from "../TeamLogo/Mavericks.png"
import MachineGun from "../TeamLogo/MachineGun.png"
import ShotGun from "../TeamLogo/ShotGun.png"

const divs=[
    ["Nakib Arman","NM69",NM69],
    ["SHAHRIAR KABIR","Gladiators",Gladiators],
    ["Zubaer Jahin","ShotGun",ShotGun],
    ["Fahim Siam","MachineGun",MachineGun],
];
const ChngingDiv=()=>{
    const [varDiv,setvarDiv]=useState(2);

    return (
        <div className=' w-full h-full overflow-hidden'>
            <div className='relative text-white opacity-15 w-full h-full ml-44  flex justify-center items-center'>
                <div className='text-9xl font-body'>{divs[varDiv][1]}</div>
            </div>
            <div className='relative bottom-20 flex justify-center font-Titillium text-white text-xl'>CAPTAIN</div>
            <div className='relative bottom-20 flex justify-center font-Saira text-white text-3xl'>{divs[varDiv][0]}</div>
            <div className='relative bottom-52 flex justify-center font-body text-white text-7xl'>{divs[varDiv][1]}</div>
            <div className='relative  w-80  bottom-96 right-36 opacity-20'><img src={divs[varDiv][2]} alt='LL'></img></div>
        </div>
    )
}
const Season4Overview = () => {
    return ( 
        <div className='px-20 py-20 my-20 bg-slate-900'>
            <div className='flex'>
                <div className='w-56 h-56 bg-orange-300 m-1 flex justify-center items-center'><div className='text-5xl font-body te text-white drop-shadow-md'>PHOTOS</div></div>
                <div className='flex-grow h-56 bg-teal-600 m-1'><ChngingDiv/></div>
            </div>
            <div className='flex'>
                <div className='w-1/2 h-56 bg-white m-1'></div>
                <div className='flex-grow h-56 bg-white m-1'></div>
            </div>
            <div className='flex'>
                <div className='w-1/3 h-56 bg-white m-1'></div>
                <div className='w-1/3 h-56 bg-white m-1'></div>
                <div className='w-1/3 h-56 bg-white m-1'></div>
            </div>
        </div>
     );
}
 
export default Season4Overview;