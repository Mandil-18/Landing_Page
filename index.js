document.addEventListener("DOMContentLoaded", function () {
    // Code to execute after the document has finished loading

    // Example: Show an alert when a blog segment is clicked
    const segments = document.querySelectorAll(".segment");
    segments.forEach(function (segment) {
      segment.addEventListener("click", function () {
        const segmentId = this.id;
        alert("You clicked on segment: " + segmentId);
      });
    });

    // Example: Toggle visibility of news items
    const newsToggle = document.getElementById("news-toggle");
    const newsItems = document.querySelectorAll(".news-item");
    newsToggle.addEventListener("click", function () {
      newsItems.forEach(function (item) {
        item.classList.toggle("hidden");
      });
    });
  });