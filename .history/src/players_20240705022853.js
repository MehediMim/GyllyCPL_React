import React, { Fragment, useEffect, useState } from "react";
import _MehediMim from "./PlayerPhoto/Mehedi Mim.jpg";
import _NakibArzon from "./PlayerPhoto/Arzon.jpg"
import _ArnabSArkar from "./PlayerPhoto/Arnab Sarkar.jpg"
import _Farabi from "./PlayerPhoto/Farabi.jpg"
import _HasinRoudro from "./PlayerPhoto/Hasin Roudro.jpg"
const PlayerList = [
    [_MehediMim, "Mehedi Mim", "ALL ROUNDER"],
    [_ArnabSArkar, "Arnab Sarkar", "ALL ROUNDER"],
    [_Farabi, "Farabi", "BATSMAN"],
    [_HasinRoudro, "Hasin Roudro", "ALL ROUNDER"],
    [_NakibArzon, "Nakib Arzon", "BATSMAN"]];
const Players = () => {

    return (
        <Fragment>
            <div className="pt-32 bg-slate-100 flex justify-center font-body text-5xl">PLAYERS</div>
        <div className="pt-10 flex flex-wrap bg-slate-100 justify-evenly">
            {
                PlayerList.map((player, index) => (
                    <div className="w-3/4 md:w-1/5 md:h-80 overflow-hidden justify-center flex flex-col items-center p-2 shadow-md m-2">
                        <div className="w-full h-4/5 object-cover flex justify-center"><img src={player[0]} alt="Player" className="w-full object-cover "></img></div>
                        <div className="relative w-full flex justify-center bottom-8 bg-gradient-to-t from-slate-900 text-white font-Saira text-3xl">{player[1]}</div>
                        <div className="font-Titillium text-xl">{player[2]}</div>
                    </div>
                ))
            }
        </div>
        </Fragment>
    )
}
export default Players;