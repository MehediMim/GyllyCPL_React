import React, { Fragment } from "react";
const FullNews = (props) => {
    return ( <Fragment>
        <div className=" bg-white relative w-screen px-20 top-20 left-1/2 transform -translate-x-1/2  z-30">
            <div className="flex items-center">
                <div className="text-5xl font-Saira z-40 bg-slate-200 p-10">{props.news[1]}</div>
                <div className=" relative -left-0 z-30  h-72 object-cover "><img src={props.news[0]} alt=""></img></div>
            </div>
            <div className="font-Titillium bg-white z-50 w-1/2 text-xl">{props.news[2]}</div>
        </div>

    </Fragment> );
}
 
export default FullNews;