console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
/*
-------first exercixe-------

const newPost = document.createElement("post");
newPost.classList.add("post");
newPost.textContent = "I'm another toast social media post.";
body.append(newPost);

const newPostContent = document.createElement("post__content");
newPostContent.classList.add("post__content");
article.append(newPostContent);

const newPostFooter = document.createElement("post__footer");
newPostFooter.classList.add("post__footer");
article.append(newPostFooter);

const newPostUsername = document.createElement("post__username");
newPostUsername.classList.add("post__username");
article.append(newPostUsername);

const newButton = document.createElement("post__button");
newButton.classList.add("post__button");
article.append(newButton);
*/

const newPost = document.createElement("article");
newPost.classList.add("post");
document.body.append(newPost);

const newPostContent = document.createElement("p");
newPostContent.classList.add("post__content");
newPostContent.textContent =
  "Another social media post, reproduced by DOM manipulation in JavaScript.";
newPost.append(newPostContent);

const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");
newPost.append(newPostFooter);

const newPostUsername = document.createElement("span");
newPostUsername.classList.add("post__username");
newPostUsername.textContent = "@anotherusername";
newPostFooter.append(newPostUsername);

const newButton = document.createElement("button");
newButton.classList.add("post__button");
newButton.textContent = "♥♥ Like";
newPostFooter.append(newButton);

newButton.addEventListener("click", handleLikeButtonClick);
