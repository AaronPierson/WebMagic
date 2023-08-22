<template>
    <div class="terminal">
      <div class="terminal-output">
        <div v-for="line in lines" :key="line">{{ line }}</div>
      </div>
      <div class="terminal-intro">{{ intro }}</div>

      <div class="terminal-input">
        <span class="terminal-prompt">$</span>
        <input type="text" v-model="input" @keyup.enter="handleInput" />
      </div>
    </div>
  </template>
  
<script>
  export default {
    data() {
      return {
        input: '',
        intro: 'Type a command...',
        lines: []
      }
    },
    methods: {
    async  handleInput() {
        this.intro = ''
        const validCommands = ["contact", "help", "play", "quit", "about"];
        if (validCommands.includes(this.input.toLowerCase())) {
            if (this.input.toLowerCase() === "contact") {
                this.lines.push("> Contact Information:");
                this.lines.push("> Email: example@example.com");
                this.lines.push("> Phone: 123-456-7890");
            } else if (this.input.toLowerCase() === "help") {
                this.lines.push("> Available commands: contact, help, play, quit");
            } else if (this.input.toLowerCase() === "play") {
                this.lines.push("> You're now playing an imaginary game!");
            } else if (this.input.toLowerCase() === "quit") {
                this.lines.push("> Thanks for playing! Have a great day!");
            } else if (this.input.toLowerCase() === "about" ){
                 // Fetch the content of the about.md file
                const about = await  this.$content('about').fetch()
                
                // Split the content into lines
                const lines = about.text.split('\n')
                
                // Push each line to the lines array
                for (const line of lines) {
                    this.lines.push(line)
                }

            }
        } else {
            // Display a gaming-themed error message
            this.lines.push("> Error: Command not recognized. Are you in the right game?");
        }
        // Push the user's input to the lines array
        // this.lines.push("> " . this.input)
        // Clear the input
        this.input = ''        
        }    
    }
}
</script>
  
  <style scoped>
  .terminal {
    font-family: 'Courier New', monospace;
    background-color: black;
    color: white;
  }
  
  .terminal-output {
    white-space: pre-wrap;
  }
  
  .terminal-input {
    display: flex;
  }
  
  .terminal-prompt {
    margin-right: 0.5rem;
  }
  
  input[type='text'] {
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
  }
</style>
  