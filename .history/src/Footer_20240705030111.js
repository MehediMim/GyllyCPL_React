import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faGithub } from '@fortawesome/free-solid-svg-icons'
const Footer=()=>{
    return(
        <div className="bg-slate-950 flex justify-center">
            <div className="w-1/2">

            </div>
            <div className="w-1/2 flex justify-start m-10">
                <div className="text-slate-400 font-Titillium">
                    <div>developed by</div>
                    <div className="text-white">MD MEHEDI HASAN MIM</div>
                </div>
                <div>
                    <div><FontAwesomeIcon icon={faGithub} style={{color: "#e3e3e3",}} /></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;