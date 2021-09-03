import { useState, useEffect } from 'react';
import logo from './images/spinner.gif';

function App() {
  const [nextYear, setNextYear] = useState('');
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [afterLoading, setAfterLoading] = useState(false);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
      setAfterLoading(true);
      countdown();
    }, 2000);
  }, []);

  const countdown = () => {
    setNextYear(nextNewYear);
    setInterval(() => {
      displayCountdown();
    }, 1000);
  };

  const nextNewYear = new Date().getFullYear() + 1;

  const calculateCountDown = () => {
    const now = new Date();
    const newYear = new Date(`January 01 ${nextNewYear}, 00:00:00`);
    const diff = newYear - now;
    let s = Math.floor((diff / 1000) % 60);
    let m = Math.floor((diff / 1000 / 60) % 60);
    let h = Math.floor((diff / 1000 / 60 / 60) % 24);
    let d = Math.floor(diff / 1000 / 60 / 60 / 24);
    return { s, m, h, d };
  };

  const displayCountdown = () => {
    const { s, m, h, d } = calculateCountDown();

    setDays(d);
    setHours(h);
    setMinutes(m);
    setSeconds(s);
  };

  return (
    <div className="App">
      {spinner && <img src={logo}></img>}
      {afterLoading && (
        <div className="box">
          <h1>New Year Countdown</h1>
          <h1 className="next-year">{nextYear}</h1>
          <div className="container">
            <div className="time-box">
              <h2>{days}</h2>
              <small>days</small>
            </div>
            <div className="time-box">
              <h2>{hours}</h2>
              <small>hours</small>
            </div>
            <div className="time-box">
              <h2>{minutes}</h2>
              <small>minutes</small>
            </div>
            <div className="time-box">
              <h2>{seconds}</h2>
              <small>seconds</small>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
