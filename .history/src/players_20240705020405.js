import React, { Fragment, useEffect, useState } from "react";
import _MehediMim from "./PlayerPhoto/Mehedi Mim.jpg";
import _NakibArzon from "./PlayerPhoto/Arzon.jpg"
const PlayerList = [
    [_MehediMim, "Mehedi Mim", "All Rounder"],
    [_NakibArzon, "Nakib Arzon", "Batsman"]];
const Players = () => {

    return (
        <div className="pt-20 h-full flex flex-wrap">
            {
                PlayerList.map((player, index) => (
                    <div className="w-1/5 h-auto overflow-hidden  bg-black  p-2 shadow-md">
                        <div className="w-full h-1/2 flex justify-center"><img src={player[0]} alt="Player" className=" object-cover "></img></div>
                        <div>{player[1]}</div>
                        <div>{player[2]}</div>
                    </div>
                ))
            }
        </div>

    )
}
export default Players;