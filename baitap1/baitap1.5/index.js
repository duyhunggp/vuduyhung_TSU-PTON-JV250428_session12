let diemKiemTra = parseFloat(prompt("nhap diem kiem tra: "));
let diemGiuaKi = parseFloat(prompt("nhap diem giua ki: "));
let diemCuoiKi = parseFloat(prompt("nhap diem cuoi ki: "));

let diemTrungBinh = (diemKiemTra + diemGiuaKi * 2 + diemCuoiKi * 3) / 6;
function xepLoaiHocLuc() {
  if (diemTrungBinh >= 9) {
    alert("loai xuat sac");
  } else if (diemTrungBinh >= 8) {
    alert("xep loai gioi");
  } else if (diemTrungBinh >= 6.5) {
    alert("xep loai kha");
  } else if (diemTrungBinh >= 5) {
    alert("xep loai trung binh");
  } else {
    alert("xep loai yeu");
  }
}
xepLoaiHocLuc();
