// Sample data for the blog posts

const blogPosts = [
    {
      likes: 0,
    },
    {
      likes: 0,
    },
    {
      likes: 0,
    },
    {
      likes: 0,
    },
    {
      likes: 0,
    },
  
    // Add more blog posts here
  ];
  
  // Function to update the number of likes and display it
  function likePost(postIndex) {
    blogPosts[postIndex].likes++;
    const likeCountElement = document.getElementById(`likeCount${postIndex}`);
    likeCountElement.textContent = `Likes: ${blogPosts[postIndex].likes}`;
  }
  