import React from 'react';

const Notification = ({ notification, onClear }) => {
  return (
    <div className="notification">
      <p><strong>{notification.name}</strong>: {notification.message}</p>
      <button onClick={() => onClear(notification.id)}>Clear</button>
    </div>
  );
};

export default Notification;
