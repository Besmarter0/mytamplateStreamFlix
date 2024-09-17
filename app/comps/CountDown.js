import React, { useState, useEffect } from 'react';

export default function Countdown() {
  const [counter, setCounter] = useState(60); // Starting value for the seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max flex justify-center  item-center p-10">
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': 15 }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': 10 }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': 24 }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{ '--value': counter }}></span>
        </span>
        sec
      </div>
    </div>
  );
}
