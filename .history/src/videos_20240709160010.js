import React, { Fragment } from "react";

import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
const Video = () => {
    return (
        <Fragment>
            <div className="h-96 w-96 bg-black">HELLO</div>
            <Player>
                <source src="https://www.youtube.com/watch?v=iu-LBY7NXD4"></source>
            </Player>
        </Fragment>
      );
}
 
export default Video;