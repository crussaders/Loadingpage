document.addEventListener('DOMContentLoaded', function() {
    const loadButton = document.getElementById('loadButton');
    const loaderOverlay = document.getElementById('loaderOverlay');
  
    loadButton.addEventListener('click', function() {
      loaderOverlay.style.display = 'flex'; // Show loading overlay
  
      setTimeout(function() {
        // Redirect to another page after 3000ms (3 seconds)
        window.location.href = 'default.html';
      }, 3000);
    });
  });
  