document.getElementById("getText").addEventListener("click", getText);
document.getElementById("getUsers").addEventListener("click", getUsers);
document.getElementById("getPosts").addEventListener("click", getPosts);
document.getElementById("addPost").addEventListener("submit", addPost);

// funkcija gauti data is txt failo ir parodyti data kaip div innerHTML

function getText() {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("output").innerHTML = data;
    })
    .catch((err) => {
      console.log(err);
    });
}

// funkcija gauti data is json failo ir parodyti data kaip div innerHTML

function getUsers() {
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>Users</h2>";
      data.forEach((user) => {
        output += `
          <ul class="list-group mb-5">
              <li class='list-group-item'>ID: ${user.id}</li>
              <li class='list-group-item'>Name: ${user.name}</li>
              <li class='list-group-item'>Email: ${user.email}</li>
              </ul>

          `;
      });

      document.getElementById("output").innerHTML = output;
    });
}

// funkcija gauti data is third party saito ir parodyti data kaip div innerHTML

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>Posts</h2>";
      data.forEach((post) => {
        output += `
          <div class='card-card-body mb-3'>
              <h3>${post.id}</h3>
              <h3>${post.title}</h3>
              <h3>${post.body}</h3>

          </div>

          `;
      });

      document.getElementById("output").innerHTML = output;
    });
}

function addPost(e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      accept: "application/json, text/plain, */*",
      "Content-type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
