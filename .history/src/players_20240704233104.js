import React, { useEffect, useState } from "react";

const Players = () => {
    const [PlayerList, setPlayerList] = useState([]);

    const getPlayerList = async () => {
        try {
            const response = await fetch(`http://localhost:5000/home/getplayers`);
            const data = await response.json();
            console.log(data);
            setPlayerList(data);
        } catch (error) {
            console.error("Error fetching player list:", error);
        }
    }

    useEffect(() => {
        getPlayerList();
    }, []);

    return (
        <div className="text-black min-h-96 pt-20">
            {PlayerList.map((player, index) => (
                <div key={index}>{player.player_name}</div>
            ))}
        </div>
    );
}

export default Players;
