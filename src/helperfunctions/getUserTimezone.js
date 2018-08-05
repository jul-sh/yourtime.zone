import moment from 'moment-timezone'

export const getUserTimezone = () => moment.tz.guess()

export const getTimezoneName = timezone => {
  const timezoneName = timezone.replace(/_/g, ' ')
  if (timezoneName.indexOf('/') > -1) {
    //if usertimezonedisplay is like 'europe/berlin', display 'berlin' instead
    return timezoneName.split('/')[1]
  }
  return timezoneName
}
