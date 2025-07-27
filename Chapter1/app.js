// nested element example

/*
- React element is acctually an element it just return an object
 */

const parent = React.createElement("div", { id: "parent" }, 
    React.createElement("div", { id: "Child" }, 
        React.createElement("h1",{},"I am H1 Tag")))



const heading = React.createElement("h1",
    { id: "heading" } // attributed
    , 'Hello World'); // children

console.log(heading); // return an object 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);