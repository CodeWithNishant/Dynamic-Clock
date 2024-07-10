import React, { Component } from "react";
import "./AnalogClock.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      speed: 1,
      shareUrl: "",
      countdown: 120,
    };
  }

  componentDidMount() {
    this.startClock();
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  startClock() {
    clearInterval(this.timerId);
    this.timerId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.countdown <= 1) {
          clearInterval(this.timerId);
          alert("Time's up!");
        }
        return {
          time: new Date(),
          countdown: prevState.countdown > 0 ? prevState.countdown - 1 : 0,
        };
      });
    }, 1000 / this.state.speed);
  }

  handleSpeedChange = (event) => {
    const newSpeed = parseFloat(event.target.value);
    this.setState({ speed: newSpeed }, () => this.startClock());
  };

  handleShare = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}?speed=${this.state.speed}`;
    this.setState({ shareUrl });
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert("URL copied to clipboard!");
    });
  };

  render() {
    const { countdown } = this.state;
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    const formattedCountdown = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;

    return (
      <div className="clock-container">
        <div className="clock">
          <div
            className="sec_hand"
            style={{
              transform: `rotateZ(${
                this.state.time.getSeconds() * -6 * this.state.speed
              }deg)`,
            }}
          />
          <span className="twelve">12</span>
          <span className="one">1</span>
          <span className="two">2</span>
          <span className="three">3</span>
          <span className="four">4</span>
          <span className="five">5</span>
          <span className="six">6</span>
          <span className="seven">7</span>
          <span className="eight">8</span>
          <span className="nine">9</span>
          <span className="ten">10</span>
          <span className="eleven">11</span>
        </div>
        <div className="controls">
          <label>Adjust Speed</label>
          <input
            type="range"
            min="0.5"
            max="5"
            step="0.1"
            value={this.state.speed}
            onChange={this.handleSpeedChange}
          />
          <button onClick={this.handleShare}>Share</button>
        </div>
        {this.state.shareUrl && <p>Share URL: {this.state.shareUrl}</p>}
        <div className="digital-counter">
          <h2>{formattedCountdown}</h2>
        </div>
      </div>
    );
  }
}

export default Clock;
