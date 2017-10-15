import React, { Component } from "react";
import AboutYourTimeZone from "./AboutYourTimeZone";
import CreateEventForm from "./CreateEventForm";
import ShareEvent from "./ShareEvent";
import ParseEventBase from "./ParseEventBase";
import EmbedEventButton from "./UIComponents/EmbedEventButton";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./helperfunctions/ScrollToTop";

class App extends Component {
  render() {
    function scrollToTop() {
      window.scrollTo(0, 0);
    }
    return (
      <Router onUpdate={scrollToTop}>
        <div id="app">
          <div id="page">
            <ScrollToTop>
              <Switch>
                <div>
                  <Route exact path="/" component={AboutYourTimeZone} />
                  <Route path="/new/:timezone/" component={CreateEventForm} />
                  <Route exact path="/new" component={CreateEventForm} />
                  <Route path="/share/:time/:name/" component={ShareEvent} />
                  <Route exact path="/share/:time/" component={ShareEvent} />
                  <Route exact path="/share/" component={ShareEvent} />
                  <Route path="/p/:time/:name/" component={ParseEventBase} />
                  <Route exact path="/p/:time/" component={ParseEventBase} />
                  <Route exact path="/p/" component={ParseEventBase} />
                </div>
              </Switch>
            </ScrollToTop>
          </div>
          <div id="bottomarea">
            <div>
              <Route path="/share/" component={EmbedEventButton} />
              <Route exact path="/p/" component={EmbedEventButton} />
              <Route exact path="/p/:time/" component={EmbedEventButton} />
              <Route path="/p/:time/:name/" component={EmbedEventButton} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;