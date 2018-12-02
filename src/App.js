import React, { Component } from "react";
import "./App.css";

import Notification from "./component/Notification";

class App extends Component {
  testNotification = () => {
    Notification.show(<Notification duration={100000} tip={'注意：今天不加班~'} expand={true}/>);
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.testNotification}>notification测试</button>
      </div>
    );
  }
}

export default App;
