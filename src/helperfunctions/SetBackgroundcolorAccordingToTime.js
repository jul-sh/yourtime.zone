import "../styles/backgroundgradient.css";

function SetBackgroundcolorAccordingToTime(Hour) {
  var HourClass = "t" + Hour.toString() + " gradient";
  //only update class if the value has changed
  if (document.getElementById("background").className !== HourClass) {
    document.getElementById("background").className = HourClass;
  }
}

export default SetBackgroundcolorAccordingToTime;
