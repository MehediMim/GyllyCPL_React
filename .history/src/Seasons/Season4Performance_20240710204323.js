import React, { Fragment, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons'

import _ratul from "../PlayerPngs/ratul.png";
import _imran from "../PlayerPngs/imran.png";
const runDivs = [
    ["RIPON", "SHOT GUN", 61, _ratul, "#C97925", 1],
    ["IMRAN", "SYNDICATE", 52, _ratul, "#266B63", 2],
    ["MISHU", "SYNDICATE", 50, _ratul, "#266B63", 3],
    ["JN SAKIB", "SHOTGUN", 43, _ratul, "#EFBF46", 4],
    ["PARTHO", "MACHINEGUN", 42, _ratul, "#5687A8", 5],

];

const showInfo = (props) => {
    return (
        <div>
            {
                props.runDivs.map((player, key) => (
                    <div>G</div>
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
                        <showInfo runDivs={runDivs}/>
                    </div>
                </div>
            }
        </div>
    </Fragment>);
}

export default Season4Performance;