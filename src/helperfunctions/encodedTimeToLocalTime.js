import moment from "moment-timezone";
import { DecodeEventtoUnixTime } from "~/helperfunctions/encodeEvent";
import NameUserTimezone from "~/helperfunctions/nameUserTimezone";

function encodedTimeToLocalTime(encodedTime) {
  const eventUnixTime = DecodeEventtoUnixTime(encodedTime);
  const userTimeZone = NameUserTimezone();
  const eventTime = moment.unix(eventUnixTime);
  const eventTimeInLocalTime = eventTime.format();
  const eventTimeInLocalTimeInHumanLanguage = moment(
    eventTimeInLocalTime
  ).calendar(null, {
    sameDay: "[today at] h:mm A",
    nextDay: "[tomorrow at] h:mm A",
    nextWeek: "dddd [at] h:mm A",
    withinthenext200Days: "MMMM Do [at] h:mm A",
    lastDay: "[yesterday at] h:mm A",
    lastWeek: "[last] dddd [at] h:mm A",
    withinthelast200Days: "MMMM Do [at] h:mm A",
    sameElse: "MMMM Do YYYY [at] h:mm A"
  });
  const now = moment();
  let verb = "starts";
  if (moment(eventTime).isBefore(now)) {
    verb = "took place";
  }
  let preposition = "";
  if (
    eventTime.diff(now, "days", true) > 2 ||
    eventTime.diff(now, "days", true) < -6
  ) {
    preposition = " on";
  }
  return {
    userTimeZone: userTimeZone,
    inHumanLanguage: eventTimeInLocalTimeInHumanLanguage,
    verb: verb,
    preposition: preposition,
    inUnixEpoch: eventUnixTime,
    inLocalTime: eventTimeInLocalTime
  };
}

export default encodedTimeToLocalTime;
