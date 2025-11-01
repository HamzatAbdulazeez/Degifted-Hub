import { useState, useEffect } from "react";

export default function Countdown({ target }) {
  const calculateTimeLeft = () => {
    const difference = +target - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [target]);

  const format = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="flex justify-center gap-4 md:gap-8 text-2xl md:text-4xl font-mono">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 md:px-6 md:py-3">
            {timeLeft[unit] !== undefined ? format(timeLeft[unit]) : "00"}
          </div>
          <span className="mt-2 text-sm uppercase tracking-wider opacity-80">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
}