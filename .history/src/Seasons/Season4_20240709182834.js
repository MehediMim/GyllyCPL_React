import React, { Fragment } from "react";

import Season4Intro from "./Season4Intro";
import Season4LeaderBoard from "./Season4LeaderBoard";
import Season4TeamList from "./Season4TeamList";

const Season = () => {
  return (
    <Fragment>
      <div className="bg-slate-900">
          <Season4Intro/>
          <Season4TeamList/> 
          <Season4LeaderBoard/>
      </div>
    </Fragment>
  );
};

export default Season;
