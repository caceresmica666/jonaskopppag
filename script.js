// Agregar evento de scroll para mostrar el menú fijo
window.addEventListener('scroll', function() {
	var menu = document.querySelector('header');
	var navbarHeight = menu.offsetHeight;
	if (window.scrollY > 200 + navbarHeight) {
		menu.style.position = 'fixed';
		menu.style.top = navbarHeight + 'px';
	} else {
		menu.style.position = 'relative