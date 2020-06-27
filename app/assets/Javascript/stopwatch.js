
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('startStop').addEventListener('click', main_stopWatch);
  document.getElementById('clear').addEventListener('click', clear_stopWatch);

  let isStarted = false, stopTime, startTime, pendTime = 0, stopWatchId;
  let disp = document.getElementById('display');
  let startStop = document.getElementById('startStop');

  function main_stopWatch() {
    isStarted = !isStarted;
    isStarted ? start_stopWatch() : stop_stopWatch();
  }

  function start_stopWatch() {
    startStop.innerHTML = 'ストップ';
    dispTime();
    stopWatchId = setInterval(dispTime, 1);
  }

  function dispTime() {
    startTime = startTime || Date.now();
    stopTime = Date.now() - startTime + pendTime;
    disp.innerHTML = (stopTime / 1000).toFixed(3);
  }

  function stop_stopWatch() {
    startStop.innerHTML = 'スタート';
    clearInterval(stopWatchId);
    startTime = null;
    pendTime = stopTime;
  }

  function clear_stopWatch() {
    stop_stopWatch();
    pendTime = 0;
    disp.innerHTML = '0.000';
  }
})

if (window.localStorage) {
	document.getElementById("result1").innerHTML = "ローカルストレージは使えます";
}
if (window.sessionStorage) {
	document.getElementById("result2").innerHTML = "セッションストレージは使えます";
} 