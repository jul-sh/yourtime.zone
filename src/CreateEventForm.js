import React from "react";
import ReactDOM from "react-dom";
import moment from "moment-timezone";
import SetBackgroundAccordingToCurrentVisitorTime from "./helperfunctions/SetBackgroundAccordingToCurrentVisitorTime";
import NameUserTimezone from "./helperfunctions/NameUserTimezone";
import ComboDatePicker from "./helperfunctions/combodate";
import Timepicker from "./helperfunctions/timepicker";
import * as Cookies from "js-cookie";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
/*  To do: Clean up the implementation of the time + date picker, as it is quite messy */
const timepickerstyles = {
  margin: "0 0 0 20px"
};
class CreateEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      redirectURL: "/share"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    var timepickerhour = document.getElementById("timepickerhour");
    var timepickerminute = document.getElementById("timepickerminute");
    var timepickerampm = document.getElementById("timepickerampm");
    var hourpicked = timepickerhour.options[timepickerhour.selectedIndex].value;
    var minutepicked =
      timepickerminute.options[timepickerminute.selectedIndex].value;
    var ampm = timepickerampm.options[timepickerampm.selectedIndex].value;
    hourpicked = parseInt(hourpicked);
    minutepicked = parseInt(minutepicked);
    if (ampm == "PM") {
      hourpicked = hourpicked + 12;
    }
    if (hourpicked == 24) {
      hourpicked = 0;
    }
    var EventTime = window.combodatecurrentstate;
    EventTime.setMilliseconds(0);
    EventTime.setSeconds(0);
    EventTime.setMinutes(minutepicked);
    EventTime.setHours(hourpicked);
    console.log(EventTime);
    var EventName = document.getElementById("Eventname").value;
    console.log(EventName);
    //convert to unix seconds time
    var EventUnixTime = moment(EventTime).unix();
    //strip the last two zeroes to make it unix minutes
    var EventUnixMinutes = Math.floor(EventUnixTime / 1e2);
    //convert to base36 for shortening
    var EventUnixMinutesB36 = EventUnixMinutes.toString(36);
    var EventID = EventUnixMinutesB36 + EventName;
    Cookies.set("creatorofevent", EventID, { expires: 99 });
    this.setState({ redirectToReferrer: true });
    this.setState({
      redirectURL: "/share/" + EventUnixMinutesB36 + "/" + EventName
    });
    event.preventDefault();
  }
  componentDidMount() {}
  render() {
    SetBackgroundAccordingToCurrentVisitorTime();
    const UserTimeZone = NameUserTimezone();
    if (this.state.redirectToReferrer) {
      return <Redirect to={this.state.redirectURL} push />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <h2>When is the event?</h2>
          <p>In your local time zone ({UserTimeZone}). </p>
          <ComboDatePicker
            minDate="2016-01-01"
            maxDate="2030-12-31"
            date={new Date()}
            onChange={function(picker, date) {
              window.combodatecurrentstate = date;
            }}
          />
          <Timepicker style={timepickerstyles} />
          <br />
          <br />
          <h2>What's the name of the event?</h2>
          <input
            type="text"
            value={this.state.value}
            type="text"
            placeholder="Juliette's Webinar"
            id="Eventname"
            name="nameofevent"
          />
          <br />
          <br />
          <br />
        </label>
        <input
          type="submit"
          className="btn-class"
          defaultValue="Create Event"
        />
      </form>
    );
  }
}
export default CreateEventForm;
