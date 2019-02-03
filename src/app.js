const appRoot = document.getElementById('app');
const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};

// const showList = () => {
//    return (
//      <ol>
//       {app.options.forEach(function(option){
//         return <li>"hello"</li>;
//       })}
//      </ol>
//    )
// };

const onFormSubmit = (e) => {
  e.preventDefault();
  console.log(app);
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    renderApp();
    e.target.elements.option.value = "";
  }
};

const showList = () => {
  return (
    <ol>
      {app.options.map((option, i) => <li key={i}>{option}</li>)}
    </ol>
  );
}

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{(app.options && app.options.length > 0)? "Here are your options" : "No options"}</p>
      {app.options.length > 0 && showList()}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();


// let count = 0;

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






