import React, { Fragment } from "react";

import Season4Intro from "./Season4Intro";
import Season4LeaderBoard from "./Season4LeaderBoard";
import Season4TeamList from "./Season4TeamList";
import Season4Matches from "./Season4Matches";

const Season = () => {
  return (
    <Fragment>
      <div className="bg-slate-900">
          <Season4Intro/>
          <Season4TeamList/> 
          <Season4LeaderBoard/>
          <div className="bg-slate-200 font-Titillium flex justify-center"><div className="bg-slate-900 text-white w-1/4 pl-5">ALL MATCH STAT</div></div>
      </div>
    </Fragment>
  );
};

export default Season;
