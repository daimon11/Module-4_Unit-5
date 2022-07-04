const isPrime = () => {
  const num = +prompt('Введите число: ', '');
  const newNum = Math.abs(num);
  let flag = true;
  for (let i = 2; i < newNum; i++) {
    if (newNum % i == 0) {
      return false;
    }
  }
return newNum > 1;
}

console.log(isPrime());