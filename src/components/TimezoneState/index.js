import { useState } from 'react'

const TimezoneState = props => {
  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )

  return props.children({
    timezone,
    setTimezone
  })
}

export default TimezoneState
