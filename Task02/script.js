const isPrime = (num) => {
  const newNum = Math.abs(num);
  for (let i = 2; i < newNum; i++) {
    if (newNum % i == 0) {
      return false;
    }
  }
return newNum > 1;
}

console.log(isPrime(17));