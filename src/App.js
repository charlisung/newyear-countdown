import { useState, useEffect } from "react";
import "./App.css";
import Spinner from "./Spinner";
import Timebox from "./Timebox";

function App() {
  const [nextYear, setNextYear] = useState("");
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
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
      {spinner && <Spinner />}
      {afterLoading && (
        <Timebox
          nextYear={nextYear}
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      )}
    </div>
  );
}

export default App;
