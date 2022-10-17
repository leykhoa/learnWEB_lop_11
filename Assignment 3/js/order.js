function handleSubmit() {
	const cakeName = document.getElementById('cake-name').value;
	const yourName = document.getElementById('name').value;
	const message = document.getElementById('message').value;

	const date = document.getElementById('deliver-date').value;
	const messageDeliver = document.getElementById('deliver-to').value;
	const data = {
		cakeName: cakeName,
		date: date,
		messageDeliver: messageDeliver,
		message: message,
		yourName: yourName,
	};
	console.log(data);

	const today = new Date().getTime();
	const convertDate = new Date(date).getTime();
	console.log('check date and today', today, convertDate);
	if (convertDate < today) {
		alert('Please chose a date after today');
	}
}

function handleOnChange() {
	const cakeName = document.getElementById('cake-name').value;
	console.log('into', cakeName);
	const img = document.getElementById('img-cake');
	if (cakeName == 0) {
		img.src = '';
		alert('Please choose a cake');
	}
	if (cakeName == 1) {
		img.src = '../images/yellow-cake-chocolate-frosting-1.jpg';
	}
}
