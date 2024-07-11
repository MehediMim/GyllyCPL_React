import React, { Fragment, useState } from 'react';
import Syndicate from "../TeamLogo/Syndicate.png"
import NM69 from "../TeamLogo/NM69.png"
import Gladiators from "../TeamLogo/Gladiators.png"
import Mavericks from "../TeamLogo/Mavericks.png"
import MachineGun from "../TeamLogo/MachineGun.png"
import ShotGun from "../TeamLogo/ShotGun.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons'
const Season4TeamList = () => {

  const [variable, setvariable] = useState(false);
  const funct = () => {
    setvariable(!variable);
  }
  return (<Fragment>
    <div className="bg-slate-200  font-body text-black text-5xl w-full ">

      <div className='text-white justify-between flex items-center font-Saira px-6 md:px-20 text-4xl py-20'>
        <div>POINT TABLE</div>
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
      <div>
        {
          variable &&
          <div>HELLo</div>
        }
      </div>


    </div>

  </Fragment>);
}

export default Season4TeamList;