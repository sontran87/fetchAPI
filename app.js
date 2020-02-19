document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExteral);

// Get data from local text file
function getText() {
  fetch('test.txt')
    .then(res => res.text())
    .then(function(result) {
      document.getElementById('output').innerHTML = result;
    })
    .catch(err => console.log(`Error: ${err} Some thing went wrong`));
}

// Get data from local JSON file
function getJson() {
  fetch('sample.json')
    .then(res => res.json())
    .then(function(post) {
      let output = '';
      post.forEach(function(item) {
        output += `<li>${item.title}</>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(`Error: ${err} Some thing went wrong`));
}

// Get data from exteral API
function getExteral() {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(function(users) {
      let output = '';
      users.forEach(function(user) {
        output += `<li>${user.login}</>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(`Error: ${err} Some thing went wrong`));
}
