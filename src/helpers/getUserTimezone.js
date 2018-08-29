import jstz from 'jstz'

export const getUserTimezone = () => jstz.determine().name()

export const formatTimezoneName = timezone => {
  const timezoneName = timezone.replace(/_/g, ' ')

  if (timezoneName.indexOf('/') > -1) {
    // if usertimezonedisplay is like 'europe/berlin', display 'berlin' instead
    return timezoneName.split('/')[1]
  }

  return timezoneName
}
