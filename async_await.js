console.log("Before");
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     });
//   });
// });

//  Promise base Approach

// getUser(1)
//   .then((user) => getRepositories(user.name))
//   .then((repos) => getCommits(repos[0]))
//   .then((commits) => console.log(commits))
//   .catch((err) => console.error("Error: ", err)); // Single error handeller for all the async operations.

// Async Await Approach

async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.name);
    const commit = await getCommits(repos[0]);
    console.log(commit);
  } catch (err) {
    console.log("Error", err.message);
  }
}

//  When using async await, need to wrap code in try catch block.
displayCommits();

console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "mosh" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      //   reject(new Error("Couldn't get repositories'"));
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["commit"]);
    }, 2000);
  });
}
