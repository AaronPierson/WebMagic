<template>
    <div>
    <!-- Social links -->
    <div class="social-links">
        <!-- <h2>Connect with Me</h2> -->
        <!-- <nuxt-picture src="/img/raven.webp" width="250" height="200" /> -->
        <div>
            <button>
                <a href="https://github.com/AaronPierson" class="social-icon">
                    <Icon :name="'uil:github'" size="24"/>
                </a>
            </button>
            <button>
                <a href="https://www.linkedin.com/in/aaron-pierson/" class="social-icon">
                    <Icon :name="'mdi:linkedin'" size="24" />
                </a>
            </button>
            <button>
                <a href="mailto:contact@aaronpierson.me" class="social-icon">
                <Icon :name="'mdi:email'" size="24" />
                <!-- <Icon :name="'game-icons:raven'" size="24" /> -->
                </a>
            </button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped >
  button {
    /* Remove background color */
    background-color: transparent;
    /* padding: 10px 20px; */
    /* border: ; */
    border-radius: 15%; /* Make the buttons round */
    cursor: pointer;
    margin-right: 5px;
    transition: background-color 0.3s;
  }

  button:hover {
    /* Background color on hover */
    background-color: rgba(255, 255, 255, 0.9); /* Add a slight blue background on hover */
  }

  /* Adjust margins and padding as needed */
  .social-icon {
    display: inline-block;
    margin: 10px;
  }

  a {
    color: #333;
    text-decoration: none;
  }
</style>