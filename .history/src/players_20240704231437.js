import React, { Fragment, useEffect, useState } from "react";

const Players=()=>{
    const [PlayerList,setPlayerList]=useState([]); 

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