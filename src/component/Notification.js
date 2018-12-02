import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./notification.css";

class Notification extends React.Component {
  static propTypes = {
    duration: PropTypes.number,
    expand: PropTypes.bool,
    tip: PropTypes.string
  };

  static defaultProps = {
    duration: 3,
    expand: false,
    tip: ""
  };

  componentDidMount() {
    let div = document.getElementById("notification-root");

    if (div) {
      this.timer = setTimeout(() => {
        ReactDOM.unmountComponentAtNode(div);
      }, this.props.duration * 1000);
    }
  }

  closeNotification = () => {
    let div = document.getElementById("notification-root");

    if (div) {
      this.timer && clearTimeout(this.timer);
      ReactDOM.unmountComponentAtNode(div);
    }
  };

  handleNotice = () => {
    let noticeContainer = document.getElementById("notice-container");

    noticeContainer.childNodes.forEach(item => {
      if (item.className == "hide") {
        item.className = "show";
      } else {
        item.className = "hide";
      }
    });
  };

  render() {
    return (
      <div className={`notification-container`}>
        <div className={`notification-notice`}>
          <div className={"notification-notice-tip"}>{this.props.tip}</div>
          {this.props.expand && (
            <div
              className={"notification-notice-expand"}
              onClick={this.closeNotification}
            />
          )}
        </div>

        <ul className={`notice-container`} id={`notice-container`}>
          <li className={`hide`}>item1</li>
          <li className={`hide`}>item2</li>
          <li className={`hide`}>item3</li>
        </ul>
      </div>
    );
  }
}

Notification.show = function(notification) {
  let div = document.getElementById("notification-root");
  if (!div) {
    div = document.createElement("div");
    div.setAttribute("id", "notification-root");
    document.body.appendChild(div);
  }

  ReactDOM.render(notification, div);
};

export default Notification;
