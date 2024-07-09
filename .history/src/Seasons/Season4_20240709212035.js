import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Season4Intro from "./Season4Intro";
import Season4LeaderBoard from "./Season4LeaderBoard";
import Season4TeamList from "./Season4TeamList";
import Season4Matches from "./Season4Matches";

const Season = () => {
  
  return (
    <Fragment>
      <div className="bg-slate-900">
        <Season4Intro />
        <Season4TeamList />
        <Season4LeaderBoard />
        
            <Season4Matches/>
      </div>
    </Fragment>
  );
};

export default Season;
