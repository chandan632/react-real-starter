import "./app.css";

// import Icon from "./img/awesome_webpack_branding.png";
// // var add = function (a, b) {
// //   return a + b;
// // };

// // console.log(add(2, 15));

// // const arrowFunc = (name) => name;
// // console.log(arrowFunc("chandan"));

// // const user = {
// //   id: 1,
// //   name: "Bob",
// // };

// // const bob = {
// //   ...user,
// //   age: 21,
// // };

// // console.log(bob);
// const element = document.createElement("div");
// // const myIcon = new Image();
// // myIcon.src = Icon;
// // myIcon.width = 200;

// // element.appendChild(myIcon);
// const element2 = document.createElement("h1");
// element2.innerHTML = "H@";
// element.innerHTML = "Hello";
// element.classList.add("hello");
// element.appendChild(element2);
// const element3 = document.createElement("h1");
// element3.innerHTML = "H@";
// element.appendChild(element3);
// const element4 = document.createElement("h1");
// element4.innerHTML = "H";
// element.appendChild(element4);
// document.body.appendChild(element);

// react
import React, { Component } from "react";
import ReactDOM from "react-dom";
import MyClassComponent from "./MyComponent";

const component = <h1>Hello World from react app!</h1>;

class App extends Component {
  render() {
    return (
      <div>
        I'm from class component
        <MyClassComponent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
