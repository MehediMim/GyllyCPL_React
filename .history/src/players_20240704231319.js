import React, { Fragment, useEffect, useState } from "react";

const Players=()=>{
    const [PlayerList,setPlayerList]=useState(['mim','mehedi']); 

    return (
        <Fragment>
            <div className="text-black min-h-96">
                {
                    PlayerList.map((Players,index)=>(
                        <div key="index">mim {Players}</div>
                        
                    ))
                }
            </div>
                <div>HELLo</div>
        </Fragment>
    )
}
export default Players;