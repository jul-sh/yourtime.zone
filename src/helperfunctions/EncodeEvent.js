import moment from "moment-timezone";

//This is done to create the shortest possible universal URL

function EncodeEvent(EventTime) {
  //convert to Unix seconds epoch
  var EventUnixTime = moment(EventTime).unix();
  //strip the last two zeroes to make it unix minutes
  var EventUnixMinutes = Math.floor(EventUnixTime / 1e2);
  // Create a New Years 2017 UTC epoch, since yourtime.zone doesn't supoort earlier dates
  var EventEpoch2017Minutes = EventUnixMinutes - 14832288;
  //encode as a b36 string
  var EventEpoch2017MinutesB64 = EventEpoch2017Minutes.toString(36);
  return EventEpoch2017MinutesB64;
}

function DecodeEventtoUnixTime(EventEpoch2017MinutesB64) {
  // decode to decimal
  EventEpoch2017MinutesB64 = parseInt(EventEpoch2017MinutesB64, 36);
  var EventEpoch2017Minutes = parseInt(EventEpoch2017MinutesB64);
  var EventUnixMinutes = EventEpoch2017Minutes + 14832288;
  var EventUnixTime = Math.floor(EventUnixMinutes * 1e2);
  return EventUnixTime;
}

export { EncodeEvent, DecodeEventtoUnixTime };
