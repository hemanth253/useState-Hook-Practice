import React, { useState } from "react";

function App() {
  // setInterval(show, 1000);

  let currentTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(currentTime);

  const show = function () {
    let currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  };

  setInterval(show, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={show}>Get Time</button>
    </div>
  );
}

export default App;
