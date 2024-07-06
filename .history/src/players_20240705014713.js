import React, { Fragment, useEffect, useState } from "react";
import _MehediMim from "./PlayerPhoto/Mehedi Mim.jpg";
import _NakibArzon from "./PlayerPhoto/Arzon.jpg"
const PlayerList = [
    [_MehediMim, "Mehedi Mim", "All Rounder"],
    [_NakibArzon, "Nakib Arzon", "Batsman"]];
const Players = () => {

    return (
        <div className="pt-20">
            {
                PlayerList.map((player, index) => (
                    <div>
                        <div className="w-40"><img src={player[0]} alt="Player"></img></div>
                        <div>{player[1]}</div>
                        <div>{player[2]}</div>
                    </div>
                ))
            }
        </div>

    )
}
export default Players;