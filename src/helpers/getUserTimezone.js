import TIMEZONES from 'human-timezones'

export const getUserTimezone = () =>
  Intl.DateTimeFormat().resolvedOptions().timeZone

export const formatTimezoneName = timezoneKey => {
  try {
    return TIMEZONES.find(timezone => timezone.timezoneKey === timezoneKey)
      .label
  } catch (error) {
    return timezoneKey
  }
}
