import React, { useState } from "react";
const BoxShadow = () => {
  const [horiz, setHoriz] = useState("14");
  const [vert, setVert] = useState("14");
  const [blur, setBlur] = useState("28");
  const [spread, setSpread] = useState("-13");
  const [bkGroundColor, setBkGroundColor] = useState("");
  const [shadowColor, setShadowColor] = useState("#585856");
  const [boxColor, setBoxColor] = useState("#0075ff");

  const horizHandler = (event) => {
    const val = event.target.value;
    setHoriz(val);
  };
  const vertHandler = (event) => {
    const val = event.target.value;
    setVert(val);
  };
  const blurHandler = (event) => {
    const val = event.target.value;
    setBlur(val);
  };
  const spreadHandler = (event) => {
    const val = event.target.value;
    setSpread(val);
  };
  const bkgroundClrHandler = (event) => {
    const val = event.target.value;
    setBkGroundColor(val);
  };
  const shadowClrHandler = (event) => {
    const val = event.target.value;
    console.log(val);
    setShadowColor(val);
  };
  const BoxClrHandler = (event) => {
    const val = event.target.value;
    setBoxColor(val);
  };

  return (
    <div className="container">
      <div className="wraper">
        <div className="left">
          <div className="range">
            <div className="label">
              <label htmlFor="horiz">Horizontal Length</label>
              <span>{horiz}px</span>
            </div>
            <input
              type="range"
              value={horiz}
              id="horiz"
              min="-200"
              max="200"
              onChange={horizHandler}
            />
          </div>
          <div className="range">
            <div className="label">
              <label htmlFor="vert">Vertical Length</label>{" "}
              <span>{vert}px</span>
            </div>

            <input
              type="range"
              value={vert}
              id="vert"
              min="-200"
              max="200"
              onChange={vertHandler}
            />
          </div>
          <hr></hr>
     
          <div className="range">
            <div className="label">
              <label htmlFor="blur">Blur Radius</label>
              <span>{blur}px</span>
            </div>
            <input
              type="range"
              value={blur}
              id="blur"
              min="-200"
              max="200"
              onChange={blurHandler}
            />
          </div>
          <div className="range">
            <div className="label">
              <label htmlFor="spread">Spread Radius</label>
              <span>{spread}px</span>
            </div>
            <input
              type="range"
              value={spread}
              id="spread"
              min="-200"
              max="200"
              onChange={spreadHandler}
            />
          </div>
          <hr />

          <div className="colors">
            <div className="color">
              <label>Background Color</label>
              <input type="color" onChange={bkgroundClrHandler} />
            </div>
            <div className="color">
              <label>Shadow Color</label>
              <input type="color" onChange={shadowClrHandler} />
            </div>
            <div className="color">
              <label>Box Color</label>
              <input type="color" onChange={BoxClrHandler} />
            </div>
          </div>
        </div>
        <div
          className="middle"
          style={{ background: `${bkGroundColor}`, padding: "4rem 2rem" }}
        >
          <div
            className="box"
            style={{
              boxShadow: `${horiz}px ${vert}px ${blur}px ${spread}px ${shadowColor}`,
              background: `${boxColor}`,
            }}
          ></div>
        </div>
        <div className="right">
          <textarea
            cols="50"
            rows="4"
            value={`box-shadow: ${horiz}px ${vert}px ${blur}px ${spread}px ${shadowColor}; \n-moz-box-shadow:  ${horiz}px ${vert}px ${blur}px ${spread}px ${shadowColor}; \n-webkit-box-shadow:  ${horiz}px ${vert}px ${blur}px ${spread}px ${shadowColor};
        `}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default BoxShadow;
