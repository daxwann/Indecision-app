
const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer"
}

const template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const user = {
    name: "Xiaoda",
    age: 31,
    location: "Fremont"
}

function getLocation(location) {
    if (location)
        return location;
    else
        return "Unknown";
}

const templateTwo = (
  <div>
    <h1>{user.name.toUpperCase()}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);