import React, { Component } from 'react'
import AboutYourTimeZone from './ContentPages/AboutYourTimeZone'
import CreateEventForm from './ContentPages/CreateEventForm'
import ShareEvent from './ContentPages/ShareEvent'
import ParseEventBase from './ContentPages/ParseEventBase'
import FooterButton from './Footer/FooterButton'
import {
  withRouter,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {
  scrollToTop = () => window.scrollTo(0, 0)

  render() {
    return (
      <Router onUpdate={this.scrollToTop}>
        <div id="app">
          <div id="page">
            <ResetScrollPosition>
              <Switch>
                <Route exact path="/" component={AboutYourTimeZone} />
                <Route path="/new/:timezone?/" component={CreateEventForm} />
                <Route
                  path="/share/:encodedTime?/:name?/"
                  component={ShareEvent}
                />
                <Route
                  path="/p/:encodedTime?/:name?/"
                  component={ParseEventBase}
                />
              </Switch>
            </ResetScrollPosition>
          </div>
          <div id="bottomarea">
            <Route path="/p/:encodedTime?/:name?/" component={FooterButton} />
          </div>
        </div>
      </Router>
    )
  }
}

const ResetScrollPosition = withRouter(
  class extends Component {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0)
      }
    }

    render() {
      return this.props.children
    }
  }
)

export default App
