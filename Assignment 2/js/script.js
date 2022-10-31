function handleClickMenu() {
	const btn = document.querySelector('.btn-menu');
	const menu = document.getElementById('menu-ul');
	if (menu.style.display === 'none') {
		menu.style.display = 'block';
	} else {
		menu.style.display = 'none';
	}
}
