import React, { Fragment } from 'react';
import s1_1 from "../HomeImages/s1 (1).jpg"
import s1_3 from "../HomeImages/s1 (3).jpg"
import s1_4 from "../HomeImages/s1 (4).jpg"
import s1_5 from "../HomeImages/s1 (5).jpg"
const PhotoInto = () => {
    return ( <Fragment>
        <div>
            <div className='w-72'><img src={s1_1} alt='hello'></img></div>
            <div><img src={s1_3} alt='hello'></img></div>
            <div><img src={s1_4} alt='hello'></img></div>
            <div><img src={s1_5} alt='hello'></img></div>
        </div>
    </Fragment> );
}
 
export default PhotoInto;