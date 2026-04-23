import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="timer">
      <h2>{time}</h2>
    </section>
  );
}
