import React, { Fragment, useState } from 'react';
import Syndicate from "../TeamLogo/Syndicate.png"
import NM69 from "../TeamLogo/NM69.png"
import Gladiators from "../TeamLogo/Gladiators.png"
import Mavericks from "../TeamLogo/Mavericks.png"
import MachineGun from "../TeamLogo/MachineGun.png"
import ShotGun from "../TeamLogo/ShotGun.png"


const Season4LeaderBoard = () => {
  return (<Fragment>
    <div className="bg-slate-900 ">
      <div className="font-body text-black text-5xl w-full ">
        <div className='text-white  font-Saira px-6 md:px-20 text-4xl py-20'>
          <div>POINT TABLE</div>
          <button onClick={expandDiv}>HELLo</button>
        </div>
        <div>{variable}</div>
      </div>
    </div>

  </Fragment>);
}

export default Season4LeaderBoard;