function filterMenu(category) {
    let items = document.querySelectorAll(".item");

    items.forEach(item => {
        if (category === "all") {
            item.style.display = "block";
        } else {
            if (item.classList.contains(category)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        }
    });
}
const cards = document.querySelectorAll('.menu-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('hovered'));
    card.addEventListener('mouseleave', () => card.classList.remove('hovered'));
});
