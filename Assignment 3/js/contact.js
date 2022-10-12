function handleSubmit() {
	const userName = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const errorName = document.getElementById('error-name');
	const errorEmail = document.getElementById('error-email');
	const dataForm = { name: userName, email: email };
	const error = validation(dataForm);
	if (error.isError) {
		errorName.innerHTML = error.name;
		errorEmail.innerHTML = error.email;
	} else {
		alert('Submit success!');
	}
}

function validation(data) {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let error = { name: '', email: '', isError: false };

	if (data.name.length > 10) {
		error.name = 'Your name should not exceed 10 characters.';
		error.isError = true;
	}
	if (!data.name) {
		error.name = 'Please fill out your name';
		error.isError = true;
	}

	if (data.email.length > 10) {
		error.email = 'Your email should not exceed 10 characters.';
		error.isError = true;
	}
	if (!data.email.match(mailformat)) {
		error.email = 'Your email should a email!';
		error.isError = true;
	}
	if (!data.email) {
		error.email = 'Please fill out your email';
		error.isError = true;
	}

	return error;
}
