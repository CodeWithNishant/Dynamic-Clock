import AnalogClock from "./AnalogClock";
import "./Tracking.css";

const TrackingScreen = () => {
  return (
    <div className="main-container">
      <div className="clock-card">
        <h1>Analog Clock</h1>
        <AnalogClock />
      </div>
    </div>
  );
};

export default TrackingScreen;
