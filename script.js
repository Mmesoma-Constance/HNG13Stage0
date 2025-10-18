function updateTime() {
  const now = new Date();
  document.getElementById("utc-time").textContent =
    "Current Local Time: " + now.toLocaleTimeString();
}

updateTime();
setInterval(updateTime, 1000);
