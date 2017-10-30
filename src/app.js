const fs = require('fs');

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile('/path/to/file', callback);
}

const timeoutScheduled = Date.now();          // <-先進行排程
setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`${delay}ms have passed since I was scheduled`);
}, 1); // <- timeout設成1ms

console.log('hahaha i still early 你看看你'); // <- 進行嘲諷

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  //do nothing, about < 2ms 
});