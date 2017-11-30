import moment from "moment-timezone";
import "../styles/backgroundgradient.css";

function setBackgroundAccordingToCurrentVisitorTime() {
  var now = moment();
  setBackgroundAccordingToTime(now);
}

function setBackgroundAccordingToTime(eventUnixTime) {
  var hour = moment(eventUnixTime).format("H");
  var HourClass = "t" + hour.toString() + " gradient";
  //only update class if the value has changed
  if (document.getElementById("background").className !== HourClass) {
    document.getElementById("background").className = HourClass;
  }
}

export {
  setBackgroundAccordingToCurrentVisitorTime,
  setBackgroundAccordingToTime
};
