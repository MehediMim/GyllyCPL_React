import React, { Fragment } from "react";

const Video = () => {
    const path="https://www.youtube.com/watch?v=iu-LBY7NXD4";
    return (
        <Fragment>
            <video class="w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-lg" controls>
                <source src={path} type="video/mp4"></source>
                    Your browser does not support the video tag.
            </video>

        </Fragment>
    );
}

export default Video;