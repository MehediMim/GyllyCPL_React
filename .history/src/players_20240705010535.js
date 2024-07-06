import React, { Fragment, useEffect, useState } from "react";
import _MehediMim from "./PlayerPhoto/Mehedi Mim.jpg";
import _NakibArzon from "./PlayerPhoto/Arzon.jpg"
const PlayerList=[[_MehediMim,"Mehedi Mim", "All Rounder"],[_NakibArzon,"Nakib Arzon","Batsman"]];
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