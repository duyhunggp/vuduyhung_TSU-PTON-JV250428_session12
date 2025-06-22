let a = parseFloat(prompt("moi ban nhap so a: "));
let b = parseFloat(prompt("moi ban nhap so b: "));
let c = parseFloat(prompt("moi ban nhap so c: "));

function giaiPhuongTrinhBac2(a, b, c) {
  if (a === 0) {
    if (b === 0) {
      if (c === 0) {
        alert("phuong trinh co vo so nghiem.");
      } else {
        alert("phuong trinh vo nghiem.");
      }
    } else {
      let x = -c / b;
      alert(`phuong trinh bac nhat. co nghiem x = ${x}`);
    }
  } else {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
      alert("phuong trinh vo nghiem.");
    } else if (delta === 0) {
      let x = -b / (2 * a);
      alert(`phuong trinh co nghiem kep x = ${x}`);
    } else {
      let x1 = (-b + Math.sqrt(delta)) / (2 * a);
      let x2 = (-b - Math.sqrt(delta)) / (2 * a);
      alert(`phuong trinh co 2 nghiem phan biet la: x1 = ${x1} va x2 = ${x2}`);
    }
  }
}
giaiPhuongTrinhBac2(a, b, c);
