import "../styles/backgroundgradient.css";
import moment from "moment-timezone";

function SetBackgroundcolorAccordingToTime(eventUnixTime) {
  var hour = moment(eventUnixTime).format("H");
  var HourClass = "t" + hour.toString() + " gradient";
  //only update class if the value has changed
  if (document.getElementById("background").className !== HourClass) {
    document.getElementById("background").className = HourClass;
  }
}

export default SetBackgroundcolorAccordingToTime;
