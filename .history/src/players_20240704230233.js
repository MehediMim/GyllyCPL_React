import React, { Fragment, useEffect } from "react";

const Players=()=>{
    const [PlayerList,setPlayerList]=useEffect([]); 

    return (
        <Fragment>
            <div>
                {
                    PlayerList.map(Players=()=>{
                        Players
                    })
                }
            </div>
        </Fragment>
    )
}
export default Players;