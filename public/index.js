
import React from "react";
import ReactDOM from "react-dom";
import style from './index.css'

const Index = () => {
    return <div className={style.title}>Hello  React !
    My name is </div>;
};

ReactDOM.render(<Index />, document.getElementById("root"));