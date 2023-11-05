console.log("Before");
getUser(1, getUserForRepo);

function getUserForRepo(user) {
  getRepository(user.name, displayRepository);
}
function displayRepository(commits) {
  getCommits(commits, displayCommits);
}
function displayCommits(commits) {
  console.log(commits);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading from db...");
    callback({ id: id, name: "Pravar" });
  }, 2000);
}

console.log("After");

function getRepository(username, callback) {
  setTimeout(() => {
    console.log(`Getting Data from Github for ${username}...`);
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log(`Getting Data for ${repo} repo!`);
    callback({ id: 123, name: repo });
  }, 2000);
}
