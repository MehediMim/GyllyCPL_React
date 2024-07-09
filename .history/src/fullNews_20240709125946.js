import React, { Fragment } from "react";
const FullNews = (props) => {
    return ( <Fragment>
        <div className="bg-black h-56 h-min-56">
            hello
            {props.news[0]};
        </div>

    </Fragment> );
}
 
export default FullNews;