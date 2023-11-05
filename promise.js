// Create Promise
const p = new Promise(function (resolve, reject) {
  // Some Async Task
  // ....
  setTimeout(() => {
    // resolve(1); // pending => resolve, fulfilled
    reject(new Error("Message")); // pending => rejected
  }, 2000);
});

//  Consume Promise
p.then((res) => {
  console.log("Result", res);
}).catch((err) => {
  console.log("Error", err.message);
});
