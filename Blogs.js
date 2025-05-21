// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  // Select all Edit and Delete buttons
  const editButtons = document.querySelectorAll('.edit-btn');
  const deleteButtons = document.querySelectorAll('.delete-btn');

  // Loop through each Edit button
  editButtons.forEach((editBtn) => {
    editBtn.addEventListener('click', () => {
      const post = editBtn.closest('.blog-post');
      const title = post.querySelector('h2');
      const content = post.querySelector('p');

      // Prompt user for new title and content
      const newTitle = prompt('Edit the title:', title.textContent);
      if (newTitle !== null && newTitle.trim() !== '') {
        title.textContent = newTitle.trim();
      }

      const newContent = prompt('Edit the content:', content.textContent);
      if (newContent !== null && newContent.trim() !== '') {
        content.textContent = newContent.trim();
      }
    });
  });

  // Loop through each Delete button
  deleteButtons.forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', () => {
      const post = deleteBtn.closest('.blog-post');
      const confirmDelete = confirm('Are you sure you want to delete this blog post?');

      if (confirmDelete) {
        post.remove();
      }
    });
  });
});
