import React, { Component } from 'react'
import {
  withRouter,
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
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
            <Route exact path="/" component={PageAbout} />
            <Route path="/new/:timezone?/" component={PageCreateEvent} />
            <Route
              path="/share/:encodedTime?/:name?/"
              component={PageShareEvent}
            />
            <Route path="/e/:encodedTime?/:name?/" component={PageEvent} />
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
