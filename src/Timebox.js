export default function Timebox({ nextYear, days, hours, minutes, seconds }) {
  return (
    <div className="box">
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
  );
}
