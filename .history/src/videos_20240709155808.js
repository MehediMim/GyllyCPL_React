import React, { Fragment } from "react";

import { Player } from 'video-react';

const Video = () => {
    return (
        <Fragment>
            <Player>
                <source src="https://www.youtube.com/watch?v=iu-LBY7NXD4"></source>
            </Player>
        </Fragment>
      );
}
 
export default Video;