import React, { Fragment, useEffect, useState } from "react";

const Players=()=>{
    const [PlayerList,setPlayerList]=useState([]); 
    useEffect(()=>{
        const getPlayerList= async()=>{
            const response = await fetch(`http://localhost:5000/getplayers`);
            const data = await response.json();
            console.log(data);
        }
    })
    return (
        <Fragment>
            <div className="text-black min-h-96 pt-20">
                {
                    PlayerList.map((Players,index)=>(
                        <div key="index">{Players}</div>
                        
                    ))
                }
            </div>
                <div>HELLo</div>
        </Fragment>
    )
}
export default Players;