import { DateTime } from 'luxon'
import { formatTimezoneName } from '~/helpers/getUserTimezone'

export const getLocalisedInformation = (
  timestamp: number,
  timezone: string
) => {
  const localNow = DateTime.fromObject({ zone: timezone })
  const localDate = DateTime.fromMillis(timestamp, { zone: timezone })

  return {
    name: formatTimezoneName(timezone),
    formattedTime: localDate.toFormat('h:mm'),
    isInPast: localDate.diffNow().as('milliseconds') < 0,
    amOrPm: localDate.toFormat('a'),
    dayOfWeek: localDate.toFormat('cccc'),
    dayOfMonth: localDate.toFormat('d'),
    month: localDate.toFormat('LLLL'),
    year: localDate.toFormat('y'),
    daysFromLocalNow: Math.trunc(localDate.diff(localNow, 'days').toObject()
      .days as number)
  }
}
