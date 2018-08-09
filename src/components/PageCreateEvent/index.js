import React from 'react'

import { getUserTimezone, formatTimezoneName } from '~/helpers/getUserTimezone'
import { timestampToParameter } from '~/helpers/timeParameter'
import LayoutCentered from '~/components/LayoutCentered'
import DateTimePicker from '~/components/DateTimePicker'
import { withRouter } from 'react-router-dom'

class PageCreateEvent extends React.Component {
  state = {
    userTimeZoneName: 'New York',
    eventTimestamp: '',
    eventName: ''
  }

  componentDidMount() {
    this.setState({ userTimeZoneName: formatTimezoneName(getUserTimezone()) })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { eventTimestamp, eventName } = this.state
    this.props.history.push({
      pathname: `/share/${timestampToParameter(eventTimestamp)}/${eventName}`
    })
  }

  onDatePickerChange = timeAsString => {
    const encodedTime = new Date(timeAsString)
    this.setState({ eventTimestamp: encodedTime.valueOf() })
  }

  onEventNameChange = event => this.setState({ eventName: event.target.value })

  render() {
    return (
      <LayoutCentered backgroundTime={this.state.eventTimestamp || new Date()}>
        <form onSubmit={this.handleSubmit}>
          <h2>When is the event?</h2>
          <p>
            In your local timezone ({this.state.userTimeZoneName}
            ).{' '}
          </p>
          <DateTimePicker callbackFromParent={this.onDatePickerChange} />
          <div style={{ marginTop: 45 }}>
            <h2>What's the name of the event?</h2>
            <input
              type="text"
              value={this.state.eventName}
              onChange={this.onEventNameChange}
              placeholder="Juliette's Webinar"
            />
          </div>
          <div className="submitbuttondiv" style={{ marginTop: 15 }}>
            <input
              type="submit"
              className="btn-class bigbutton"
              defaultValue="Create Event"
            />
          </div>
        </form>
      </LayoutCentered>
    )
  }
}
export default withRouter(PageCreateEvent)
