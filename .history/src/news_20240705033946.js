import React from "react";
import N1 from "./HomeImages/News1.webp"
const ALLNews=[
    [N1,"NoobMaster69 Upset by Shotgun in Controversial Match at GCPL Season 4"],
    ];
const News=()=>{
    return (
        <div className="bg-slate-200">
            <div className="font-body text-4xl flex justify-center py-10">NEWS</div>
            <div>
                {
                    ALLNews.map((news,index)=>(
                        <div className="w-80">
                            <div className=""><img src={news[0]} alt="news" className="w-80 h-48 object-cover"></img></div>
                            <div className="bg-gradient-to-t from-black font-body text-2xl relative bottom-16 text-white overflow-hidden">{news[1]}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default News;