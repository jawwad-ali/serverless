import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState({})

  useEffect(() => {

    // fetch(`/.netlify/functions/hello?name=from react to netlify function`)
    // setLoading(true)
    //   .then(response => response.json())
    //   .then(apidata => setData(apidata))
    // setLoading(false)

    fetch(`/.netlify/functions/hello`)
      .then(resposne => resposne.json())
      .then(data => {
        setData(data)

      })

  }, [])



  return (
    <div className="App">
      <h4>Hello from Serverless</h4>
      {data.message}
    </div>
  );
}

export default App;
