import React, { useState } from "react";
const BorderRadius = () => {
  const [allCor, setallCorner] = useState("0");
  const [topLeft, setTopLeft] = useState("60");
  const [topRight, setTopRight] = useState("10");
  const [botRight, setBotRight] = useState("60");
  const [botLeft, setBotLeft] = useState("100");
  const [borderSize, setBorderSize] = useState("20");
  const [borderColor, setBorderColor] = useState("#585858");
  const [bkGroundColor, setBkGroundColor] = useState("#0075ff");
  const allCornersHandler = (event) => {
    const range = event.target.value;
    setallCorner(range);
    setTopLeft(range);
    setTopRight(range);
    setBotLeft(range);
    setBotRight(range);
  };
  const topLeftHandler = (event) => {
    const range = event.target.value;
    setTopLeft(range);
  };
  const topRighttHandler = (event) => {
    const range = event.target.value;
    setTopRight(range);
  };
  const botRightHandler = (event) => {
    const range = event.target.value;
    setBotRight(range);
  };
  const botLeftHandler = (event) => {
    const range = event.target.value;
    setBotLeft(range);
  };
  const borderHandler = (event) => {
    const range = event.target.value;
    setBorderSize(range);
  };
  const bkgroundClrHandler = (event) => {
    const clr = event.target.value;
    setBkGroundColor(clr);
  };
  const borderClrHandler = (event) => {
    const clr = event.target.value;
    setBorderColor(clr);
  };

  return (
    <div className="container">
      <div className="wraper">
        <div className="left">
          <div className="range">
            <div className="label">
              <label htmlFor="all">All Corners </label>
              <span>{allCor}%</span>
            </div>
            <input
              type="range"
              value={allCor}
              id="all"
              min="0"
              max="100"
              onChange={allCornersHandler}
            />
          </div>
          <hr />
          <div className="range">
            <div className="label">
              <label htmlFor="topl">Top Left </label> <span>{topLeft}%</span>
            </div>

            <input
              type="range"
              value={topLeft}
              id="topl"
              min="0"
              max="100"
              onChange={topLeftHandler}
            />
          </div>
          <div className="range">
            <div className="label">
              <label htmlFor="topr">Top Right</label>
              <span>{topRight}%</span>
            </div>
            <input
              type="range"
              value={topRight}
              id="topr"
              min="0"
              max="100"
              onChange={topRighttHandler}
            />
          </div>
          <div className="range">
            <div className="label">
              <label htmlFor="bottomr">Bottom Right</label>
              <span>{botRight}%</span>
            </div>
            <input
              type="range"
              value={botRight}
              id="bottomr"
              min="0"
              max="100"
              onChange={botRightHandler}
            />
          </div>
          <div className="range">
            <div className="label">
              <label htmlFor="bottoml">Bottom Left</label>
              <span>{botLeft}%</span>
            </div>
            <input
              type="range"
              value={botLeft}
              id="bottoml"
              min="0"
              max="100"
              onChange={botLeftHandler}
            />
          </div>
          <hr />
          <div className="range">
            <div className="label">
              <label htmlFor="border">Border Size </label>
              <span>{borderSize}px</span>
            </div>
            <input
              type="range"
              value={borderSize}
              id="border"
              min="0"
              max="100"
              onChange={borderHandler}
            />
          </div>
          <hr></hr>
          <div className="colors">
            <div className="color">
              <label>Background Color</label>
              <input type="color" onChange={bkgroundClrHandler} />
            </div>
            <div className="color">
              <label>Border Color</label>
              <input type="color" onChange={borderClrHandler} />
            </div>
          </div>
        </div>
        <div className="middle">
          <div
            className="box"
            style={{
              borderRadius: `${topLeft}% ${topRight}% ${botRight}% ${botLeft}%`,
              border: `${borderSize}px solid ${borderColor}`,
              background: `${bkGroundColor}`,
            }}
          ></div>
        </div>
        <div className="right">
          <textarea
            cols="50"
            rows="5"
            value={`border-radius: ${topLeft}% ${topRight}% ${botRight}% ${botLeft}%\n-moz-border-radius: ${topLeft}% ${topRight}% ${botRight}% ${botLeft}%\n-webkit-border-radius: ${topLeft}% ${topRight}% ${botRight}% ${botLeft}%\nborder: ${borderSize}px solid ${borderColor}; ;`}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default BorderRadius;
