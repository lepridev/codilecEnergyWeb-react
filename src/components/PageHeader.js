import React from "react";
import "./PageHeader.css";

const PageHeader = ({ titre, page }) => {
  return (
    <div className={page + "-header"}>
      <h1>{titre}</h1>
    </div>
  );
};

export default PageHeader;
