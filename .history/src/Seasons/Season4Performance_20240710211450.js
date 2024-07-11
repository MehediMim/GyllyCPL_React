import React, { Fragment, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons'

import _ratul from "../PlayerPngs/ratul.png";
import _imran from "../PlayerPngs/imran.png";
import _jn from "../PlayerPngs/jnsakib.png";
import _ripon from "../PlayerPngs/ripon.png";
import _mishu from "../PlayerPngs/mishu.png";

const runDivs = [
    ["RIPON", "SHOT GUN", 61, _ripon, "#C97925", 1],
    ["IMRAN", "SYNDICATE", 52, _imran, "#266B63", 2],
    ["MISHU", "SYNDICATE", 50, _mishu, "#266B63", 3],
    ["JN SAKIB", "SHOTGUN", 43, _jn, "#EFBF46", 4],
    ["PARTHO", "MACHINEGUN", 42, _ratul, "#5687A8", 5],

];

const ShowInfo = (props) => {
    return (
        <div>
            {
                props.runDivs.map((player, key) => (
                    <div className='h-32 flex m-1 mx-44 ' style={{ backgroundColor: player[4] }}>
                        <div className='w-32 h-full  flex justify-center items-center'><div className='text-5xl font-Saira text-white'>{key + 1}</div></div>
                        <div className='w-52 h-full relative left-20 bottom-'>
                            <div className='  bottom-0 absolute'>
                                <div className=''>
                                    <img src={player[3]} className='h-40 '></img>
                                </div>
                            </div>
                        </div>
                        <div className='flex-grow h-full'>
                            <div className='font-body'>{player[0]}</div>
                        </div>
                        <div className='w-36 h-full bg-slate-600'></div>
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
                variable && <div>
                    <div className='batting my-20'>
                        <ShowInfo runDivs={runDivs} />
                    </div>
                </div>
            }
        </div>
    </Fragment>);
}

export default Season4Performance;