import React from "react";
import ReactDOM from "react-dom";
import SetBackgroundAccordingToCurrentVisitorTime from "./helperfunctions/SetBackgroundAccordingToCurrentVisitorTime";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AboutYourTimeZone extends React.Component {
  render() {
    SetBackgroundAccordingToCurrentVisitorTime();
    return (
      <span className="introdescription">
        <h1 className="greeting">
          Time zones are hard.<br className="optionalbr" />I'll take care of
          them for you.
        </h1>
        <div className="bodytext">
          <span>
            yourtime.zone automatically translates the time of an event into the
            visitor's local time. Great for organizing global events, such as
            webinars or live-streams.{" "}
            <span id="credit">
              Built by <a href="https://juliette.sh">Juliette Pretot</a>
            </span>
          </span>
          <ul className="introbulletpoints">
            <li>Works with daylight saving time</li>
            <li>Free to use</li>
            <li>
              <Link to="/54g0/Google%20Pixel%20Event">Live example</Link>
            </li>
          </ul>
        </div>
        <Link to="/new" className="btn-class bigbutton">
          Create an event
        </Link>
      </span>
    );
  }
}

export default AboutYourTimeZone;
