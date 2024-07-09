import React, { useState } from 'react';
import notificationsData from './notification';
import Notification from './notification.jsx';

const NotificationList = () => {
  const [notifications, setNotifications] = useState(notificationsData);

  const clearNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div>
      <h1>Notifications ({notifications.length})</h1>
      <button onClick={clearAllNotifications}>Clear All</button>
      <div className="notification-list">
        {notifications.map((notification) => (
          <Notification key={notification.id} notification={notification} onClear={clearNotification} />
        ))}
      </div>
    </div>
  );
};

export default NotificationList;
