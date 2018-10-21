import React, { Component } from 'react'
import {
  withRouter,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import TimezoneState from '~/components/TimezoneState'
import PageAbout from '~/components/PageAbout'
import PageCreateEvent from '~/components/PageCreateEvent'
import PageShareEvent from '~/components/PageShareEvent'
import PageEvent from '~/components/PageEvent'

class App extends Component {
  scrollToTop = () => window.scrollTo(0, 0)

  render() {
    return (
      <Router onUpdate={this.scrollToTop}>
        <ResetScrollPosition>
          <Switch>
            <TimezoneState>
              {timezoneState => (
                <>
                  <Route
                    exact
                    path="/"
                    render={props => (
                      <PageAbout {...props} {...timezoneState} />
                    )}
                  />
                  <Route
                    path="/new/:timezone?/"
                    render={props => (
                      <PageCreateEvent {...props} {...timezoneState} />
                    )}
                  />
                  <Route
                    path="/share/:encodedTime?/:name?/"
                    render={props => (
                      <PageShareEvent {...props} {...timezoneState} />
                    )}
                  />
                  <Route
                    path="/e/:encodedTime?/:name?/"
                    render={props => (
                      <PageEvent {...props} {...timezoneState} />
                    )}
                  />
                </>
              )}
            </TimezoneState>
          </Switch>
        </ResetScrollPosition>
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
