//promises showcase
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//mimicking fetching from a server
const posts = [
  { title: "Post 1", body: "This is post one" },
  { title: "Post 2", body: "This is post two" },
];

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

createPost({
  title: "Post 3",
  body: "This is post 3",
})
  .then(getPosts)
  .catch((err) => console.log(err));

//Promise.all() showcase
const promise1 = Promise.resolve("Hello world");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);

/*The simplest use of fetch() takes one argument — the path to the resource you want to fetch — 
and does not directly return the JSON response body but instead returns a promise that 
resolves with a Response object.
The Response object, in turn, does not directly contain the actual JSON response body 
but is instead a representation of the entire HTTP response. So, to extract the JSON body 
content from the Response object, we use the json() method, which returns a second promise 
that resolves with the result of parsing the response body text as JSON.*/
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
