import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState({})

  useEffect(() => {

    fetch(`/.netlify/functions/hello?name=from react to netlify function`)
      .then(response => response.json())
      .then(apidata => setData(apidata))

  }, [])

  return (
    <div className="App">
      <h4>Hello from Serverless</h4>
      {data.message}
    </div>
  );
}

export default App;
