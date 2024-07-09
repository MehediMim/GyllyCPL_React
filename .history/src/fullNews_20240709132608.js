import React, { Fragment } from "react";
const FullNews = (props) => {
    return ( <Fragment>
        <div className=" bg-white relative top-20 left-1/2 transform -translate-x-1/2  z-50">
            <img src={props.news[0]} alt=""></img>;
            {props.news[1]};
            {props.news[2]};
        </div>

    </Fragment> );
}
 
export default FullNews;