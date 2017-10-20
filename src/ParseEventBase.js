import React from "react";
import moment from "moment-timezone";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";
import { DecodeEventtoUnixTime } from "./helperfunctions/EncodeEvent";
import deparam from "./helperfunctions/deparam";
import SetBackgroundcolorAccordingToTime from "./helperfunctions/SetBackgroundcolorAccordingToTime";
import SetBackgroundAccordingToCurrentVisitorTime from "./helperfunctions/SetBackgroundAccordingToCurrentVisitorTime";
import NameUserTimezone from "./helperfunctions/NameUserTimezone";

class ParseEventBase extends React.Component {
  render() {
    var EventName = "";
    if (this.props.match.params.name) {
      EventName = '"' + this.props.match.params.name + '"';
    }

    var EventUnixMinutesB36 = "";
    if (this.props.match.params.time) {
      EventUnixMinutesB36 = this.props.match.params.time;
    } else {
      SetBackgroundAccordingToCurrentVisitorTime();
      return (
        <span>
          Looks like this link is broken. Please{" "}
          <Link to="/new">Create a new event</Link>
        </span>
      );
    }

    var EventUnixTime = DecodeEventtoUnixTime(EventUnixMinutesB36);

    const UserTimeZone = NameUserTimezone();

    if (EventName === "") {
      console.log("It appears that there is not a valid name");
      EventName = "the event";
    }

    //If the old syntax (1.0) is present, override EventName + EventUnixTime to render that one. It looks like: https://yourtime.zone/p/?timeUTC=2017-10-12T22%3A00%3A00.000Z&Title=old%20syntax?end
    if (window.location.search.substring(0, 8) === "?timeUTC") {
      //get serialized string from URL
      var currenturl = window.location.href;
      var OldEventSerialized = currenturl.substring(
        currenturl.lastIndexOf("?timeUTC") + 1,
        currenturl.lastIndexOf("?end")
      );
      console.log(OldEventSerialized);

      var OldEvent = deparam(OldEventSerialized);
      console.log("The Event is " + OldEvent);
      console.log("The time of the event is " + OldEvent.timeUTC);
      console.log("The name of the event is " + OldEvent.name);

      EventUnixTime = moment(OldEvent.timeUTC).unix();
      EventName = OldEvent.name;
    }

    const EventTime = moment.unix(EventUnixTime);
    const EventTimeInLocalTime = EventTime.tz(UserTimeZone).format();
    const EventTimeInLocalTimeInHumanLanguage = moment(
      EventTimeInLocalTime
    ).calendar(null, {
      sameDay: "[today at] h:mm A",
      nextDay: "[tomorrow at] h:mm A",
      nextWeek: "dddd [at] h:mm A",
      withinthenext200Days: "MMMM Do [at] h:mm A",
      lastDay: "[yesterday at] h:mm A",
      lastWeek: "[last] dddd [at] h:mm A",
      withinthelast200Days: "MMMM Do [at] h:mm A",
      sameElse: "MMMM Do YYYY [at] h:mm A"
    });
    const now = moment();
    var Verb = "starts";
    if (moment(EventTime).isBefore(now)) {
      Verb = "started";
    }
    var OptionalPreposition = "";
    if (
      EventTime.diff(now, "days", true) > 2 ||
      EventTime.diff(now, "days", true) < -6
    ) {
      OptionalPreposition = " on";
    }
    var hours = moment(EventTimeInLocalTime).format("H");
    SetBackgroundcolorAccordingToTime(hours);
    return (
      <span>
        In your timezone ({UserTimeZone}),<br className="brmax800px" />
        {EventName} {Verb}
        {OptionalPreposition}
        <br />
        <h1 id="localtime">{EventTimeInLocalTimeInHumanLanguage}</h1>
      </span>
    );
  }
}

export default ParseEventBase;
