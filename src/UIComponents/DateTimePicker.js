import React from "react";
import NameUserTimezone from "./helperfunctions/NameUserTimezone";
import ComboDatePicker from "./helperfunctions/combodate";
import Timepicker from "./helperfunctions/timepicker";

class DateTimePicker extends React.Component {
  constructor(props) {
    super(props);
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
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <ComboDatePicker
          minDate="2017-06-01"
          maxDate="2030-12-31"
          date={new Date()}
          onChange={function(picker, date) {
            window.combodatecurrentstate = date;
          }}
        />
        <Timepicker style={timepickerstyles} />
      </div>
    );
  }
}
export default DateTimePicker;
