import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/simpleAPI')
    .then(response => response.json())
    .then(setData)
    .catch(setError)
  }, [])
  return (
    <div className="App">
      {error ?
        <>
          <h1 style={{color: 'red'}}>Oh no! It looks like an error has occured. Check the message below, or for more details about the error check console.</h1>
          <h1>{String(error)}</h1>
        </>
      : data ?
        <>
          <h1>The stringified data:</h1>
          <h1>{JSON.stringify(data)}</h1>
        </>
      : 
        <h1>useEffect is calling the simpleAPI API. Please wait a moment while this loads...</h1>
      }
    </div>
  );
}

export default App;
