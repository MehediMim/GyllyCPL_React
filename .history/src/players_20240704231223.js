import React, { Fragment, useEffect, useState } from "react";

const Players = () => {
    const [PlayerList, setPlayerList] = useState(['mim', 'mehedi']);

    return (
        <>
            <div className="text-black min-h-96">
                {
                    PlayerList.map((player, index) => (
                        <div key={index}>{player}</div>
                    ))
                }
            </div>
            <div>HELLO</div>
        </>
    );
}

export default Players;
