import React, { useState } from "react";

function TextForm(props) {

  const handleClick = () => {
    let newText =text.toUpperCase();
    setText(newText);
    console.log("Uppercase was clicked.." + text);
  };
  const handleClickClear = () => {
    let newText ='';
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("Handle Onchange..");
    setText(event.target.value);
  };
  // setText("newtext value")

  const [text, setText] = useState("Enter text here123");
  return (
    <>
      <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>
          {props.heading}
        </h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==='dark'?'gray':'light', color:props.mode==='dark'?'white':'light'}}
        ></textarea>
        <br />
        <button className="btn btn-primary" onClick={handleClick}>
        Convert to uppercase
        </button>  {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
        <button className="btn btn-primary" onClick={handleClickClear}>
        Clear
        </button>
      </div>
      <div className="my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summery</h1>
        <p>{text.split(" ").length} words and charechter is:- {text.length}</p>
      </div>
      
    </>
  );
}

export default TextForm;
