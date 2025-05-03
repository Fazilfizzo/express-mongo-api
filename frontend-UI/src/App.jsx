// App.jsx
import { useEffect, useState } from 'react';

function App() {
  const [view, setView] = useState('');
  const [data, setData] = useState([]);
  const [nodeId, setNodeId] = useState('');

  const fetchData = async (type) => {
    const res = await fetch(`/api/${type}`);
    const json = await res.json();
    setData(json);
    setView(type);
    setNodeId(res.headers.get('X-Node-ID'));
  };

  return (
    <div>
      <h1>Frontend Load Balancer</h1>
      <p>Served by node: {nodeId}</p>
      <button onClick={() => fetchData('students')}>Students</button>
      <button onClick={() => fetchData('subjects')}>Courses</button>

      {view === 'students' && data.map((s, i) => (
        <div key={i}>{s.name} - {s.program}</div>
      ))}
      {view === 'subjects' && Object.entries(data).map(([year, subjects], i) => (
        <div key={i}>
          <h3>{year}</h3>
          <ul>{subjects.map((sub, j) => <li key={j}>{sub}</li>)}</ul>
        </div>
      ))}
    </div>
  );
}

export default App;
