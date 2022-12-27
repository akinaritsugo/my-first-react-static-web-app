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

  return <div>{data}</div>;
}

export default App;
