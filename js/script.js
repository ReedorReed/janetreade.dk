// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

function toggleMenu() {
	hamburger.classList.toggle('active');
	nav.classList.toggle('active');
	overlay.classList.toggle('active');

	//Prevent body scroll when menu is open
	document.body.style.overflow = nav.classList.contains('active')
		? 'hidden'
		: '';
}

//Close menu function
function closeMenu() {
	hamburger.classList.remove('active');
	nav.classList.remove('active');
	overlay.classList.remove('active');
	document.body.style.overflow = '';
}

//Eventlisteners
hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', closeMenu);

//Close menu when clicking on nav links
const navLinks = nav.querySelectorAll('a');
navLinks.forEach((link) => {
	link.addEventListener('click', closeMenu);
});

//Close menu with esc key
document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape') {
		closeMenu();
	}
});

//Close menu if resize window
window.addEventListener('resize', function () {
	if (window.innerWidth <= 1024) {
		closeMenu();
	}
});
