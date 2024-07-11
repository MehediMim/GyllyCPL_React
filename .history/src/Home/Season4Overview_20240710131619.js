import React, { useState } from 'react';

const divs=[
    ["Nakib Arman","NM69"],
    ["Shahriar Kabir","Gladiators"],
    ["Zubaer Jahin","ShotGun"],
    ["Fahim Siam","MachineGun"],
];
const ChngingDiv=()=>{
    const [varDiv,setvarDiv]=useState(1);

    return (
        <div className='bg-red-200 w-full h-full'>
            <div className='relative w-full h-full flex justify-center items-center'>
                <div className='text-9xl font-body'>{divs[varDiv][1]}</div>
            </div>
            <div>CAPTAIN</div>
            <div>{divs[varDiv][0]}</div>
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