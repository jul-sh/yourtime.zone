//embedcode template

function embedINSERTEVENTID(displaytitle, displaydate, EventSerialized) {
  var UserTimeZoneDisplay = NameUserTimezone();
  document.getElementById("INSERTEVENTID-localtimezone").innerHTML = UserTimeZoneDisplay;
  var Event = deparam(EventSerialized);

  var EventTime = moment(Event.timeUTC);
  var UserTimeZone = moment.tz.guess();
  var ConvertedEventTime = EventTime.tz(UserTimeZone).format(); // 2013-11-18T06:00:00+01:00

  //if the result starts with a date set preposition to 'on'
  EventStartWithDate = DoesEventStartWithDate(EventTime);
  if (EventStartWithDate) {
    document.getElementById("INSERTEVENTID-eventpreposition").innerHTML = " on";
  }

  //if the result is in the past, use "was" instead of "is"
  var IsEventInPast = CheckIsEventInPast(EventTime);

  if (IsEventInPast) {
    document.getElementById("INSERTEVENTID-eventverb").innerHTML = "started";
  }

  var HumanLanguageConvertedEventTime = '';

  if (displaydate) {
    HumanLanguageConvertedEventTime = moment(ConvertedEventTime).calendar(null, {
      sameDay: "[today at] h:mm A",
      nextDay: "[tomorrow at] h:mm A",
      nextWeek: "dddd [at] h:mm A",
      withinthenext200Days: "MMMM Do [at] h:mm A",
      lastDay: "[yesterday at] h:mm A",
      lastWeek: "[last] dddd [at] h:mm A",
      withinthelast200Days: "MMMM Do [at] h:mm A",
      sameElse: "MMMM Do YYYY [at] h:mm A"
    });
  } else {
    HumanLanguageConvertedEventTime = moment(ConvertedEventTime).format('hA');
    document.getElementById("INSERTEVENTID-eventpreposition").innerHTML = " at";
  }

  if (displaytitle) {
    document.getElementById("INSERTEVENTID-eventname").innerHTML = Event.Title;
    if (Event.Title == null || Event.Title == '') {
      console.log("It appears that there is not a valid title");
      document.getElementById("INSERTEVENTID-eventname").innerHTML = "the event";
    }
  } else {
    document.getElementById("INSERTEVENTID-eventname").innerHTML = '';
    document.getElementById("INSERTEVENTID-eventverb").innerHTML = '';
    document.getElementById("INSERTEVENTID-eventpreposition").innerHTML = '';
  }

  document.getElementById("INSERTEVENTID-localtime").innerHTML = HumanLanguageConvertedEventTime;

}
