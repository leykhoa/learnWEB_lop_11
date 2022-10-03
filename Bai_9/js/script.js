//khai bao mang
/*
    var
    let
    const
*/

const numbers = [7, 8, 2.3, -1, 11, 22, 123];
const obj = [
	{ name: 'Khoa', age: 18 },
	{ name: 'Cường', age: 15 },
	{ name: 'Quốc', age: 8 },
];

const text = 'Hello world!';
console.log('check number', numbers);
console.log('check number ', numbers[1]);
console.log('check text ', text);
console.log('check text  --', text[1]);
console.log('check obj  --', obj[2].name);

//index = array.length - 1

//3. Các phương thức với mảng
const fruits = ['banana', 'lemon', 'orange', 'cherry'];
console.log('check fruits before sort()', fruits);

fruits.sort();
numbers.sort((a, b) => b - a);
console.log('check fruits after sort()', fruits);
console.log('check number after sort()', numbers);

fruits.push(2);
console.log('check fruits after push()', fruits);

var newObj = obj.concat(numbers);
console.log('check obj after concat()', newObj);

//Tìm hiểu thêm pop(), shift(), unshift()

for (let i = 0; i < newObj.length; i++) {
	console.log('gia tri i', i);
	if (i == 4) {
		break;
	}
	console.log('phan tu newObj dung break', newObj[i]);
}

for (let i = 0; i < newObj.length; i++) {
	console.log('gia tri i', i);
	if (i == 4) {
		continue;
	}
	console.log('phan tu newObj dung contiune', newObj[i]);
}
let sum = 0;
for (let i = 0; i < 10; i++) {
	sum = sum + 1;
	console.log('gia tri i', i);
	console.log('phan tu sum', sum);
}

const fruits2 = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log('check fruits2', fruits2);
fruits2.reverse();
console.log('check fruits2 after reverse', fruits2);
let i = 2;
do {
	console.log('i', i);
	i++;
} while (i < 5);
fruits2.forEach((fruit) => console.log('fruit', fruit));
//map()
