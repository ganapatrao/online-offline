import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
import ShowOnlineOffileAnimation from "./onlineOfflineAnim";

function useOnlineStatus() {
  const [online, setOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setOnline(true);
    }

    function handleOffline() {
      setOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return online;
}

function OnlineOffline() {
  const online = useOnlineStatus();
  let message;
  console.log(online);
  if (online) {
    message = "Online";
    // toast("Online");
  } else {
    message = "Network is down";
    // toast("Offline");
  }

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        margin: "10px",
        display: "flex",
        alignItems: "center",
        width: "400px",
        height: "400px",
        backgroundColor: "#cbf5ef",
      }}
    >
      <div> {message}</div>
      <ShowOnlineOffileAnimation online={online} />
    </div>
  );
}

export default OnlineOffline;
