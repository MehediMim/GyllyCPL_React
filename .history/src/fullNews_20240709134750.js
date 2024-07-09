import React, { Fragment } from "react";
const FullNews = (props) => {
    return ( <Fragment>
        <div className=" bg-white relative w-screen px-20 top-20 left-1/2 transform -translate-x-1/2  z-30">
            <div className="flex  py-10">
                <div className="my-20 text-5xl font-Saira z-40 bg-slate-200 p-10 w-2/3">{props.news[1]}</div>
                <div className=" absolute top-0 py-10 right-0 w-1/3 transform  z-30  h-72 object-cover "><img src={props.news[0]} alt=""></img></div>
            </div>
            <div className="font-Titillium bg-white z-50 w-1/2 text-xl">{props.news[2]}</div>
        </div>

    </Fragment> );
}
 
export default FullNews;