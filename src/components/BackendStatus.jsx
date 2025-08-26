import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';

const BackendStatus = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkBackendStatus = async () => {
      try {
        setLoading(true);
        const statusData = await apiService.getStatus();
        setStatus(statusData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setStatus(null);
      } finally {
        setLoading(false);
      }
    };

    checkBackendStatus();
  }, []);

  if (loading) return <div>Checking backend status...</div>;
  if (error) return <div>Backend Error: {error}</div>;

  return (
    <div className="backend-status">
      <h3>Backend Status</h3>
      <p>Status: {status?.status}</p>
      <p>Uptime: {status?.uptime} seconds</p>
      <p>Team ID: {status?.teamId}</p>
      {status?.services && (
        <div>
          <h4>Services:</h4>
          <ul>
            {Object.entries(status.services).map(([service, state]) => (
              <li key={service}>{service}: {state}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BackendStatus;
