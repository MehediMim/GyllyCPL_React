import React, { Fragment, useState } from "react";
import "./App.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from "./HomeImages/GCPL.png"
const Navbar = () => {
    const [Showall, setShowall] = useState(false);

    const handleShowall = () => {
        setShowall(!Showall);
    }
    return (
        <Fragment>
            <div className="flex bg-slate-900 p-3 z-50 fixed  w-full">
                <div className="w-1/3 text-white hover:text-amber-400 font-Saira text-sm md:text-xl p-2 mx-2 flex items-center">
                    <div className="w-1/4 md:w-1/12 mx-1"><Link to="/"><img src={Logo} alt="logo"></img></Link></div>
                    <div><Link to="/">GULLY CPL</Link></div>
                </div>
                <div className="md:hidden fixed right-5 top-5" onClick={handleShowall}>
                    <FontAwesomeIcon icon={faBars} size="sm" style={{ color: "#ffffff", }} />
                </div>
                
                {/* LAPTOP */}
                 <div className="w-2/3 text-white hidden mx-2 md:flex flex-row items-center " >
                    <div className="basis-1/5 font-Saira  text-sm md:text-xl group justify-center p-2 flex">
                        <div className="mx-1"><button className="hover:text-amber-400" >Seasons</button></div>
                        <div className="mx-1"><FontAwesomeIcon icon={faCaretDown} size="lg" /></div>
                        <div className=" basis-1/5 absolute top-12 border-solid border-white  font-Saira text-sm md:text-xl z-10 group-hover:block hidden" onClick={handleShowall}>
                            <uL>
                                {/* <li><div className="bg-slate-900 p-2 block hover:text-amber-400"><Link to="/season4">Season 1</Link></div></li> */}
                                {/* <li><div className="bg-slate-900 p-2 block hover:text-amber-400"><Link to="/season4">Season 2</Link></div></li> */}
                                <li><div className="bg-slate-900 p-2 block hover:text-amber-400"><Link to="/season4">Season 3</Link></div></li>
                                <li><div className="bg-slate-900 p-2 block hover:text-amber-400"><Link to="/season4">Season 4</Link></div></li>
                            </uL>
                        </div>
                    </div>
                    <div className=" basis-1/5 font-Saira text-sm hover:text-amber-400 md:text-xl justify-center p-2 flex" onClick={handleShowall}><Link to="/team">Teams</Link></div>
                    <div className=" basis-1/5 font-Saira text-sm hover:text-amber-400 md:text-xl justify-center p-2 flex" onClick={handleShowall}><Link to="/players">Players</Link></div>
                    <div className=" basis-1/5 font-Saira text-sm hover:text-amber-400 md:text-xl justify-center p-2 flex" onClick={handleShowall}><Link to="/photos">Photos</Link></div>
                    <div className=" basis-1/5 font-Saira text-sm hover:text-amber-400 md:text-xl justify-center p-2 flex" onClick={handleShowall}><Link to="/team">Videos</Link></div>
                </div>
                
                {/* MOBILE */}
                {Showall && <div className="w-2/3 text-white md:hidden mx-2 md:flex flex-row items-center " >
                    <div className="basis-1/5 font-Saira  text-sm md:text-xl group justify-center p-2 flex">
                        <div className="mx-1"><button className="hover:text-amber-400" >Seasons</button></div>
                        <div className="mx-1"><FontAwesomeIcon icon={faCaretDown} size="lg" /></div>
                        <div className=" basis-1/5 absolute top-12 border-solid border-white  font-Saira text-sm md:text-xl z-10 group-hover:block hidden" onClick={handleShowall}>
                            <uL>
                                {/* <li><div className="bg-slate-900 p-2 block hover:text-amber-400"><Link to="/season4">Season 1</Link></div></li> */}
                                {/* <li><div className="bg-slate-900 p-2 block hover:text-amber-400"><Link to="/season4">Season 2</Link></div></li> */}
                                <li><div className="bg-slate-900 p-2 block hover:text-amber-400"><Link to="/season4">Season 3</Link></div></li>
                                <li><div className="bg-slate-900 p-2 block hover:text-amber-400"><Link to="/season4">Season 4</Link></div></li>
                            </uL>
                        </div>
                    </div>
                    <div className=" basis-1/5 font-Saira text-sm hover:text-amber-400 md:text-xl justify-center p-2 flex" onClick={handleShowall}><Link to="/team">Teams</Link></div>
                    <div className=" basis-1/5 font-Saira text-sm hover:text-amber-400 md:text-xl justify-center p-2 flex" onClick={handleShowall}><Link to="/players">Players</Link></div>
                    <div className=" basis-1/5 font-Saira text-sm hover:text-amber-400 md:text-xl justify-center p-2 flex" onClick={handleShowall}><Link to="/photos">Photos</Link></div>
                    <div className=" basis-1/5 font-Saira text-sm hover:text-amber-400 md:text-xl justify-center p-2 flex" onClick={handleShowall}><Link to="/team">Videos</Link></div>
                </div>
                }
            </div>



        </Fragment>
    )
}

export default Navbar;