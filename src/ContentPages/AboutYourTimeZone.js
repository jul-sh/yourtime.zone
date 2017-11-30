import React from "react";
import { setBackgroundAccordingToCurrentVisitorTime } from "./../helperfunctions/setBackground";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";
import ResponsiveBr from "react-responsivebr";

class AboutYourTimeZone extends React.Component {
  render() {
    setBackgroundAccordingToCurrentVisitorTime();
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
          </span>
        </div>
        <Link to="/new" className="btn-class bigbutton">
          Create an event
        </Link>
      </span>
    );
  }
}

export default AboutYourTimeZone;
