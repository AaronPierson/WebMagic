// readTime.js
export function calculateReadTime(content) {
    const wordsPerMinute = 200; // Adjust this value according to your content.
    const words = content.split(/\s+/).length;
    const minutes = words / wordsPerMinute;
  
    return Math.ceil(minutes);
  }
  