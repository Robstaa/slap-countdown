import React from 'react';
import moment from 'moment';

class Timer extends React.Component {
  state = {
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  };

  componentDidMount() {
    this.setStateOfCountdownItems();
    this.interval = setInterval(() => {
      this.setStateOfCountdownItems();
    }, 1000)
  }

componentWillUnmount() {
  clearInterval(this.interval);
}

setStateOfCountdownItems() {
  const start = moment();
  const end = this.props.timeDateGoal; 
  const difference = moment.duration(end.diff(start));
  const { days, hours, minutes, seconds } = difference._data;
  this.setState({
    days,
    hours,
    minutes,
    seconds,
  });
}

render() {
  const { days, hours, minutes, seconds } = this.state;
  return(
    <div className="timer-wrapper">
    <div className="countdown-number">{days}</div>
    <div className="countdown-text">Days</div>
    <div className="countdown-number">{hours}</div>
    <div className="countdown-text">Hours</div>
    <div className="countdown-number">{minutes}</div>
    <div className="countdown-text">Minutes</div>
    <div className="countdown-number">{seconds}</div>
    <div className="countdown-text">Seconds</div>
    </div>
    );
}
}

export default Timer;