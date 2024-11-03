import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/data');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <p>Data from the server: {data.message}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;