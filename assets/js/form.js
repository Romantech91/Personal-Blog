const form = document.querySelector('form');

const handleFormSubmit = (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  if (!username || !title || !content) {
    alert("Please complete the form.");
    return;
  }

  const blogPost = { username, title, content };

  const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  posts.push(blogPost);
  localStorage.setItem('blogPosts', JSON.stringify(posts));

  redirectPage('blog.html');
};

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

form.addEventListener('submit', handleFormSubmit);
