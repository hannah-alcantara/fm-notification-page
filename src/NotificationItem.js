import { useState } from "react";
import "./NotificationItem.css";

function NotificationItem() {
  const [notifications, setNotifications] = useState([
    {
      id: "1",
      author: {
        name: "Mark Webber",
        src: "images/avatar-mark-webber.webp",
        href: "#",
      },
      action: "reacted to your recent post",
      link: {
        text: "My first tournament today!",
        href: "#",
      },
      time: "1m ago",
      isRead: true,
    },
    {
      id: "2",
      author: {
        name: "Angela Gray",
        src: "images/avatar-angela-gray.webp",
        href: "#",
      },
      action: "followed you",
      time: "5m ago",
      isRead: true,
    },
    {
      id: "3",
      author: {
        name: "Jacob Thompson",
        src: "images/avatar-jacob-thompson.webp",
        href: "#",
      },
      action: "has joined your group",
      link: {
        text: "Chess Club",
        href: "#",
      },
      time: "1 day ago",
      isRead: true,
    },
    {
      id: "4",
      author: {
        name: "Rizky Hasanuddin",
        src: "images/avatar-rizky-hasanuddin.webp",
        href: "#",
      },
      action: "sent you a private message",
      time: "5 days ago",
      privateMessage:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      isRead: false,
    },
    {
      id: "5",
      author: {
        name: "Kimberly Smith",
        src: "images/avatar-kimberly-smith.webp",
        href: "#",
      },
      action: "commented on your picture",
      image: "images/image-chess.webp",
      time: "1 week ago",
      isRead: false,
    },
    {
      id: "6",
      author: {
        name: "Nathan Peterson",
        src: "images/avatar-nathan-peterson.webp",
        href: "#",
      },
      action: "reacted to you recent post",
      link: {
        text: "5 end-game strategies to increase your win rate",
        href: "#",
      },
      time: "2 weeks ago",
      isRead: false,
    },
    {
      id: "7",
      author: {
        name: "Anna Kim",
        src: "images/avatar-anna-kim.webp",
        href: "#",
      },
      action: "left the group",
      link: {
        text: "Chess Club",
        href: "#",
      },
      time: "2 weeks ago",
      isRead: false,
    },
  ]);

  function markAllUnread() {
    setNotifications((prev) =>
      prev.map((data) => ({ ...data, isRead: false }))
    );
  }

  function handleNotificationClick(id) {
    setNotifications((prev) =>
      prev.map((data) => (data.id === id ? { ...data, isRead: false } : data))
    );
  }
  return (
    <div className="container">
      <header>
        <div className="title">
          <h1>Notifications</h1>
          <span className="counter">
            {notifications.filter((data) => data.isRead).length}
          </span>
        </div>
        <button className="mark-button" id="mark" onClick={markAllUnread}>
          Mark all as read
        </button>
      </header>

      <div className="notif-container">
        {notifications &&
          notifications.map((data) => (
            <div
              className="wrapper"
              key={data.id}
              onClick={() => handleNotificationClick(data.id)}
              data-unread={data.isRead}
            >
              <img
                className="profile-pic"
                href={data.author.href}
                src={data.author.src}
                alt={data.author.name}
              />
              <div className="notif">
                <div className="notif-content">
                  <a className="author" href={data.author.href}>
                    {data.author.name}
                  </a>
                  <span className="action">{data.action}</span>
                  {data.link && (
                    <a className="post" href={data.link.href}>
                      {data.link.text}
                    </a>
                  )}
                  {data.isRead && <span className="isRead"></span>}
                  {data.image && <img className="picture" src={data.image} />}
                </div>
                {data.privateMessage && (
                  <p className="private-message">{data.privateMessage}</p>
                )}
                <p className="time">{data.time}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default NotificationItem;
