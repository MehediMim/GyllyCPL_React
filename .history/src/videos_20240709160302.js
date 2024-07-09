import React, { Fragment } from "react";

import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
const Video = () => {
    return (
        <Fragment>
            <video class="w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg" controls>
                <source src="path_to_video.mp4" type="video/mp4"></source>
                    Your browser does not support the video tag.
            </video>

        </Fragment>
    );
}

export default Video;