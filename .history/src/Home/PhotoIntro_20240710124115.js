import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
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
            <div className='mx-10 flex flex-wrap justify-between'>
                <div className='w-1/5'><img src={s1_1} alt='hello'></img></div>
                <div className='w-1/5'><img src={s1_3} alt='hello'></img></div>
                <div className='w-1/5'><img src={s1_4} alt='hello'></img></div>
                <div className='w-1/5'><img src={s1_5} alt='hello'></img></div>
            </div>
            <div className='mx-10 '>
                <div className='bg-white font-Saira w-60 text-xl my-10 p-2'><Link to="/photos">EXPLORE ALL PHOTOS</Link></div>
            </div>
        </div>
    </Fragment>);
}

export default PhotoInto;