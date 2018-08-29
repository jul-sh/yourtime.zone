import React from 'react'
import ComboDatePicker from '~/helpers/combodate'
import Timepicker from '~/helpers/timepicker'

class DateTimePicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dateTime: new Date()
    }
  }

  callbackDatepickeer = date => {
    let month = date.getMonth()
    let dateday = date.getDate()
    let year = date.getFullYear()
    let dateTime = this.state.dateTime
    dateTime.setDate(dateday)
    dateTime.setMonth(month)
    dateTime.setFullYear(year)
    this.props.callbackFromParent(dateTime)
    this.setState({ dateTime: dateTime })
  }

  callbackTimepickeer = encodedTime => {
    var hourpicked = parseInt(encodedTime.hour, 10)
    const minutepicked = parseInt(encodedTime.minute, 10)

    if (encodedTime.ampm === 'PM') {
      hourpicked = hourpicked + 12
    }

    if (hourpicked === 24) {
      hourpicked = 0
    }

    var dateTime = this.state.dateTime
    dateTime.setMilliseconds(0)
    dateTime.setSeconds(0)
    dateTime.setMinutes(minutepicked)
    dateTime.setHours(hourpicked)
    this.props.callbackFromParent(dateTime)
    this.setState({ dateTime: dateTime })
  }

  render () {
    const timepickerstyles = {
      margin: '0 0 0 20px'
    }

    return (
      <div>
        <ComboDatePicker
          minDate='2017-06-01'
          maxDate='2030-12-31'
          date={this.state.dateTime}
          onChange={(picker, date) => {
            this.callbackDatepickeer(date)
          }}
        />
        <Timepicker
          callbackFromParent={this.callbackTimepickeer}
          style={timepickerstyles}
        />
      </div>
    )
  }
}
export default DateTimePicker
