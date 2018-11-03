import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { parse as sherlock } from 'sherlockjs'
import { DateTime } from 'luxon'
import { formatTimezoneName } from '~/helpers/getUserTimezone'
import { timestampToParameter } from '~/helpers/timeParameter'
import LayoutGradient from '~/components/LayoutGradient'
import TextInput from '~/components/TextInput'
import Button from '~/components/Button'

const PageCreateEvent = props => {
  const [eventTime, setEventTime] = useState('')
  const [eventName, setEventName] = useState('')
  const [eventTimeError, setEventTimeError] = useState('')
  const timezone = formatTimezoneName(props.timezone)

  const handleSubmit = event => {
    event.preventDefault()
    const { startDate } = sherlock(eventTime)
    const eventTimestamp = DateTime.fromJSDate(startDate, {
      zone: props.timezone
    }).toMillis()

    if (startDate) {
      props.history.push({
        pathname: `/share/${timestampToParameter(eventTimestamp)}/${eventName}`
      })
    } else {
      setEventTimeError('Please double check the format')
    }
  }

  return (
    <LayoutGradient backgroundTime={Date.now()}>
      <form onSubmit={handleSubmit}>
        <h2>When is the event?</h2>
        <p>
          In your local time zone ({timezone}
          ).
        </p>
        <TextInput
          required
          name="eventTime"
          value={eventTime}
          onChange={({ target: { value } }) => {
            setEventTime(value)
            setEventTimeError('')
          }}
          placeholder="e.g. Wednesday at 7pm"
          error={eventTimeError}
          marginBottom="30px"
        />
        <h2>{"What's the name of the event?"}</h2>
        <TextInput
          name="eventName"
          value={eventName}
          onChange={({ target: { value } }) => setEventName(value)}
          placeholder="e.g. Juliette's Webinar"
          marginBottom="40px"
        />
        <br />
        <Button as="button" type="submit">
          Create Event
        </Button>
      </form>
    </LayoutGradient>
  )
}

export default withRouter(PageCreateEvent)
