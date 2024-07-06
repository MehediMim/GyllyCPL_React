import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
const Footer=()=>{
    return(
        <div className="bg-slate-950 flex justify-center">
            <div className="w-1/2">

            </div>
            <div className="w-1/2 flex flex-col justify-start m-10">
                <div className="text-slate-400 font-Titillium my-5">
                    <div>developed by</div>
                    <div className="text-white">MD MEHEDI HASAN MIM</div>
                </div>
                <div>
                    <div><FontAwesomeIcon icon={faGithub} size="lg" /></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;