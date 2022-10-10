const name2 = document.getElementById('name');
const email = document.getElementById('email').value;
const password2 = document.getElementById('password').value;

function handleClick() {
	console.log('check name, email', name2.value, email);
}
function handleOnchange() {
	console.log(
		'check name',
		name3,
		'check age',
		age3,
		'check email',
		email3,
		'check password',
		password3,
	);
	console.log('check password', password, 'passsword 2', password2);
}
function handleSubmit() {
	const name1 = document.getElementById('name1').value;
	const email1 = document.getElementById('email1').value;
	const password1 = document.getElementById('password1').value;
	const birth1 = document.getElementById('birth1').value;

	const errorName = document.getElementById('error-name');
	console.log('check birth1', birth1);
	if (name1.length < 5 || name1.length > 20) {
		errorName.innerHTML = ' Name should be between 5 and 20 characters';
	} else {
		errorName.innerHTML = '';
	}
	if (!name1) {
		errorName.innerHTML = ' Name should fill out';
	} else {
		errorName.innerHTML = '';
	}
}

const name3 = document.getElementById('name1').value;
const age3 = document.getElementById('age1').value;
const email3 = document.getElementById('email1').value;
const password3 = document.getElementById('password1').value;
const birth3 = document.getElementById('birth1').value;
