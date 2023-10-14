<template>
    <div class="blog">
    <h1 class="blog-header">My Adventure Log</h1>
    <p>Dive into my web development journey through blog posts and tales from the digital realm.</p>
    <Blog />
    </div>
</template>

<style scoped>
.blog {
    margin: 2em 5%;
}
a{
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
}

a:hover {
  color: #884e19; /* Change color on hover */
}


/* For screens with a maximum width of 768px, show the sidebar */
@media screen and (max-width: 768px) {

/* Adjust header text size */
h1, h2, h3 {
  font-size: 1em;
}

p{
  font-size: .8em;
}

a {
  font-size: 0.7em; /* Reduce font size for links */
  font-weight: bold;
}

}
</style>