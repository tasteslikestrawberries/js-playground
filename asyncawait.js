//async / await showcase

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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: something went wrong!");
      }
    }, 2000);
  });
}

//async / await is a more elegant way to handle promises
/* async function init() {
  //waiting for this call to be done
  await createPost({
    title: "Post 3",
    body: "This is post 3",
  });
  //so we can move on and call this:
  getPosts();
}

init(); */

//async / await with fetch (fetch api )
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();
  console.log(data);
}

fetchUsers();
