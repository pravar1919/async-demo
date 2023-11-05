const p1 = new Promise((resolve) => {
  console.log("Async 1...");
  setTimeout(() => {
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve) => {
  console.log("Async 2...");
  setTimeout(() => {
    resolve(2);
  }, 2000);
});

Promise.all([p1, p2]).then((res) => console.log(res)); // gives the result collectively.
// If any of the promise get an error, it results in complete error...

// Promise.race([p1, p2]).then((res) => console.log(res));
