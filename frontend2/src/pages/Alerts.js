import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { toast, ToastContainer } from 'react-toastify';

const socket = io.connect("http://localhost:5000");

function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    socket.on("receive_alert", (alert) => {
      setAlerts((prevAlerts) => [...prevAlerts, alert]);
      toast.info(`New Alert: ${alert.description}`);
    });
  }, []);

  return (
    <div>
      <h2>Alerts</h2>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>{alert.description}</li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
}

export default Alerts;
