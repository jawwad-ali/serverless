import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    fetch(`/.netlify/functions/hello?name=from react to netlify function`)
    setLoading(true)
      .then(response => response.json())
      .then(apidata => setData(apidata))
    setLoading(false)

  }, [])


  if (loading)
    return <h6 style={{ color: "blue" }}>loading...</h6>

  return (
    <div className="App">
      <h4>Hello from Serverless</h4>
      {data.message}
    </div>
  );
}

export default App;
