import React, { Fragment, useState } from "react";
import N1 from "./HomeImages/News1.webp"
import N2 from "./HomeImages/N2.webp"
import N3 from "./HomeImages/N3.webp"
import FullNews from "./fullNews";
const ALLNews=[
    [N1,"NM69 Upset by Shotgun in Controversial Match at GCPL4","In a surprising turn of events at GCPL Season 4,NbM69, the hot favorite to win the tournament,faced a shocking defeat at the hands of Shotgun in a highly controversial match. Despite their stellarperformance in the group stage, where they secured victories in both of their matches, NoobMaster69`s journey came to an abrupt halt.NoobMaster69 entered the match with high expectations, having dominated their group stage opponents with ease. Their impressive form made them the team to beat, and fans were eagerly anticipating their progression to the later stages of the tournament.The match against Shotgun, however, was marred by controversy from the start. Several contentious decisions by the referees left NoobMaster69's players and supporters in disbelief. Key moments that could have swung the match in their favor were overshadowed by debatable calls, creating an atmosphere of tension and frustration.Despite the challenges, NoobMaster69 fought valiantly, showcasing their skill and determination. However, the controversies seemed to have an impact on their gameplay, leading to a narrow defeat against Shotgun. The final scoreline did not reflect the intensity and effort put in by NoobMaster69, leaving their fans heartbroken.The defeat has sparked discussions and debates among the cricket community, with many calling for a review of the officiating standards in the tournament. NoobMaster69's players, while disappointed, have vowed to come back stronger in the next season, determined to reclaim their title as the favorites.As the tournament progresses, the spotlight now shifts to Shotgun, who will need to prove that their victory was not just a result of controversial decisions but a testament to their capabilities. Meanwhile, NoobMaster69's unexpected exit serves as a reminder of the unpredictable nature of the game and the thin line between victory and defeat.Fans and analysts alike will be closely watching the remaining matches of GCPL Season 4, eager to see how the drama unfolds and whether Shotgun can capitalize on their momentum to go all the way."],
    [N2,"Syndicate Triumphs Over Shotgun to Win GCPL Season 4","In an exhilarating climax to GCPL Season 4, Syndicate emerged victorious, defeating Shotgun in a gripping final match to claim the championship title. The match, held under the bright lights of a packed stadium, lived up to the high expectations of fans and analysts alike.Syndicate, known for their strategic prowess and consistent performances throughout the tournament, faced a formidable opponent in Shotgun, who had made headlines by upsetting the favorites, NoobMaster69, in a controversial semi-final. The stage was set for an intense showdown.The final match began with both teams showcasing their best skills. Shotgun, riding high on their semi-final victory, started strong, putting pressure on Syndicate with aggressive play. However, Syndicates experience and tactical acumen soon came to the fore. Key players delivered stellar performances, turning the tide in their favor.The turning point came midway through the match when Syndicates captain executed a brilliant play, securing crucial points and demoralizing Shotguns defense. Despite a spirited fightback from Shotgun, Syndicate maintained their composure, executing their game plan to perfection.As the final whistle blew, the scoreboard reflected Syndicates dominance, and the stadium erupted in cheers. The victory was a testament to Syndicates hard work, teamwork, and resilience. Their journey to the top was marked by consistency and the ability to perform under pressure, making their triumph well-deserved. Syndicates captain, in the post-match interview, praised the teams effort and dedication, attributing the victory to collective teamwork and strategic execution. The win not only brought glory to the team but also to their passionate fanbase, who had supported them unwaveringly throughout the tournament.Shotgun, despite their loss in the final, earned respect and admiration for their journey and the challenges they overcame, including their controversial but impressive semi-final victory. They vowed to return stronger next season, setting the stage for more thrilling encounters in future tournaments.GCPL Season 4 will be remembered for its intense matches, unexpected twists, and the ultimate triumph of Syndicate. As the champions celebrate their hard-earned victory, fans eagerly await the next season, hopeful for more cricketing drama and excitement."],    
    [N3,"Excitement Builds for Gully CPL Season 5","Cricket fans around the world are eagerly anticipating the start of GCPL Season 5, set to kick off soon. Following the thrilling and controversial events of Season 4, where Syndicate emerged as champions, this season promises even more intense competition and high-octane matches.Teams have been gearing up, with new strategies and player line-ups being finalized. Fans are particularly excited about the return of favorites like NoobMaster69 and Shotgun, who are looking to settle scores and claim the championship.GCPL Season 5 is expected to feature top-tier cricket action, with matches broadcasted live and an array of fan engagement activities planned. Stay tuned for what promises to be another unforgettable season of cricketing excellence."],
    [N3,"Excitement Builds for Gully CPL Season 5","Cricket fans around the world are eagerly anticipating the start of GCPL Season 5, set to kick off soon. Following the thrilling and controversial events of Season 4, where Syndicate emerged as champions, this season promises even more intense competition and high-octane matches.Teams have been gearing up, with new strategies and player line-ups being finalized. Fans are particularly excited about the return of favorites like NoobMaster69 and Shotgun, who are looking to settle scores and claim the championship.GCPL Season 5 is expected to feature top-tier cricket action, with matches broadcasted live and an array of fan engagement activities planned. Stay tuned for what promises to be another unforgettable season of cricketing excellence."],
    [N3,"Excitement Builds for Gully CPL Season 5","Cricket fans around the world are eagerly anticipating the start of GCPL Season 5, set to kick off soon. Following the thrilling and controversial events of Season 4, where Syndicate emerged as champions, this season promises even more intense competition and high-octane matches.Teams have been gearing up, with new strategies and player line-ups being finalized. Fans are particularly excited about the return of favorites like NoobMaster69 and Shotgun, who are looking to settle scores and claim the championship.GCPL Season 5 is expected to feature top-tier cricket action, with matches broadcasted live and an array of fan engagement activities planned. Stay tuned for what promises to be another unforgettable season of cricketing excellence."],
];

const News=()=>{
    const [var4expandNews,setvar4expandNews]=useState();
    const expandNews=(news)=>{
        setvar4expandNews(news);
    }
    return (
        <div className="bg-slate-200 pt-20 min-h-screen">
            <div className='text-slate-900 font-Saira text-4xl pl-20 py-20'>
                <div>NEWS</div>
            </div>
            <div className=" flex flex-wrap flex-col md:flex-row items-center justify-start">
                {
                    ALLNews.map((news,index)=>(
                        <div className="w-80 m-1 " onClick={()=>expandNews(news)}>
                            <div className=""><img src={news[0]} alt="news" className="w-80 h-48 object-cover"></img></div>
                            <div className="p-3 bg-gradient-to-t from-black font-body text-2xl relative bottom-20 text-white overflow-hidden">{news[1]}</div>
                        </div>
                    ))
                }
            </div>
            <div>
            {var4expandNews && 
                    <div className="">
                        <FullNews news={var4expandNews}/>
                    </div>
                }
            </div>
            <div>
                
            </div>
        </div>
    )
}
export default News;