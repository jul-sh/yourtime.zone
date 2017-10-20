import React from "react";
import SetBackgroundAccordingToCurrentVisitorTime from "./helperfunctions/SetBackgroundAccordingToCurrentVisitorTime";
import * as Clipboard from "clipboard";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";

class ShareEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Nicely done." };
  }

  componentDidMount() {
    var clipboard = new Clipboard("#copy-button");
    clipboard.on("success", e => {
      this.setState({ name: "Copied!" });
      e.clearSelection();
    });
    clipboard.on("error", e => {
      this.setState({ name: "Please copy manually." });
    });
  }

  handleChange(event) {
    event.preventDefault();
    event.target.select();
  }

  render() {
    SetBackgroundAccordingToCurrentVisitorTime();

    var EventName = "";
    if (this.props.match.params.name) {
      EventName = this.props.match.params.name;
    }

    var EventUnixMinutesB36 = "";
    if (this.props.match.params.time) {
      EventUnixMinutesB36 = this.props.match.params.time;
    }

    function generatePath() {
      if (!EventUnixMinutesB36) {
        return "/new";
      }
      if (!EventName) {
        const path = "/p/" + EventUnixMinutesB36;
        return path;
      }
      const path = "/p/" + EventUnixMinutesB36 + "/" + EventName;
      return path;
    }

    function generateURL() {
      if (!EventUnixMinutesB36) {
        return "Error, please create another event.";
      }
      var path = generatePath();
      const CurrentDomain = window.location.origin;
      var EventURL = CurrentDomain + path;
      return EventURL;
    }

    return (
      <div>
        <h1 style={{ marginTop: "0" }}>{this.state.name}</h1>
        <p>
          Now, simply share the link below.<br className="optionalbr" />It will
          display <Link to={generatePath()}>the event</Link> in the local time
          of whoever visits it.
        </p>
        <form>
          <div className="input-group">
            <input
              onClick={this.handleChange}
              type="text"
              className="form-control shareurl"
              defaultValue={generateURL()}
              readOnly
              id="copy-input"
            />
            <span className="input-group-btn">
              <button
                className="btn btn-default"
                type="button"
                id="copy-button"
                data-clipboard-target="#copy-input"
                name="Copy to Clipboard"
              >
                Copy
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default ShareEvent;
