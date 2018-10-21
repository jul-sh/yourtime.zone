import jstz from 'jstz'
import TIMEZONES from 'human-timezones'

export const getUserTimezone = () => jstz.determine().name()

export const formatTimezoneName = timezoneKey => {
  try {
    return TIMEZONES.find(timezone => timezone.timezoneKey === timezoneKey)
      .label
  } catch (error) {
    return timezoneKey
  }
}
