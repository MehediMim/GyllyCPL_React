import React, { Fragment, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons'

const Season4Performance = () => {
    const [variable, setvariable] = useState(false);
    const funct = () => {
        setvariable(!variable);
    }

    return (<Fragment>
        <div>
        <div className='text-white justify-between flex items-center font-Saira px-6 md:px-20 text-4xl py-20'>
          <div>POINT TABLE</div>
          <div>
            { !variable &&
              <button onClick={funct}>
                <FontAwesomeIcon icon={faAnglesDown} size="xl" style={{ color: "#ffffff", }} />
              </button>
            }
            { variable &&
              <button onClick={funct}>
                <FontAwesomeIcon icon={faAnglesUp} size="xl" style={{ color: "#ffffff", }} />
              </button>
            }
          </div>
        </div>
            {

            }
        </div>
    </Fragment>);
}

export default Season4Performance;