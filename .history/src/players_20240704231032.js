import React, { Fragment, useEffect, useState } from "react";

const Players=()=>{
    const [PlayerList,setPlayerList]=useState(['mim','mehedi']); 

    return (
        <Fragment>
            <div className=" min-h-96">
                {
                    PlayerList.map((Players)=>(
                        <div></div>
                    ))
                }
            </div>
                <div>HELLo</div>
        </Fragment>
    )
}
export default Players;