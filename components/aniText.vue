<template>
    <p id="animated-text"></p>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        typingSpeed: {
            type: Number,
            required: false,
            default: 50
        }
    },
  mounted() {
    // Get the text element
    const textElement = document.getElementById('animated-text')
    
    // Set the text content
    const text = this.text
    
    // Set the typing speed
    const typingSpeed = this.typingSpeed
    
    // Initialize the character index
    let charIndex = 0
    
    // Create a function to type out the text
    const typeText = () => {
      // Check if there are more characters to type
      if (charIndex < text.length) {
        // Add the next character to the text element
        textElement.textContent += text.charAt(charIndex)
        
        // Increment the character index
        charIndex++
        
        // Schedule the next character to be typed
        setTimeout(typeText, typingSpeed)
      }
    }
    
    // Start typing the text
    typeText()
  }
}
</script>

<style>
/* Add styles for the blinking cursor */
#animated-text:after {
  content: '|';
  animation: blink 1s steps(1) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>