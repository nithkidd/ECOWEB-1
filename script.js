const searchContainer = document.querySelector(".search-container");
const searchInput = document.querySelector(".search-input");

// Show search container when there's text
searchInput.addEventListener("input", () => {
    if (searchInput.value.trim()) {
        searchContainer.classList.add("active");
    } else {
        searchContainer.classList.remove("active");
    }
});
