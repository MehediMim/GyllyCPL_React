import React, { Fragment } from "react";
const FullNews = (props) => {
    return ( <Fragment>
        <div className=" bg-white  w-screen px-20 top-20  z-50">
            <div className="w-1/2  h-96 object-cover relative right-0"><img src={props.news[0]} alt=""></img></div>
            {props.news[1]};
            {props.news[2]};
        </div>

    </Fragment> );
}
 
export default FullNews;