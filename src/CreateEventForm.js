import React from "react";
import SetBackgroundAccordingToCurrentVisitorTime from "./helperfunctions/SetBackgroundAccordingToCurrentVisitorTime";
import NameUserTimezone from "./helperfunctions/NameUserTimezone";
import ComboDatePicker from "./helperfunctions/combodate";
import Timepicker from "./helperfunctions/timepicker";
import { EncodeEvent } from "./helperfunctions/EncodeEvent";
import * as Cookies from "js-cookie";
import { BrowserRouter as Redirect } from "react-router-dom";
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
    hourpicked = parseInt(hourpicked, 10);
    minutepicked = parseInt(minutepicked, 10);
    if (ampm === "PM") {
      hourpicked = hourpicked + 12;
    }
    if (hourpicked === 24) {
      hourpicked = 0;
    }
    var EventTime = window.combodatecurrentstate;
    EventTime.setMilliseconds(0);
    EventTime.setSeconds(0);
    EventTime.setMinutes(minutepicked);
    EventTime.setHours(hourpicked);
    var EventName = document.getElementById("Eventname").value;
    //convert to unix seconds time
    var EncodedEventTime = EncodeEvent(EventTime);
    var EventID = EncodedEventTime + EventName;
    Cookies.set("creatorofevent", EventID, { expires: 99 });
    this.setState({ redirectToReferrer: true });
    this.setState({
      redirectURL: "/share/" + EncodedEventTime + "/" + EventName
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
        <h2>When is the event?</h2>
        <p>In your local time zone ({UserTimeZone}). </p>
        <ComboDatePicker
          minDate="2017-06-01"
          maxDate="2030-12-31"
          date={new Date()}
          onChange={function(picker, date) {
            window.combodatecurrentstate = date;
          }}
        />
        <Timepicker style={timepickerstyles} />
        <div style={{ marginTop: 45 }}>
          <h2>What's the name of the event?</h2>
          <input
            type="text"
            value={this.state.value}
            placeholder="Juliette's Webinar"
            id="Eventname"
            name="nameofevent"
          />
        </div>
        <div className="submitbuttondiv" style={{ marginTop: 15 }}>
          <input
            type="submit"
            className="btn-class bigbutton"
            defaultValue="Create Event"
          />
        </div>
      </form>
    );
  }
}
export default CreateEventForm;
