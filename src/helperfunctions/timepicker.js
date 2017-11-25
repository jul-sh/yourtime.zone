import React from "react";
import moment from "moment";

class Timepicker extends React.Component {
  constructor(props) {
    super(props);

    var defaulthour = moment()
      .add(1, "h")
      .format("h")
      .toString();
    var defaultampm = moment().format("A");
    var defaultminute = "0";

    this.state = {
      hour: defaulthour,
      minute: defaultminute,
      ampm: defaultampm
    };

    this.handleHourChange = this.handleHourChange.bind(this);
    this.handleMinuteChange = this.handleMinuteChange.bind(this);
    this.handleAMPMChange = this.handleAMPMChange.bind(this);
  }

  handleHourChange(event) {
    this.setState({ hour: event.target.value });
  }

  handleMinuteChange(event) {
    this.setState({ minute: event.target.value });
  }

  handleAMPMChange(event) {
    this.setState({ ampm: event.target.value });
  }

  render() {
    return (
      <span className="timeselector" style={this.props.style}>
        <span>
          <select
            id="timepickerhour"
            value={this.state.hour}
            onChange={this.handleHourChange}
            className="hour"
            style={{ width: "auto" }}
          >
            <option value={1}>01</option>
            <option value={2}>02</option>
            <option value={3}>03</option>
            <option value={4}>04</option>
            <option value={5}>05</option>
            <option value={6}>06</option>
            <option value={7}>07</option>
            <option value={8}>08</option>
            <option value={9}>09</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
          </select>
          <select
            id="timepickerminute"
            value={this.state.minute}
            onChange={this.handleMinuteChange}
            className="minute"
            style={{ width: "auto" }}
          >
            <option value={0}>00</option>
            <option value={5}>05</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
            <option value={30}>30</option>
            <option value={35}>35</option>
            <option value={40}>40</option>
            <option value={45}>45</option>
            <option value={50}>50</option>
            <option value={55}>55</option>
          </select>
          <select
            id="timepickerampm"
            value={this.state.ampm}
            className="ampm"
            style={{ width: "auto" }}
            onChange={this.handleAMPMChange}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </span>
      </span>
    );
  }
}

export default Timepicker;
