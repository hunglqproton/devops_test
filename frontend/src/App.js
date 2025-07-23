
import React, { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch('/api')
      .then(res => res.text())
      .then(setMsg)
      .catch(err => setMsg("Error: " + err.message));
  }, []);

  return (
    <div>
      <h1>Frontend App</h1>
      <p>Backend says: {msg}</p>
    </div>
  );
}

export default App;
