const menu = document.getElementById('menu-ul');
const btn = document.getElementById('btn-menu');

function handleClickMenu() {
	if (menu.style.display !== 'block') {
		menu.style.display = 'block';
	} else {
		menu.style.display = 'none';
	}
}
document.addEventListener('click', (event) => {
	const parent = event.target.closest('nav');
	if ((!parent && menu.style.display === 'block') || event.target.getElementById('btn-menu')) {
		menu.style.display = 'none';
	}
});
