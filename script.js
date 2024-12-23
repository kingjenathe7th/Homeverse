const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    window.scrollY >= 400 ? header.classList.add("active")
        : header.classList.remove("active");
});

let sections = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");
const sidebar = document.querySelector('.sidebar');
const menuBar = document.querySelector('.menu-bar');
const sidebarCloseBtn = document.querySelector('.close-sidebar-btn');
const sidebarMenuItems = document.querySelectorAll('.sidebar a');

window.onscroll = () => {
    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id')
        if (top >= offset && top < offset + height) {
            menu.forEach((link) => {
                link.classList.remove("active");
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            })
        };
    });
};


menuBar.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

sidebarCloseBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

sidebarMenuItems.forEach(item => {
    item.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
});

