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
                    <div className="text-white text-2xl">MD MEHEDI HASAN MIM</div>
                </div>
                <div className="flex my-1">
                    <div><FontAwesomeIcon icon={faGithub} size="lg" style={{color: "#ededed",}} /></div>
                    <div className="mx-5 text-xl font-Titillium text-slate-400">Github</div>
                </div>
                <div className="flex my-1">
                    <div><FontAwesomeIcon icon={faGithub} size="lg" style={{color: "#ededed",}} /></div>
                    <div className="mx-5 text-xl font-Titillium text-slate-400">Github</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;