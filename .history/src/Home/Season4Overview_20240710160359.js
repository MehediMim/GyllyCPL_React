import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Syndicate from "../TeamLogo/Syndicate.png"
import NM69 from "../TeamLogo/NM69.png"
import Gladiators from "../TeamLogo/Gladiators.png"
import Mavericks from "../TeamLogo/Mavericks.png"
import MachineGun from "../TeamLogo/MachineGun.png"
import ShotGun from "../TeamLogo/ShotGun.png"

const divs=[
    ["NAKIB ARMAN","NM69",NM69,"#C97925"],
    ["SHAHRIAR KABIR","Gladiators",Gladiators,"#3C3C3B"],
    ["ZUBAER JAHIN","ShotGun",ShotGun,"#EFBF46"],
    ["FAHIM SIAM","MachineGun",MachineGun,"#5687A8"],
    ["MARUF ALLAM","MAVERICKS",Mavericks,"#6A0000"],
    ["ABDULLAH MOURSHED","SYNDICATE",Syndicate,"#266B63"],
];
const runDivs=[
    ["RIPON","SHOT GUN",61,NM69,"#C97925",1],
    ["IMRAN","SYNDICATE",52,Syndicate,"#266B63",2],
    ["MISHU","SYNDICATE",50,Syndicate,"#266B63",3],
    ["JN SAKIB","SHOTGUN",43,ShotGun,"#EFBF46",4],
    ["PARTHO","MACHINEGUN",42,MachineGun,"#5687A8",5],
    
];
const wicketDivs=[
    ["R REFAT","SYNDICATE",7,Syndicate,"#266B63",1],
    ["M RATUL","SYNDICATE",7,Syndicate,"#266B63",2],
    ["WASIF","MACHINEGUN",6,MachineGun,"#5687A8",3],
    ["MISHU","SYNDICATE",6,Syndicate,"#266B63",4],
    ["RIPON","SHOTGUN",6,ShotGun,"#EFBF46",5],
    
];
const ChngingDiv=()=>{
    const [varDiv,setvarDiv]=useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setvarDiv((prevVarDiv) => (prevVarDiv + 1) % divs.length);
        },1500);
        return ()=>clearInterval(interval);
    },[]);

    return (
        <div className=' w-full h-full overflow-hidden relative' style={{backgroundColor:divs[varDiv][3]}}>
            <div className='absolute  text-white opacity-15  h-full ml-44 right-32 flex justify-center items-center'>
                <div className='text-9xl font-body'>{divs[varDiv][1]}</div>
            </div>
            <div className='absolute bottom-16 w-full flex justify-center font-Titillium text-white text-xl'>CAPTAIN</div>
            <div className='absolute bottom-10 w-full flex justify-center font-Saira text-white text-3xl'>{divs[varDiv][0]}</div>
            <div className='absolute bottom-20 w-full flex justify-center font-body text-white text-7xl'>{divs[varDiv][1]}</div>
            <div className='absolute flex justify-center items-center h-56  pl-10'><img src={divs[varDiv][2]} className='w-20 ' alt='LL'></img></div>
            <div className='absolute  w-80  opacity-20'><img src={divs[varDiv][2]} alt='LL'></img></div>
        </div>
    )
}

const ChngingRunDiv=()=>{
    const [varDiv,setvarDiv]=useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setvarDiv((prevVarDiv) => (prevVarDiv + 1) % runDivs.length);
        },2000);
        return ()=>clearInterval(interval);
    },[]);

    return (
        <div className=' w-full h-full transition-opacity transform translate-x-5 overflow-hidden relative' style={{backgroundColor:runDivs[varDiv][4]}}>
            <div className='absolute  text-white opacity-15  h-full w-full ml-44  flex justify-center items-center'>
                <div className='text-9xl font-body'>{runDivs[varDiv][1]}</div>
            </div>
            <div className='absolute bottom-32 z-50 w-full flex justify-center font-Titillium text-white text-xl'>MOST RUNS</div>
            <div className='absolute bottom-20 z-50 w-full flex justify-center font-Saira text-white text-5xl'>{runDivs[varDiv][0]}</div>
            <div className='absolute bottom-14 z-50 w-full flex justify-center font-body text-slate-300 text-3xl'>{runDivs[varDiv][1]}</div>
            <div className='absolute flex justify-center items-center h-56  pl-10'><div className='font-body text-white text-7xl z-50'>{runDivs[varDiv][5]}</div></div>
            <div className='absolute right-10 flex justify-center items-center h-56  pl-10'><div className='font-body text-white text-9xl z-50'>{runDivs[varDiv][2]}</div></div>
            <div className='absolute  w-44  opacity-20'><img src={runDivs[varDiv][3]} alt='LL'></img></div>
        </div>
    )
}
const ChngingWWicketDiv=()=>{
    const [varDiv,setvarDiv]=useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setvarDiv((prevVarDiv) => (prevVarDiv + 1) % wicketDivs.length);
        },1700);
        return ()=>clearInterval(interval);
    },[]);

    return (
        <div className=' w-full h-full  overflow-hidden relative' style={{backgroundColor:wicketDivs[varDiv][4]}}>
            <div className='absolute  text-white opacity-15  h-full w-full ml-44  flex justify-center items-center'>
                <div className='text-9xl font-body'>{wicketDivs[varDiv][1]}</div>
            </div>
            <div className='absolute bottom-32 z-50 w-full flex justify-center font-Titillium text-white text-xl'>MOST WICKETS</div>
            <div className='absolute bottom-20 z-50 w-full flex justify-center font-Saira text-white text-5xl'>{wicketDivs[varDiv][0]}</div>
            <div className='absolute bottom-14 z-50 w-full flex justify-center font-body text-slate-300 text-3xl'>{wicketDivs[varDiv][1]}</div>
            <div className='absolute flex justify-center items-center h-56  pl-10'><div className='font-body text-white text-7xl z-50'>{wicketDivs[varDiv][5]}</div></div>
            <div className='absolute right-10 flex justify-center items-center h-56  pl-10'><div className='font-body text-white text-9xl z-50'>{wicketDivs[varDiv][2]}</div></div>
            <div className='absolute  w-44  opacity-20'><img src={wicketDivs[varDiv][3]} alt='LL'></img></div>
        </div>
    )
}

const Season4Overview = () => {
    return ( 
        <div className='px-20 py-20 my-20 bg-slate-900'>
            <div className='flex'>
                <div className='w-56 h-56 bg-orange-300 m-1 flex justify-center items-center'><div className='text-5xl font-body te text-white drop-shadow-md'><Link to="/photos">PHOTOS</Link></div></div>
                <div className='flex-grow h-56 bg-teal-600 m-1'><ChngingDiv/></div>
            </div>
            <div className='flex'>
                <div className='w-1/2 h-56 bg-white m-1'><ChngingRunDiv/></div>
                <div className='flex-grow h-56 bg-white m-1'><ChngingWWicketDiv/></div>
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