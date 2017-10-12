import React from "react";
import ReactDOM from "react-dom";
import * as Cookies from "js-cookie";
import SkyLight from "react-skylight";

class EmbedEventButton extends React.Component {
  render() {
    //check if visitor is also creator of this event
    var EventName = "";
    if (this.props.match.params.name) {
      EventName = '"' + this.props.match.params.name + '"';
    }

    var EventUnixMinutesB36 = "";
    if (this.props.match.params.time) {
      EventUnixMinutesB36 = this.props.match.params.time;
    }
    var EventID = EventUnixMinutesB36 + EventName;
    var creatorcookie = Cookies.get("creatorofevent");
    var CurrentHost = window.location.host;
    var referrer = document.referrer;

    //if the current path starts with share
    if (this.props.location.pathname.substring(0, 6) == "/share") {
      return (
        <span>
          <a
            href="https://app.mailerlite.com/webforms/submit/q7k9r7"
            target="_blank"
            className="bottomareabutton btn-class"
            id="embedbutton"
          >
            Embed the event
          </a>
        </span>
      );
    }

    //if the visitor is also creator of the event
    if (
      creatorcookie == EventID ||
      referrer.indexOf(CurrentHost + "/share/") >= 0
    ) {
      return (
        <span>
          <a
            href="https://app.mailerlite.com/webforms/submit/q7k9r7"
            target="_blank"
            className="bottomareabutton btn-class"
            id="embedbutton"
          >
            Embed the event
          </a>
        </span>
      );
    }

    return <a className="bottomareabutton btn-class">About yourtime.zone</a>;
  }
}

export default EmbedEventButton;
