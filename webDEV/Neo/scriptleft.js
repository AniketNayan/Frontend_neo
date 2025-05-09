// Smooth Scroll to Drag and Drop Section
function scrollToSection() {
    document.getElementById("drag-drop-container").scrollIntoView({ behavior: "smooth" });
}

// Drag and Drop Functionality
const draggables = document.querySelectorAll(".draggable");
const rightBox = document.getElementById("right-box");

draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
    });
});

rightBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggedItem = document.querySelector(".dragging");
    if (draggedItem) {
        rightBox.appendChild(draggedItem);
    }
});
