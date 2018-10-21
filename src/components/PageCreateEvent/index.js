import React from 'react'
import { withRouter } from 'react-router-dom'
import { parse as sherlock } from 'sherlockjs'
import { getUserTimezone, formatTimezoneName } from '~/helpers/getUserTimezone'
import { timestampToParameter } from '~/helpers/timeParameter'
import LayoutGradient from '~/components/LayoutGradient'
import TextInput from '~/components/TextInput'
import Button from '~/components/Button'

class PageCreateEvent extends React.Component {
  state = {
    userTimeZoneName: 'New York',
    eventTime: '',
    eventTimeError: '',
    eventName: ''
  }

  componentDidMount() {
    this.setState({ userTimeZoneName: formatTimezoneName(getUserTimezone()) })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { eventTime, eventName } = this.state
    const { startDate } = sherlock(eventTime)

    if (startDate) {
      this.props.history.push({
        pathname: `/share/${timestampToParameter(
          startDate.valueOf()
        )}/${eventName}`
      })
    } else {
      this.setState({
        eventTimeError: 'Please double check the format'
      })
    }
  }

  handleTimeChange = ({ target: { value } }) => {
    this.setState({ eventTime: value, eventTimeError: '' })
  }

  handleNameChange = ({ target: { value } }) =>
    this.setState({ eventName: value })

  render() {
    return (
      <LayoutGradient backgroundTime={Date.now()}>
        <form onSubmit={this.handleSubmit}>
          <h2>When is the event?</h2>
          <p>
            In your local time zone ({this.state.userTimeZoneName}
            ).
          </p>
          <TextInput
            required
            name="eventTime"
            value={this.state.eventTime}
            onChange={this.handleTimeChange}
            placeholder="e.g. Wednesday at 7pm"
            error={this.state.eventTimeError}
            marginBottom="30px"
          />
          <h2>{"What's the name of the event?"}</h2>
          <TextInput
            name="eventName"
            value={this.state.eventName}
            onChange={this.handleNameChange}
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
}
export default withRouter(PageCreateEvent)
