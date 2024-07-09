import React, { Fragment } from "react";
const FullNews = (props) => {
    return ( <Fragment>
        <div className=" bg-white relative w-screen px-20 top-20 left-1/2 transform -translate-x-1/2  z-50">
            <div className="flex">
                <div className="text-5xl font-Saira relative">{props.news[1]}</div>
                <div className="w-1/2  h-96 object-cover "><img src={props.news[0]} alt=""></img></div>
            </div>
            {props.news[2]};
        </div>

    </Fragment> );
}
 
export default FullNews;