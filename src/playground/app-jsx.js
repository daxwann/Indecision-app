const appRoot = document.getElementById('app');
const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  console.log(app);
  const option = e.target.elements.option.value.trim();
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
};

const onRemoveAll = (e) => {
  app.options = [];
  renderApp();
};

const onMakeDecision = (e) => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{(app.options && app.options.length > 0)? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
      <button disabled={app.options.length === 0} onClick={onRemoveAll}>Remove All</button>
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