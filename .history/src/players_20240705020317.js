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
            <div key={index} className="w-1/5 h-auto overflow-hidden bg-black p-2 shadow-md">
                <div className="w-full flex justify-center">
                    <div className="relative w-full pt-full rounded-full overflow-hidden">
                        <img src={player[0]} alt="Player" className="absolute top-0 left-0 w-full h-full object-cover"></img>
                    </div>
                </div>
                <div className="text-center mt-2 text-white">{player[1]}</div>
                <div className="text-center text-gray-400">{player[2]}</div>
            </div>
        ))
    }
</div>


    )
}
export default Players;