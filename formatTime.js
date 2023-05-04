function formatTime(seconds) {
  if (seconds > 359999 || seconds < 0 || isNaN(seconds)) {
    return "Invalid input";
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const hh = hours < 10 ? "0" + hours : hours;
  const mm = minutes < 10 ? "0" + minutes : minutes;
  const ss = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
  // Time and Space complexity is O(1) due to constant time operations
  return `${hh}:${mm}:${ss}`;
}

/* Test Cases */
console.log(formatTime(3661)); // Expected output: "01:01:01"
console.log(formatTime(0)); // Expected output: "00:00:00"
console.log(formatTime(360000)); // Expected output: "Invalid input"
console.log(formatTime(-100)); // Expected output: "Invalid input"
console.log(formatTime("abc")); // Expected output: "Invalid input"
