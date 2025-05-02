document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
        if (thumbnailElement.className == "small") {
            thumbnailElement.className = "";
        } else {
            thumbnailElement.className = "small";
        }
      });

    function showTab(tabId) {
        const contents = document.querySelectorAll(".tab-content");
        const buttons = document.querySelectorAll(".tab-button");
        // Initialized, add all tabs to "hidden" class 
        contents.forEach(content => content.classList.add("hidden"));
        // empty 'active' button class
        buttons.forEach(button => button.classList.remove("active"));
        // Remove selected tab from "hiden"
        document.getElementById(tabId).classList.remove("hidden");
        // Selected button added to 'active' class
        event.currentTarget.classList.add("active");
    }
      
});


