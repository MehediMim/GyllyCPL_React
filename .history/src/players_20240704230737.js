import React, { Fragment, useEffect } from "react";

const Players=()=>{
    const [PlayerList,setPlayerList]=useEffect([]); 

    return (
        <Fragment>
            <div className="bg-slate-600">
                {
                    PlayerList.map((Players)=>(
                        {Players}
                    ))
                }
            </div>
        </Fragment>
    )
}
export default Players;