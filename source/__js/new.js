// including jquery for combodate.js
// @codekit-prepend "jquery.min.js"
// @codekit-prepend "combodate.js"


function CreateEvent() {
  var EventISO8601 = $('#EventDateTime').combodate('getValue');
  console.log("Event time is: " + EventISO8601);

  //convert to utc time
  var EventISO8601UTC = moment(EventISO8601).toISOString();
  console.log("Event time in UTC is: " + EventISO8601UTC);

  //get event title from form
  var EventTitle = document.getElementById('EventTitle').value;
  console.log("The title of the event is:  " + EventTitle);

  //create array with event title and time
  var Event = {
    timeUTC: EventISO8601UTC,
    Title: EventTitle
  };
  console.log(Event["timeUTC"]);

  //serialize Event to attach to URL
  var EventSerialized = param(Event);
  console.log(EventSerialized);

  Cookies.set('creatorofevent', EventSerialized, {
    expires: 99
  });

  //create URL to share
  var EventString = "?" + EventSerialized + "?end";
  var ShareUrl = "/share/" + "?" + EventSerialized + "?end";
  var EventUrl = "/p/" + "?" + EventSerialized + "?end";
  console.log("The event url is:  " + EventUrl);

  //redirect to share page
  window.location.href = ShareUrl;

}


function InitializeEventBuilder() {
  $('#EventDateTime').combodate({
    minYear: 2017,
    maxYear: 2050,
    minuteStep: 5,
    firstItem: 'none'
  });

  var CreatorTimeZoneDisplay = NameUserTimezone();
  document.getElementById("localtimezone").innerHTML = CreatorTimeZoneDisplay;

  var CurrentTime = moment();
  //round up current time to the full hour
  CurrentTime = CurrentTime.minute() || CurrentTime.second() || CurrentTime.millisecond() ? CurrentTime.add(1, 'hour').startOf('hour') : CurrentTime.startOf('hour');
  $('#EventDateTime').combodate('setValue', CurrentTime);

  //load opt in email system
  var script = document.createElement("script"); //Make a script DOM node
  script.src = "../__js/askforembedemail.js"; //Set it's src to the provided URL
  document.head.appendChild(script); //Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}
