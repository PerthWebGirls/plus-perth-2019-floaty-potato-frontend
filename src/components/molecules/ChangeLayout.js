import React from "react";
import ListView from "../atoms/ListView";
import GridView from "../atoms/GridView";
import SortBy from "../atoms/SortBy";
import "./ChangeLayout.css"

const ChangeLayout = () => {
  return (
    <div className="changeDisplay">
      <ListView />
      <GridView />
      <SortBy />
    </div>
  );
};

export default ChangeLayout;