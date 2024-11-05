import React from "react";

// receives expiry date in ms
const CountdownTimer = ({ expiryDate }) => {
    const getRemainingTime = () => {
        const currentTime = new Date().getTime();
        const remainingTime = expiryDate - currentTime;
        let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        let hours = Math.floor(
          (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        return { hours, minutes, seconds };
      };
  const [time, setTime] = React.useState(getRemainingTime());
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(getRemainingTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="de_countdown">
      {" "}
      {time.hours}h {time.minutes}m {time.seconds}s{" "}
    </div>
  );
};

export default CountdownTimer;
