/*
    Hot Module Reload
    File Watcher Algorithms- c++


*/

import React from "react";
import ReactDOM from "react-dom/client";


//creating h1 tab
const heading =React.createElement("h1",
{
    id : "title"
}
,"Making of Organic Products Bath Powder");
console.log("Nikki");
console.log(heading);

const heading1 = React.createElement("h2",
    {
        id : "subprods"
    }
    , "Herbs to be used in this Powder"
);

const container = React.createElement(
    "div",
    {
        id : "container",
        hello :"Nikitha",
    },
    [heading,heading1]
);
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element to 
root.render(container);