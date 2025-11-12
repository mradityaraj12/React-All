import React from "react";
import ReactDom from "react-dom/client";

const h1 = React.createElement('h1' , {id:"Heading "}, "Heading Tag-1");


const root = ReactDom.createElement(document.getElementById("Adit"));

root.render(h1);