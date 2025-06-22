//giai phuong trinh bac 1
let a = parseFloat(prompt("moi ban nhap he so a: "));
let b = parseFloat(prompt("moi ban nhap he so b: "));
function giaiPhuongTrinhBac1(a, b) {
  if (a === 0) {
    if (b === 0) {
      return "phuong trinh co vo so nghiem.";
    } else if (b !== 0) {
      return "phuong trinh vo nghiem.";
    }
  } else {
    let x = -b / a;
    return `phuong trinh co nghiem la x = ${x}`;
  }
}
alert(giaiPhuongTrinhBac1(a, b));
