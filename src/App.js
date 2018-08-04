import React, { Component } from 'react'
import AboutYourTimeZone from './ContentPages/AboutYourTimeZone'
import CreateEventForm from './ContentPages/CreateEventForm'
import ShareEvent from './ContentPages/ShareEvent'
import ParseEventBase from './ContentPages/ParseEventBase'
import EmbedEventButton from './Footer/EmbedEventButton'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './helperfunctions/ScrollToTop'

class App extends Component {
  scrollToTop = () => window.scrollTo(0, 0)

  render() {
    return (
      <Router onUpdate={this.scrollToTop}>
        <div id="app">
          <div id="page">
            <ScrollToTop>
              <Switch>
                <Route exact path="/" component={AboutYourTimeZone} />
                <Route path="/new/:timezone?/" component={CreateEventForm} />
                <Route path="/share/:time?/:name?/" component={ShareEvent} />
                <Route path="/p/:time?/:name?/" component={ParseEventBase} />
              </Switch>
            </ScrollToTop>
          </div>
          <div id="bottomarea">
            <Route path="/share/" component={EmbedEventButton} />
            <Route path="/p/:time?/:name?/" component={EmbedEventButton} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
