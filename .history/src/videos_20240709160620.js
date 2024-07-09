import React, { Fragment } from "react";

const Video = () => {
    const youtubeVideoUrl = "https://youtu.be/ZglmHOBj1-U?si=frttCd-AKTGP6Bk9";

    return (
        <Fragment>
            <iframe
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                src={youtubeVideoUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded YouTube Video"
                style={{ height: "500px" }}  // Adjust the height as needed
            ></iframe>
        </Fragment>
    );
}

export default Video;
