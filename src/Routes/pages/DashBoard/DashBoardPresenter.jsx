import React from "react";
import "../../../css/main.css";

const DashBoardPresenter = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-title">
        <h2>Dash Board</h2>
      </div>
      <div className="dashboard-content-container">
        <div className="summary-container">
          {/* <h2>Summary</h2> */}
          <div className="summary-content"></div>
        </div>
        <div className="list-container"></div>
        <div className="list-container">
          <div className="event-list-container">
            <h2>Event List</h2>
            <div className="chart"></div>
          </div>
          <div className="patrol-graph-container">
            <h2>Number Of Crimes By Type</h2>
            <div className="chart"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPresenter;
