import TIMEZONES from 'human-timezones'

export const formatTimezoneName = (timezoneKey: string) => {
  try {
    return TIMEZONES.find(
      (timezone: { timezoneKey: string }) =>
        timezone.timezoneKey === timezoneKey
    ).label
  } catch (error) {
    return timezoneKey
  }
}
