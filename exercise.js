document.addEventListener("DOMContentLoaded", () => {
    // Add To Plan Button
    document.querySelectorAll(".add-to-plan").forEach(button => {
        button.addEventListener("click", () => {
            alert("Added to your plan!");
        });
    });

    // Join Session Button
    document.querySelectorAll(".join-session").forEach(button => {
        button.addEventListener("click", () => {
            window.open("https://example.com/m33eeting-link", "_blank");
        });
    });

    // Favourite Heart Toggle
    document.querySelectorAll(".heart").forEach(heart => {
        heart.addEventListener("click", () => {
            heart.classList.toggle("active");
            heart.style.color = heart.classList.contains("active") ? "red" : "black";
        });
    });
});
