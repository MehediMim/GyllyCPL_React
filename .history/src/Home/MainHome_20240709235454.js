import React, { Fragment } from "react";

import Footer from "./Footer";
import News from "../news";
import Photos from "../Photos";
import Intro from "./intro";
import TrophyCabinet from "./TrophyCabinet";
import LegacyLeaderBoard from "./LegacyLeaderBoard";
const MainHome = () => {
    return (
        <Fragment>
            <div className="relative top-16 md:top-10 z-2 bg-slate-900">
                <Intro/>
                <News/>
                <TrophyCabinet/>
                <LegacyLeaderBoard/>
                <Photos/>
                <Footer/>
            </div>
        </Fragment>
    )
}
export default MainHome;