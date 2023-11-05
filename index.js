console.log("Before");
getUser(1, (user) => {
  getRepository(user.name, (repo) => {
    console.log(repo);
  });
});

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
