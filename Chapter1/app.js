// nested element example

/*
- React element is acctually an element it just return an object
 */

const parent = React.createElement("div", { id: "parent" }, 
    React.createElement("div", { id: "Child" }, 
        React.createElement("h1",{},"I am H1 Tag")))

// jsx (transpiled before it reaches the js) -Parcel - Babel

// jsx => Bebal transpile it to React.creatElement => ReactElement - js Object => HTMLELEMENT(render)

const heading = React.createElement("h1",
    { id: "heading" } // attributed
    , 'Hello World'); // children

console.log(heading); // return an object 


//React element
const jsxHeading = (<h1 className="head"> React using jsx</h1>);

console.log(jsxHeading);

// React functional component
// both the below systex are same
const HeadingFunction = () => {
    return <h1>React heading functional component</h1>
}

const HeadingFunction1 = () => (<h1>React heading functional component</h1>)


const root = ReactDom.createRoot(document.getElementById("root"));

// this is how to render react element
// root.render(jsxHeading);

// this is how to render react functional component
root.render(<HeadingFunction />);