import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

import s1_1 from "./HomeImages/s1 (1).jpg"
import s1_3 from "./HomeImages/s1 (3).jpg"
import s1_4 from "./HomeImages/s1 (4).jpg"
import s1_5 from "./HomeImages/s1 (5).jpg"
import s1_6 from "./HomeImages/s1 (6).jpg"
import s1_7 from "./HomeImages/s1 (7).jpg"
import s1_8 from "./HomeImages/s1 (8).jpg"
import s1_9 from "./HomeImages/s1 (9).jpg"
import s1_10 from "./HomeImages/s1 (10).jpg"
import s1_11 from "./HomeImages/s1 (11).jpg"
import s1_13 from "./HomeImages/s1 (13).jpg"

import s3_1 from "./HomeImages/s3 (1).jpg"
import s3_2 from "./HomeImages/s3 (2).jpg"
import s3_3 from "./HomeImages/s3 (3).jpg"
import s3_4 from "./HomeImages/s3 (4).jpg"
import s3_5 from "./HomeImages/s3 (5).jpg"
import s3_6 from "./HomeImages/s3 (6).jpg"
import s3_7 from "./HomeImages/s3 (7).jpg"
import s3_8 from "./HomeImages/s3 (8).jpg"
import s3_9 from "./HomeImages/s3 (9).jpg"
import s3_10 from "./HomeImages/s3 (10).jpg"
import s3_11 from "./HomeImages/s3 (11).jpg"
import s3_12 from "./HomeImages/s3 (12).jpg"
import s3_13 from "./HomeImages/s3 (13).jpg"
import s3_14 from "./HomeImages/s3 (14).jpg"
import s3_15 from "./HomeImages/s3 (15).jpg"
import s3_16 from "./HomeImages/s3 (16).jpg"
import s3_17 from "./HomeImages/s3 (17).jpg"
import s3_18 from "./HomeImages/s3 (18).jpg"

const Season1Images = [s1_1, s1_3, s1_4, s1_5, s1_6, s1_7, s1_8, s1_9, s1_10, s1_11, s1_13];
const Season3Images = [s3_1, s3_2, s3_3, s3_4, s3_5, s3_6, s3_7, s3_8, s3_9, s3_10, s3_11, s3_12, s3_13, s3_14, s3_15, s3_16, s3_17, s3_18];


const Photos = () => {
    const [images, setImages] = useState([]);
    const [expandimage, setexpandimage] = useState([]);
    const [showingimage, setshowingimage] = useState(false);
    const Showimage = (seasonimage) => {
        setImages(seasonimage);
    }
    const setexpandimageFunction = (eximage) => {
        setexpandimage(eximage);
        setshowingimage(true);
    }
    const makefalse = () => {
        setshowingimage(false);
    }
    return (
        <Fragment>
            <div className="w-full h-min-screen ">
                <div className="text-white font-body text-4xl w-full flex justify-center bg-slate-950">PHOTOS</div>
                <div className="bg-slate-900 text-white h-48 md:h-28 flex justify-center items-end">
                    <div className="font-Titillium  text-xl w-1/2 md:flex ">
                        {/* <div className=" w-full flex justify-center"><button>SEASON 1</button></div> */}
                        {/* <div className=" w-full flex justify-center"><button>SEASON 2</button></div> */}
                        <div className=" w-full flex justify-center"><button onClick={() => Showimage(Season3Images)}>SEASON 3</button></div>
                        <div className=" w-full flex justify-center"><button onClick={() => Showimage(Season1Images)}>SEASON 4</button></div>
                    </div>
                </div>
                <div className="w-full md:flex flex-wrap justify-center">
                    {images.map((image) => (
                        <div className="md:w-1/5 p-3 m-2 shadow-md">
                            <button><img src={image} alt="null" onClick={() => setexpandimageFunction(image)}></img></button>
                        </div>
                    ))}
                </div>
                {showingimage && <div className="fixed top-1/2  md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2  w-full  md:w-3/5 z-50 justify-end flex">
                    <div className="md:bg-white md:p-5"><img src={expandimage}></img></div>
                    <div className="md:relative md:-left-5 absolute top-5 md:top-0 right-5 md:right-0" onClick={makefalse}><button><FontAwesomeIcon icon={faCircleXmark} /></button></div>

                </div>
                }
            </div>
        </Fragment>
    )
}
export default Photos;