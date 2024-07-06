import React, { Fragment, useEffect, useState } from "react";
import _MehediMim from "./PlayerPhoto/Mehedi Mim.jpg";
import _NakibArzon from "./PlayerPhoto/Arzon.jpg"
import _ArnabSArkar from "./PlayerPhoto/Arnab Sarkar.jpg"
import _Farabi from "./PlayerPhoto/Farabi.jpg"
import _HasinRoudro from "./PlayerPhoto/Hasin Roudro.jpg"
const PlayerList = [
    [_MehediMim, "Mehedi Mim", "All Rounder"],
    [_ArnabSArkar, "Arnab Sarkar", "All Rounder"],
    [_Farabi, "Farabi", "batsman"],
    [_HasinRoudro, "Hasin Roudro", "batsman"],
    [_NakibArzon, "Nakib Arzon", "Batsman"]];
const Players = () => {

    return (
        <Fragment>
            <div className="pt-32 bg-slate-100 flex justify-center font-body text-5xl">PLAYERS</div>
        <div className="pt-10 flex flex-wrap bg-slate-100 justify-evenly">
            {
                PlayerList.map((player, index) => (
                    <div className="w-full md:w-1/6 h-1/2 overflow-hidden justify-center md:flex flex-col items-center p-2 shadow-md m-2">
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