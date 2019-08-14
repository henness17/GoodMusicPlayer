import React from "react";
import SongGrid from "./SongGrid";

class SongGridComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    const gridContainerStyle = {
      display: "grid",
      gridTemplateColumns: "auto auto auto",
      padding: "50px"
    }
    const gridItemStyle = {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      border: "1px solid rgba(0, 0, 0, 0.8)",
      padding: "50px",
      fontSize: "30px",
      textAlign: "center"
    }
    const grid = (
      <div style={gridContainerStyle}>
        <div style={gridItemStyle}>1</div>
        <div style={gridItemStyle}>2</div>
        <div style={gridItemStyle}>3</div>
        <div style={gridItemStyle}>4</div>
        <div style={gridItemStyle}>5</div>
        <div style={gridItemStyle}>6</div>
      </div>
    );
    return (
      <div>
        {grid}
      </div>
    );
  }
}

export default SongGridComponent;
