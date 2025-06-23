function soNguyenTo(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

let count = 0;
let num = 2;
while (count < 20) {
  if (soNguyenTo(num)) {
    console.log(num);
    count++;
  }
  num++;
}
// console.log(num);
