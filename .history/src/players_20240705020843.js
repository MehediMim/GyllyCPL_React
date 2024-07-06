import React, { Fragment, useEffect, useState } from "react";
import _MehediMim from "./PlayerPhoto/Mehedi Mim.jpg";
import _NakibArzon from "./PlayerPhoto/Arzon.jpg"
const PlayerList = [
    [_MehediMim, "Mehedi Mim", "All Rounder"],
    [_NakibArzon, "Nakib Arzon", "Batsman"]];
const Players = () => {

    return (
        <Fragment>
        <div className="pt-20 flex flex-wrap bg-slate-100">
            <div className="font-body text-5xl">PLAYERS</div>
            {
                PlayerList.map((player, index) => (
                    <div className="w-1/5 h-auto overflow-hidden   p-2 shadow-md m-2">
                        <div className="w-full h-2/3 object-cover flex justify-center"><img src={player[0]} alt="Player" className="w-full object-cover "></img></div>
                        <div>{player[1]}</div>
                        <div>{player[2]}</div>
                    </div>
                ))
            }
        </div>
        </Fragment>
    )
}
export default Players;