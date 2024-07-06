import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <div className="bg-slate-950 md:flex md:justify-center">
            <div className="md:w-1/2  flex flex-col justify-start m-10 pr-32 md:px-20">
                <div className="text-slate-400 font-Titillium my-5 w-full">
                    <div>organized by</div>
                    <div className="text-white text-2xl">the students of batch19 of RANGPUR ZILLA SCHOOL</div>
                </div>
                <div className="flex my-1">
                    <div><FontAwesomeIcon icon={faGithub} size="lg" style={{ color: "#ededed", }} /></div>
                    <div className="mx-5 text-xl font-Titillium text-slate-400">Github</div>
                </div>
                <div className="flex my-1 items-center">
                    <div><FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: "#ededed", }} /></div>
                    <div className="mx-5 text-xl font-Titillium text-slate-400">Facebook</div>
                </div>
                <div className="flex my-1 items-center">
                    <div><FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: "#ededed", }} /></div>
                    <div className="mx-5 text-xl font-Titillium text-slate-400">Youtube</div>
                </div>
            </div>
            <div className="w-1/2 flex flex-col justify-start m-10">
                <div className="text-slate-400 font-Titillium my-5">
                    <div>developed by</div>
                    <div className="text-white text-2xl">MD MEHEDI HASAN MIM</div>
                </div>
                <div className="flex my-1">
                    <div><FontAwesomeIcon icon={faGithub} size="lg" style={{ color: "#ededed", }} /></div>
                    <div className="mx-5 text-xl font-Titillium text-slate-400">Github</div>
                </div>
                <div className="flex my-1">
                    <div><FontAwesomeIcon icon={faFacebook} size="lg" style={{ color: "#ededed", }} /></div>
                    <div className="mx-5 text-xl font-Titillium text-slate-400">Facebook</div>
                </div>
                <div className="flex my-1">
                    <div><FontAwesomeIcon icon={faYoutube} size="lg" style={{ color: "#ededed", }} /></div>
                    <div className="mx-5 text-xl font-Titillium text-slate-400">Youtube</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;