const mainElement = document.querySelector("#blog-posts");

const displayBlogPosts = () => {
  const posts = JSON.parse(localStorage.getItem("blogPosts")) || [];

  if (posts.length === 0) {
    const noPostsMessage = document.createElement("p");
    noPostsMessage.textContent = "No Blog posts yet...";
    mainElement.appendChild(noPostsMessage);
    return;
  }

  posts.forEach((post) => {
    const postContainer = document.createElement("div");
    const postTitle = document.createElement("h2");
    const postAuthor = document.createElement("p");
    const postContent = document.createElement("p");

    postTitle.textContent = post.title;
    postAuthor.textContent = `By: ${post.username}`;
    postContent.textContent = post.content;

    postContainer.classList.add("post");
    postContainer.appendChild(postTitle);
    postContainer.appendChild(postAuthor);
    postContainer.appendChild(postContent);

    mainElement.appendChild(postContainer);
  });
};

const backButton = document.getElementById("back");

backButton.addEventListener("click", () => {
  window.location.href = "index.html";
});

displayBlogPosts();
