import React from "react";
import ProviderItem from "../atoms/ProviderItem";
// import { Link } from "react-router-dom";
import "./ProviderBoard.css"

let providers = [
  { name: "Stan", url: "" },
  { name: "Prime Video", url: "" },
  { name: "Netflix", url: "" },
  { name: "Foxtel Now", url: "" },
  { name: "Disney+", url: "" }
];
const ProviderBoard = (props) => {
  {
    return (
      <div>
        <ul className="ProviderBoard">
          {providers.map((item, index) => (
            <ProviderItem key={index} name={item.name} url={item.url} />
          ))}
        </ul>
      </div>
    );
  }
};

export default ProviderBoard;
