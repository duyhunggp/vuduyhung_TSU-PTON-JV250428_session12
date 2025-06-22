let age;
do {
  age = prompt("nhap 1 so tuoi nao do:");
  age = parseInt(age);
  if (age > 0 && age < 120) {
    alert(`${age} la so tuoi hop le.`);
    break;
  } else {
    alert("so tuoi khong hop le. vui long nhap lai so tuoi!");
  }
} while (true);
