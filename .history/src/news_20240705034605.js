import React from "react";
import N1 from "./HomeImages/News1.webp"
const ALLNews=[
    [N1,"NM69 Upset by Shotgun in Controversial Match at GCPL4","In a surprising turn of events at GCPL Season 4,NbM69, the hot favorite to win the tournament,faced a shocking defeat at the hands of Shotgun in a highly controversial match. Despite their stellarperformance in the group stage, where they secured victories in both of their matches, NoobMaster69`s journey came to an abrupt halt.NoobMaster69 entered the match with high expectations, having dominated their group stage opponents with ease. Their impressive form made them the team to beat, and fans were eagerly anticipating their progression to the later stages of the tournament.The match against Shotgun, however, was marred by controversy from the start. Several contentious decisions by the referees left NoobMaster69's players and supporters in disbelief. Key moments that could have swung the match in their favor were overshadowed by debatable calls, creating an atmosphere of tension and frustration.Despite the challenges, NoobMaster69 fought valiantly, showcasing their skill and determination. However, the controversies seemed to have an impact on their gameplay, leading to a narrow defeat against Shotgun. The final scoreline did not reflect the intensity and effort put in by NoobMaster69, leaving their fans heartbroken.The defeat has sparked discussions and debates among the cricket community, with many calling for a review of the officiating standards in the tournament. NoobMaster69's players, while disappointed, have vowed to come back stronger in the next season, determined to reclaim their title as the favorites.As the tournament progresses, the spotlight now shifts to Shotgun, who will need to prove that their victory was not just a result of controversial decisions but a testament to their capabilities. Meanwhile, NoobMaster69's unexpected exit serves as a reminder of the unpredictable nature of the game and the thin line between victory and defeat.Fans and analysts alike will be closely watching the remaining matches of GCPL Season 4, eager to see how the drama unfolds and whether Shotgun can capitalize on their momentum to go all the way."],
    ];
const News=()=>{
    return (
        <div className="bg-slate-200 px-10">
            <div className="font-body text-4xl flex justify-center py-10">NEWS</div>
            <div className="flex">
                {
                    ALLNews.map((news,index)=>(
                        <div className="w-80">
                            <div className=""><img src={news[0]} alt="news" className="w-80 h-48 object-cover"></img></div>
                            <div className="p-3 bg-gradient-to-t from-black font-body text-2xl relative bottom-20 text-white overflow-hidden">{news[1]}</div>
                        </div>
                    ))
                }
            </div>
            <div>
                {/* //EXPAND */}
            </div>
        </div>
    )
}
export default News;