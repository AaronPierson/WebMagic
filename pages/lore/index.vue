<template>
    <div class="books">
      <h1>Lore</h1>
      <p>Here is where you can find the lore of the world. Books collected over the years.</p>
      <div class="books-grid">
        <!-- Magnus book of lore -->
        <div class="chapter">
          <h2 class="chapter-title"><NuxtLink to="/lore/aaron">Aaron</NuxtLink></h2>
          <p class="chapter-description">
            🔮🌠 My journey through the mystical realms of web development has been nothing short of magical. With a trusty staff in one hand and a keyboard in the other, I have ventured through the ever-evolving landscapes of code, harnessing the arcane powers of PHP, C#, and JavaScript.
          </p>
        </div>

        <div class="chapter">
          <h2 class="chapter-title"><NuxtLink to="/lore/magnus">Magnus</NuxtLink></h2>
          <p class="chapter-description">
            Behold, a scholarly tapestry woven through ages, where knowledge is the guiding star and code is the ancient language. In Magnus's Chronicles, delve into the meticulous accounts of web development's history, its evolution, and the secrets buried deep within its virtual realm.
          </p>
        </div>
        
        <!-- Raelin book of lore -->
        <!-- <div class="chapter">
          <h2 class="chapter-title"><NuxtLink to="/lore/raelin">Raelin</NuxtLink></h2>
          <p class="chapter-description">
            Join Raelin on an epic journey where the web is a canvas, and developers, modern bards. In Raelin's Ballads, stories of heroics are spun from code, and the digital world comes alive with creativity. These are tales of the web's magic, where innovation and artistry meet in a harmonious symphony.
          </p>
        </div> -->
      </div>

    </div>
  </template>

  <style scoped>
    .chapter {
      background: #f6ead4; /* Parchment-like background color */
      border: 2px solid #d4a35a; /* Subtle border */
      border-radius: 10px;
      padding: 20px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      text-align: left;
      color: #333; /* Adjust text color for readability */
      margin-bottom: 20px; /* Space between book descriptions */
    }
  
    .chapter-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  
    .chapter-description {
      font-size: 18px;
      line-height: 1.4;
      margin: 0;
    }

    .books-grid {
      /* Use CSS Grid to control the layout of the books */
      display: grid;
      /* 300px minmax ensures that the grid items are not squished too small */
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      /* 20px grid gap to add space between the books */
      grid-gap: 20px;
    }

    
.books {
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

    .landing-page {
      margin: 2em 5%;
    }

    /* Adjust header text size */
    h1, h2, h3 {
      font-size: 1em;
    }

    p{
      font-size: .8em;
    }

    .introduction{
      font-size: .8em;
    }

    .chapter-title {
    font-size: 1.2em; /* Reduce font size for chapter titles */
  }

    .chapter-description {
      font-size: 0.7em; /* Reduce font size for chapter descriptions */
      /* Prevent text from wrapping to the next line */
      /* white-space: nowrap;  */
      /* Hide any overflow */
      /* overflow: hidden;  */
      /* Show ellipsis for truncated text */
      /* text-overflow: ellipsis;  */
    }

    a {
      font-size: 0.7em; /* Reduce font size for links */
      font-weight: bold;
    }

    .books-grid {
      /* Use CSS Grid to control the layout of the books */
      display: grid;
      /* 300px minmax ensures that the grid items are not squished too small */
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      /* 20px grid gap to add space between the books */
      grid-gap: 10px;
    }

  }
</style>
  