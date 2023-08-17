const icon = document.querySelector("ri-menu-3-line");
const dropdown = document.querySelector("nav-part2");

icon.addEventListener('click', () => {
    // Toggle the 'active' class on the dropdown content
    dropdown.classList.toggle('active');
});