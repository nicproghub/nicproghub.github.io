document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
        if (thumbnailElement.className == "small") {
            thumbnailElement.className = "";
        } else {
            thumbnailElement.className = "small";
        }
      });

    // Show first tab by default
    showTab(1);
      
});


// Make showTab available globally
function showTab(tabId, event) {
    const contents = document.querySelectorAll(".tab-content");
    const buttons = document.querySelectorAll(".tab-button");
    
    // Hide all tab contents
    contents.forEach(content => content.classList.add("hidden"));
    
    // Remove active class from all buttons
    buttons.forEach(button => button.classList.remove("active"));
    
    // Show selected tab
    const tabToShow = document.getElementById(tabId);
    if (tabToShow) {
        tabToShow.classList.remove("hidden");
    }
    
    // Add active class to clicked button
    if (event) {
        event.target.classList.add("active");
    }
}

