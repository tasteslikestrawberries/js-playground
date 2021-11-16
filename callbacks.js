//callbacks showcase

const posts = [
  { title: "Post 1", body: "This is post one" },
  { title: "Post 2", body: "This is post two" },
];

//mimicking fetching from a server
function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML += output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

//calling function
createPost({ title: "Post 3", body: "This is post three" }, getPosts);
