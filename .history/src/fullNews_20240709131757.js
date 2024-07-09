import React, { Fragment } from "react";
const FullNews = (props) => {
    return ( <Fragment>
        <div className=" bg-white">
            <img src={props.news[0] alt=""}></img>;
            {props.news[1]};
            {props.news[2]};
        </div>

    </Fragment> );
}
 
export default FullNews;