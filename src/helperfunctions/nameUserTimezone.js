import moment from "moment-timezone";

function NameUserTimezone() {
  var UserTimeZone = moment.tz.guess();
  var UserTimeZoneDisplay = UserTimeZone.name;
  UserTimeZoneDisplay = UserTimeZone.replace(/_/g, " ");
  if (UserTimeZoneDisplay.indexOf("/") > -1) {
    //if usertimezonedisplay is like 'europe/berlin', display 'berlin' instead
    UserTimeZoneDisplay = UserTimeZoneDisplay.split("/")[1];
  }
  return UserTimeZoneDisplay;
}

export default NameUserTimezone;
