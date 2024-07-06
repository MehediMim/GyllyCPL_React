import React, { Fragment, useEffect, useState } from "react";
import _MehediMim from "./PlayerPhoto/Mehedi Mim.jpg";

const MehediMim=[_MehediMim,"Mehedi Mim", "All Rounder"];
const Players = () => {
    
    return (

        <div className="text-black min-h-96 pt-20">
                <img src={MehediMim[0]}></img>
                {MehediMim[1]}
                {MehediMim[2]}
        </div>

    )
}
export default Players;