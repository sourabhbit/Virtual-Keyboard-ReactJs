import { Component } from "react";
import Keyboard from "react-virtual-keyboard";
import "./App.css";

export class App extends Component {
  state = {
    input: "",
    customLayout: {
      normal: [
        "` 1 2 3 4 5 6 7 8 9 0 - = {del} {b}",
        "{t} q w e r t y u i o p [ ] ",
        "{lock} a s d f g h j k l ; ' \u005c {e}",
        "{shift} z x c v b n m , . / {shift}",
        "{accept} {toggle} {space} {sp:#} {clear} {left} {right}",
      ],
      shift: [
        "~ ! @ # $ % ^ & * ( ) - = {del} {b}",
        "{t} Q W E R T Y U I O P { } ",
        "{lock} A S D F G H J K L : \u0022 |  {e}",
        "{shift} Z X C V B N M < > ? {shift}",
        "{toggle} {space} ",
      ],
    },
  };

  onInputChanged = (data) => {
    this.setState({ input: data });
  };

  onInputSubmitted = (data) => {
    console.log("Input submitted:", data);
    alert("Your Typed Data " + data + " is submitted");
  };

  render() {
    return (
      <div className="App">
        <div className="keyboard_style">
          {this.state.input.length > 0 && (
            <div>
              <h1>Your typed input is - {this.state.input}</h1>
            </div>
          )}

          <Keyboard
            value={this.state.input}
            name="keyboard"
            placeholder="Start Typing.....!"
            options={{
              type: "input",
              layout: "custom",
              customLayout: this.state.customLayout,
              alwaysOpen: true,
              usePreview: false,
              useWheel: false,
              stickyShift: false,
              appendLocally: true,
              color: "light",
              updateOnChange: true,
              initialFocus: true,
              display: {
                accept: "Submit",
              },
            }}
            onChange={this.onInputChanged}
            onAccepted={this.onInputSubmitted}
          />
        </div>
      </div>
    );
  }
}

export default App;
