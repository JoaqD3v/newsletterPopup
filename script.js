document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("newsletter-popup");
  const closeBtn = document.getElementById("close-popup");

  // Show the popup when the page loads
  popup.style.display = "block";

  // Close the popup when the close button is clicked
  closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
  });

  // You can also close the popup when the user subscribes (you'll need to implement this logic)
  const subscribeForm = document.querySelector("form");
  subscribeForm.addEventListener("submit", function (e) {
      e.preventDefault();
      // Add your subscription logic here
      // After a successful subscription, you can hide the popup
      popup.style.display = "none";
  });
});
