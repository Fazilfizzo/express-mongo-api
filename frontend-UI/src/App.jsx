import React, { useState, useEffect } from 'react';
import dotenv from 'dotenv';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [nodeId, setNodeId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async (endpoint) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`http://<YOUR_API_IP>:${process.env.REACT_APP_API_PORT}/api/${endpoint}`);
      if (!response.ok) throw new Error('Network response was not ok');
      
      const nodeId = response.headers.get('X-Node-ID');
      if (nodeId) setNodeId(nodeId);
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>University Portal</h1>
        {nodeId && <p>Served by: {nodeId}</p>}
        
        <div className="buttons">
          <button onClick={() => fetchData('students')}>Students</button>
          <button onClick={() => fetchData('subjects')}>Courses</button>
        </div>
        
        {loading && <p>Loading...</p>}
        {error && <p className="error">Error: {error}</p>}
        
        <div className="data-container">
          {data && Array.isArray(data) && (
            <ul>
              {data.map((student, index) => (
                <li key={index}>
                  {student.name} - {student.enrolledProgram}
                </li>
              ))}
            </ul>
          )}
          
          {data && !Array.isArray(data) && (
            <div>
              {Object.entries(data).map(([year, subjects]) => (
                <div key={year}>
                  <h3>{year}</h3>
                  <ul>
                    {subjects.map((subject, idx) => (
                      <li key={idx}>{subject}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;