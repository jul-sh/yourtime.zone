import React, { Component } from 'react'
import PageAbout from '~/components/PageAbout'
import PageCreateEvent from '~/components/PageCreateEvent'
import PageShareEvent from '~/components/PageShareEvent'
import PageEvent from '~/components/PageEvent'
import FooterButton from '~/components/FooterButton'
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
                <Route exact path="/" component={PageAbout} />
                <Route path="/new/:timezone?/" component={PageCreateEvent} />
                <Route
                  path="/share/:encodedTime?/:name?/"
                  component={PageShareEvent}
                />
                <Route path="/e/:encodedTime?/:name?/" component={PageEvent} />
              </Switch>
            </ResetScrollPosition>
          </div>
          <div id="bottomarea">
            <Route path="/e/:encodedTime?/:name?/" component={FooterButton} />
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
