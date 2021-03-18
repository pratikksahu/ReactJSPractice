import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";


class NameForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: "" , clickedTimes : 0 };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    this.setState(prevState => {
      return {clickedTimes: prevState.clickedTimes + 1}
   });
  }
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value +this.state.clickedTimes );
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function DummyList() {
  return (
    <ul>
      <li>Point 1</li>
      <li>Point 2</li>
    </ul>
  );
}

ReactDOM.render(<h1>Hello world</h1>, document.getElementById("root"));

ReactDOM.render(<DummyList />, document.getElementById("hemant"));

ReactDOM.render(<NameForm />, document.getElementById("classT"));

ReactDOM.render(
  <div>
    <h1>Pratik</h1>
    <h1>Age : 20</h1>
    <h1>BIT</h1>
  </div>,
  document.getElementById("about")
);

// ReactDOM.render(
//   <ul>
//     <li>Point 1</li>
//     <li>Point 2</li>
//   </ul>,
//   document.getElementById("hemant")
// );

//ReactDOM.render(<h1>Hello world</h1>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
