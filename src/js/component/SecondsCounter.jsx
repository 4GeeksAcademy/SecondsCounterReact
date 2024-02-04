import React, { useState, useEffect } from 'react';
import '/workspaces/SecondsCounterReact/src/styles/index.css'; // Importa el archivo CSS con estilos personalizados

const SecondsCounter = ({ seconds, countdown, onAlert }) => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isCounting) {
        setElapsedSeconds((prevSeconds) => prevSeconds + 1);
        if (onAlert && elapsedSeconds + 1 === onAlert) {
          alert(`¡Se alcanzaron ${onAlert} segundos!`);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isCounting, elapsedSeconds, onAlert]);

  const handleStartStop = () => {
    setIsCounting((prevIsCounting) => !prevIsCounting);
  };

  const handleReset = () => {
    setElapsedSeconds(0);
  };

  return (
    <div className="counter-container">
      <p className="counter-text">
        Seconds: {countdown ? seconds - elapsedSeconds : elapsedSeconds}
      </p>
      <div className="button-container">
        <button className="control-button" onClick={handleStartStop}>
          {isCounting ? 'Pause' : 'Resume'}
        </button>
        <button className="control-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Seconds Counter</h1>
      <SecondsCounter seconds={10} countdown={false} onAlert={10} />
    </div>
  );
};

export default SecondsCounter
