import React, { Fragment } from 'react';
import s1_1 from "../HomeImages/s1 (1).jpg"
import s1_3 from "../HomeImages/s1 (3).jpg"
import s1_4 from "../HomeImages/s1 (4).jpg"
import s1_5 from "../HomeImages/s1 (5).jpg"
const PhotoInto = () => {
    return (<Fragment>
        <div>
            <div className='text-white font-Saira text-4xl pl-20 py-20'>
                <div>PHOTO GALLERY</div>
            </div>
            <div className='flex flex-wrap justify-evenly'>
                <div className='w-1/5'><img src={s1_1} alt='hello'></img></div>
                <div className='w-1/5'><img src={s1_3} alt='hello'></img></div>
                <div className='w-1/5'><img src={s1_4} alt='hello'></img></div>
                <div className='w-1/5'><img src={s1_5} alt='hello'></img></div>
            </div>
            <div>
                <div className='bg-white font-Saira w-72 relative left-0'>EXPLORE ALL PHOTOS</div>
            </div>
        </div>
    </Fragment>);
}

export default PhotoInto;