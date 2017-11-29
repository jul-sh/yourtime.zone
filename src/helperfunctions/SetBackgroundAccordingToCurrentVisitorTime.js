import moment from "moment-timezone";
import SetBackgroundcolorAccordingToTime from "./SetBackgroundcolorAccordingToTime";

function SetBackgroundAccordingToCurrentVisitorTime() {
  var now = moment();
  SetBackgroundcolorAccordingToTime(now);
}

export default SetBackgroundAccordingToCurrentVisitorTime;
