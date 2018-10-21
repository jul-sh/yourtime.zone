import React from 'react'

class TimezoneState extends React.Component {
  constructor(props) {
    super(props)

    this.state = { timezone: Intl.DateTimeFormat().resolvedOptions().timeZone }
  }

  setTimezone = timezone => this.setState({ timezone })

  render() {
    return this.props.children({
      timezone: this.state.timezone,
      setTimezone: this.setTimezone
    })
  }
}

export default TimezoneState
