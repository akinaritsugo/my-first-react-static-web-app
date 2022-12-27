import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/message");
        const msg = await res.json();
        setData(msg.text);
      } catch (err) {
        setData(err.message);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Static Web Apps Demo</h1>
      <div>{data}</div>
    </div>
  );
}

export default App;
