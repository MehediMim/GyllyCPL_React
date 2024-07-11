import React, { Fragment, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons'

import _ratul from "../PlayerPngs/ratul.png";
import _imran from "../PlayerPngs/imran.png";
import _jn from "../PlayerPngs/jnsakib.png";
import _ripon from "../PlayerPngs/ripon.png";
import _mishu from "../PlayerPngs/mishu.png";
import _wasif from "../PlayerPngs/wasif.png";
import _refath from "../PlayerPngs/refath.png";

const runDivs = [
    ["RIPON", "SHOT GUN", 61, _ripon, "#C97925", 1],
    ["IMRAN", "SYNDICATE", 52, _imran, "#266B63", 2],
    ["MISHU", "SYNDICATE", 50, _mishu, "#266B63", 3],
    ["SAKIB", "SHOTGUN", 43, _jn, "#EFBF46", 4],
    ["PARTHO", "MACHINEGUN", 42, _ratul, "#5687A8", 5],

];

const wicketDivs=[
    ["REFAT","SYNDICATE",7,_refath,"#266B63",1],
    ["RATUL","SYNDICATE",7,_ratul,"#266B63",2],
    ["WASIF","MACHINEGUN",6,_wasif,"#5687A8",3],
    ["MISHU","SYNDICATE",6,_mishu,"#266B63",4],
    ["RIPON","SHOTGUN",6,_ripon,"#EFBF46",5],
    
];
const ShowInfo = (props) => {
    return (
        <div>
            {
                props.runDivs.map((player, key) => (
                    <div className='h-20 md:h-32 flex m-1 md:mx-44 relative' style={{ backgroundColor: player[4] }}>
                                <div className='font-body absolute flex  justify-center  opacity-10 w-full text-white text-8xl md:text-9xl'>{player[1]}</div>
                        <div className='w-10 md:w-32 h-full  flex justify-center items-center'><div className='text-5xl font-Saira text-white'>{key + 1}</div></div>
                        <div className='md:w-52 w-28  md:h-full relative md:left-20 bottom-'>
                            <div className='  bottom-0 absolute'>
                                <div className=''>
                                    <img src={player[3]} className='md:h-40 h-28 '></img>
                                </div>
                            </div>
                        </div>
                        <div className='flex-grow flex md:pl-16  justify-start items-center h-full'>

                            <div className='relative w-full'>
                                <div className='font-Saira absolute -bottom-2 text-white md:text-5xl text-4xl'>{player[0]}</div>
                                <div className='font-body absolute -bottom-8 text-white md:text-3xl text-2xl'>{player[1]}</div>
                            </div>
                        </div>
                        <div className='w-36 flex justify-center items-center h-full '>
                            <div className='text-6xl font-body text-white'>{player[2]}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const Season4Performance = () => {
    const [variable, setvariable] = useState(false);
    const funct = () => {
        setvariable(!variable);
    }

    return (<Fragment>
        <div>
            <div className='text-white justify-between flex items-center font-Saira px-6 md:px-20 text-4xl py-20'>
                <div>PLAYER PERFORMANCE</div>
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
            {
                variable && <div className='pb-20'>
                    <div className=''>
                        <div className='flex h-10 bg-slate-600 text-white my-3 mx-44 font-Saira text-2xl text-slate-900'>
                            <div className='flex-grow flex justify-center items-center'>TOP RUN SCORER</div> 
                        </div>
                        <div className='flex h-10 bg-white mx-44 font-Saira text-2xl text-slate-900'>
                            <div className='flex-grow flex justify-center items-center'>PLAYER</div>
                            <div className='w-32 flex justify-center items-center'>RUN</div>
                        </div>
                        <ShowInfo runDivs={runDivs} />
                    </div>
                    <div className='batting my-20'>
                        <div className='flex h-10 bg-slate-600 text-white my-3 mx-44 font-Saira text-2xl text-slate-900'>
                            <div className='flex-grow flex justify-center items-center'>TOP WICKET TAKER</div> 
                        </div>
                        <div className='flex h-10 bg-white mx-44 font-Saira text-2xl text-slate-900'>
                            <div className='flex-grow flex justify-center items-center'>PLAYER</div>
                            <div className='w-32 flex justify-center items-center'>WICKET</div>
                        </div>
                        <ShowInfo runDivs={wicketDivs} />
                    </div>
                </div>
            }
        </div>
    </Fragment>);
}

export default Season4Performance;