const num = +prompt('Введите число: ', '');
const newNum = Math.abs(num);

const isPrime = () => {
  let flag = true;
  for (let i = 2; i < newNum; i++) {
    if (newNum % i == 0) {
      flag = false;
      break;
    }
  }
  console.log(flag);
}

isPrime();