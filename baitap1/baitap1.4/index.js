let number1 = parseInt(prompt("moi ban nhap vao so nguyen thu nhat: "));
let number2 = parseInt(prompt("moi ban nhap vao so nguyen thu hai: "));
let number3 = parseInt(prompt("moi ban nhap vao so nguyen thu ba: "));

function max(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}
let maxNumber = max(number1, number2, number3);
alert("so lon nhat trong ba so la: " + maxNumber);
