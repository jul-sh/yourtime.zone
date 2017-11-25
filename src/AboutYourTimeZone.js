import React from "react";
import SetBackgroundAccordingToCurrentVisitorTime from "./helperfunctions/SetBackgroundAccordingToCurrentVisitorTime";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";
import ResponsiveBr from "react-responsivebr";

class AboutYourTimeZone extends React.Component {
  render() {
    SetBackgroundAccordingToCurrentVisitorTime();
    return (
      <span>
        <h1 className="greeting">
          Time zones are hard.<ResponsiveBr minWidth="340" />I'll take care of
          them for you.
        </h1>
        <div className="bodytext">
          <span>
            yourtime.zone translates the time of an event into the visitor's
            local time. Great for webinars and live-streams.{" "}
            <span id="credit">
              Built by <a href="https://juliette.sh">Juliette Pretot</a>
            </span>
          </span>
          <ul className="introbulletpoints">
            <li>Works with daylight saving time</li>
            <li>
              <Link to="/p/54g0/Google%20Pixel%20Event">Live example</Link>
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
