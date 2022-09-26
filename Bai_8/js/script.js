function handleTest(e) {
	document.getElementById('test').style.color = 'green';
	//Code o day
	console.log(e);
}
//arrow function
const printValue = (a) => {
	console.log('check value', a);
};

function getName(name) {
	return 'Your name is ' + name;
}

function infoUser(userName, userAge, userAddress) {
	var info = {
		name: userName,
		age: userAge,
		address: userAddress,
	};
	return info;
}
console.log('printValue', printValue(10));
console.log(getName('Khoa'));
const info = infoUser('Khoa', 27, 'Quang Nam');

console.log(info);

function handleInput() {
	const input1 = document.getElementById('input1').value;
	const input2 = document.getElementById('input2').value;
	const input3 = document.getElementById('input3').value;
	console.log('log value: ', input1);
	console.error('Error value: ', input2);
	console.warn('Warn value: ', input3);
}

function handleOnChange() {
	const value = document.getElementById('on-change').value;
	console.log('check value', value);
}
function handleMouseOver() {
	var block1 = document.getElementById('block-1');
	if (block1.style.backgroundColor !== 'orange') {
		block1.style.backgroundColor = 'orange';
	} else {
		block1.style.backgroundColor = 'green';
	}
}
function handleMouseOver2() {
	var block2 = document.getElementById('block-2');
	console.log(block2.style.width);
	if (block2.style.width !== '700px') {
		block2.style.width = '700px';
	} else {
		block2.style.width = '200px';
	}
}

//This
var firstName = 'Khang';

const person = {
	firstName: 'John',
	lastName: 'Doe',
	id: 5566,
	fullName: function () {
		return this.firstName;
	},
};

console.log('check name', person.fullName());

function ArrayChallenge(arr) {
	arr.sort((a, b) => b - a);
	let sum = 0;
	for (let i = 0; i <= 3; i++) {
		sum = sum + arr[i];
	}

	// code goes here
	return sum;
}

console.log(ArrayChallenge([0, 0, 2, 3, 7, 1]))[(0, 0, 2, 3, 7, 1)];
