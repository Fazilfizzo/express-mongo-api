import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [nodeId, setNodeId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('');
  const apiUrl = import.meta.env.VITE_API_URL

  // Fetch node ID when component mounts
  useEffect(() => {
    // 1. First try to get own frontend ID (from build-time env)
    if (import.meta.env.VITE_NODE_ID) {
      setNodeId(import.meta.env.VITE_NODE_ID);
      return;
    }
    
    // 2. Fallback to API header
    const fetchNodeId = async () => {
      const res = await fetch('/api/node');
      setNodeId(res.headers.get('X-Node-ID') || 'unknown');
    };
    fetchNodeId();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    setError('');
    setActiveTab('students');
    try {
      const response = await fetch(`${apiUrl}/api/students`);
      if (!response.ok) throw new Error('Failed to fetch students');
      
      const result = await response.json();
      setStudents(result.data || result); // Handle both formats
      setSubjects([]); // Clear subjects data
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchSubjects = async () => {
    setLoading(true);
    setError('');
    setActiveTab('subjects');
    try {
      const response = await fetch(`${apiUrl}/api/subjects`);
      if (!response.ok) throw new Error('Failed to fetch subjects');
      
      const result = await response.json();
      setSubjects(result.data || result); // Handle both formats
      setStudents([]); // Clear students data
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
          <button onClick={fetchStudents} disabled={loading}>
            Students
          </button>
          <button onClick={fetchSubjects} disabled={loading}>
            Courses
          </button>
        </div>
        
        {loading && <p>Loading...</p>}
        {error && <p className="error">Error: {error}</p>}
        
        <div className="data-container">
          {activeTab === 'students' && students.length > 0 && (
            <>
              <h2>Students List</h2>
              <ul>
                {students.map((student, index) => (
                  <li key={index}>
                    {student.name} - {student.enrolledProgram || student.program}
                  </li>
                ))}
              </ul>
            </>
          )}
          
          {activeTab === 'subjects' && subjects.length > 0 && (
            <>
              <h2>Software Engineering Courses</h2>
              <ul>
                {subjects.map((subject, index) => (
                  <li key={index}>
                    {subject.name} - Year {subject.year}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;