import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Syndicate from "./TeamLogo/Syndicate.png";
import NM69 from "./TeamLogo/NM69.png";
import Gladiators from "./TeamLogo/Gladiators.png";
import Mavericks from "./TeamLogo/Mavericks.png";
import MachineGun from "./TeamLogo/MachineGun.png";
import ShotGun from "./TeamLogo/ShotGun.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons';

const teams = [
    ["NAKIB ARMAN", "NM69", NM69, "#C97925"],
    ["SHAHRIAR KABIR", "Gladiators", Gladiators, "#3C3C3B"],
    ["ZUBAER JAHIN", "ShotGun", ShotGun, "#EFBF46"],
    ["FAHIM SIAM", "MachineGun", MachineGun, "#5687A8"],
    ["MARUF ALLAM", "MAVERICKS", Mavericks, "#6A0000"],
    ["ABDULLAH MOURSHED", "SYNDICATE", Syndicate, "#266B63"],
];

const ParticularTeam = ({ team }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div className='text-white justify-between flex items-center font-Saira px-6 md:px-20 text-4xl py-20'>
                <div>{team[1]}</div>
                <div>
                    <button onClick={toggleOpen}>
                        <FontAwesomeIcon icon={isOpen ? faAnglesUp : faAnglesDown} size="xl" style={{ color: "#ffffff" }} />
                    </button>
                </div>
            </div>
        </div>
    );
};

const Team = () => {
    return (
        <Fragment>
            <div>
                {teams.map((team, key) => (
                    <ParticularTeam key={key} team={team} />
                ))}
            </div>
        </Fragment>
    );
};

export default Team;
