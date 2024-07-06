import React, { Fragment, useEffect, useState } from "react";

const Players = () => {
    const [PlayerList, setPlayerList] = useState([]);
    const getPlayerList = async () => {
        const response = await fetch(`http://localhost:5000/home/getplayers`);
        const data = await response.json();
        setPlayerList(data);
    }
    useEffect(() => {
        getPlayerList();
    }, []);
    return (

        <div className="text-black min-h-96 pt-20">
            {
                PlayerList.map((Players, index) => (
                    <div key={index}>{Players.player_name}</div>
                ))
            }
        </div>

    )
}
export default Players;