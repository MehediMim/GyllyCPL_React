import React, { Fragment } from "react";

import Footer from "./Footer";
import News from "./news";
import Photos from "./Photos";
import Intro from "./intro";
const MainHome = () => {
    return (
        <Fragment>
            <div className="relative top-16 md:top-10 z-2 bg-slate-900">
                <Intro/>
                <News/>
                
                <div className="min-h-96">
                    <div className="text-white font-body text-4xl w-full flex justify-center pt-20 ">PHOTOS</div>
                    <Photos />
                </div>
            <Footer/>
            </div>
        </Fragment>
    )
}
export default MainHome;