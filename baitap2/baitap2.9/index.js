let a = parseFloat(prompt("nhap vao canh a: "));
let b = parseFloat(prompt("nhap vao canh b: "));
let c = parseFloat(prompt("nhap vao canh c: "));
function tamGiac(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    if (a + b > c && a + c > b && b + c > a) {
      alert(`canh a, b,c la ba canh cua 1 tam giac.`);
    } else {
      alert(`canh a, b,c khong phai la ba canh cua 1 tam giac.`);
    }
  } else {
    alert("cac canh: a, b, c phai lon hon 0");
  }
}
tamGiac(a, b, c);
