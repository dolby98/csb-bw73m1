let timerId;
function startPressed() {
  let date = document.getElementById("time").value;
  clearInterval(timerId);
  let timerInterval = setInterval(() => {
    let current = new Date();
    let target = new Date(date);
    // console.log(current);
    // console.log(target);
    let timeLeft = target.getTime() - current.getTime();
    if (timeLeft < 0) {
      clearInterval(timerId);
      document.getElementById("days").innerText = "N.A";
      document.getElementById("hours").innerText = "N.A";
      document.getElementById("mins").innerText = "N.A";
      document.getElementById("sec").innerText = "N.A";
    } else {
      let days = timeLeft / (1000 * 60 * 60 * 24);
      let hours = (days - Math.floor(days)) * 24;
      let minutes = (hours - Math.floor(hours)) * 60;
      let seconds = (minutes - Math.floor(minutes)) * 60;
      document.getElementById("days").innerText = Math.floor(days);
      document.getElementById("hours").innerText = Math.floor(hours);
      document.getElementById("mins").innerText = Math.floor(minutes);
      document.getElementById("sec").innerText = Math.floor(seconds);
    }
  }, 1000);
  timerId = timerInterval;
}
