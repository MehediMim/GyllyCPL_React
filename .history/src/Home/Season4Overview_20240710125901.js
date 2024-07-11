import React from 'react';
const Season4Overview = () => {
    return ( 
        <div className='px-20 py-20 my-20 bg-slate-200'>
            <div className='flex'>
                <div className='w-56 h-56 bg-orange-300 m-1 flex justify-center items-center'><div className='text-3xl font-body'>PHOTOS</div></div>
                <div className='flex-grow h-56 bg-white m-1'></div>
            </div>
            <div className='flex'>
                <div className='w-1/2 h-56 bg-white m-1'></div>
                <div className='flex-grow h-56 bg-white m-1'></div>
            </div>
            <div className='flex'>
                <div className='w-1/3 h-56 bg-white m-1'></div>
                <div className='w-1/3 h-56 bg-white m-1'></div>
                <div className='w-1/3 h-56 bg-white m-1'></div>
            </div>
        </div>
     );
}
 
export default Season4Overview;