import moment from "moment-timezone";
import SetBackgroundcolorAccordingToTime from "./SetBackgroundcolorAccordingToTime";

function SetBackgroundAccordingToCurrentVisitorTime() {
  var hours = moment().format("H");
  SetBackgroundcolorAccordingToTime(hours);
}

export default SetBackgroundAccordingToCurrentVisitorTime;
