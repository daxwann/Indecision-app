"use strict";

var appRoot = document.getElementById('app');
var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
}; // const showList = () => {
//    return (
//      <ol>
//       {app.options.forEach(function(option){
//         return <li>"hello"</li>;
//       })}
//      </ol>
//    )
// };

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  console.log(app);
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    renderApp();
    e.target.elements.option.value = "";
  }
};

var showList = function showList() {
  return React.createElement("ol", null, app.options.map(function (option, i) {
    return React.createElement("li", {
      key: i
    }, option);
  }));
};

var renderApp = function renderApp() {
  var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subtitle && React.createElement("p", null, app.subtitle), React.createElement("p", null, app.options && app.options.length > 0 ? "Here are your options" : "No options"), app.options.length > 0 && showList(), React.createElement("form", {
    onSubmit: onFormSubmit
  }, React.createElement("input", {
    type: "text",
    name: "option"
  }), React.createElement("button", null, "Add Option")));
  ReactDOM.render(template, appRoot);
};

renderApp(); // let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// }
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// }
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// }
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button className="btn" onClick={addOne}>+1</button>
//       <button className="btn" onClick={minusOne}>-1</button>
//       <button className="btn" onClick={reset}>reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// };
// renderCounterApp();
