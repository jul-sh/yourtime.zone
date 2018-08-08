import '~/styles/backgroundgradient.css'

const setBackgroundByTimestamp = timestamp => {
  const encodedTime = new Date(timestamp)
  var hour = encodedTime.getHours()
  var HourClass = 't' + hour.toString() + ' gradient'

  if (document.getElementById('background').className !== HourClass) {
    document.getElementById('background').className = HourClass
  }
}

export default setBackgroundByTimestamp
