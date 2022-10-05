const userName = 'Khoale';

if (!userName.includes('le')) {
	//ket qua true
	alert('Hello');
}

if (!(userName.length >= 6)) {
	//ket qua true
	alert(userName);
}

// if (userName.length >= 6 && userName.includes('3le')) {
// 	//ket qua true
// 	alert(userName);
// } else {
// 	//ket qua false
// 	alert('Không thỏa điều kiện');
// }

if (userName.length >= 6 && userName.includes('3le')) {
	//ket qua true
	alert(userName);
} else if (userName.length <= 6) {
	//ket qua false
	// alert('Length bé hơn 6');
} else {
	// alert('Length lớn hơn 6');
}
const number = document.getElementById('check-number');
const numberOutPut = document.getElementById('number-output');
function handleCheck() {
	console.log('check number', number.value);
	let answer;
	switch (+number.value) {
		case 10:
			answer = 'Mười';
			break;
		case 5:
			answer = 'Năm';
			break;
		default:
			answer = 'Not 5 or 10';
	}
	numberOutPut.innerHTML = answer;
}

const animals = ['cat', 'dog', 'cow', 'sheep', 'duck', 'dog', 'dog', 'cat', 'dog'];
let countDog = 0;
let countCat = 0;
for (let i = 0; i < animals.length; i++) {
	if (animals[i] === 'dog') {
		countDog++;
	} else if (animals[i] === 'cat') {
		countCat++;
	}
}

console.log('Dogs: ', countDog);
console.log('Cats: ', countCat);

const fruits = ['banana', 'orange', 'lemon'];

fruits.length >= 3 ? console.log('Fruit 3th', fruits[2]) : console.log('No fruit at 3th');

function orderMyLogic(val) {
	if (val < 5) {
		return 'Less than 5';
	} else if (val < 10) {
		return 'Less than 10';
	} else {
		return 'Greater than or equal to 10';
	}
}

console.log(orderMyLogic(8));

function checkNumber(val) {
	let result = '';
	switch (val) {
		case 1:
		case 2:
		case 3:
			result = '1, 2, or 3';
			break;
		case 4:
			result = '4 alone';
	}
	return console.log('result: ', result);
}
checkNumber(3);
