console.log("Script Praktikum Dijalankan!");

// Tangkap elemen dari HTML
const elNama = document.getElementById("nama-mhs");
const elNilai = document.getElementById("nilai-mhs");
const elStatus = document.getElementById("status-kelulusan");

// Ambil input
const inputNama = document.getElementById("input-nama");
const inputNilai = document.getElementById("input-nilai");

// Saat tombol diklik
document.getElementById("submit-btn").addEventListener("click", function() {
  const namaMahasiswa = inputNama.value;
  const nilai = parseInt(inputNilai.value);

  // Tampilkan nama & nilai
  elNama.textContent = namaMahasiswa;
  elNilai.textContent = nilai;

  // Logika kelulusan
  let pesanStatus = "";
  let isLulus = false;

  if (nilai >= 75) {
    pesanStatus = "Selamat, Anda Dinyatakan LULUS!";
    isLulus = true;
  } else {
    pesanStatus = "Tetap Semangat, Anda HARUS Mengulang.";
    isLulus = false;
  }

  // Tampilkan status
  elStatus.textContent = pesanStatus;

  // Ganti warna status
  if (isLulus) {
    elStatus.style.color = "green";
    elStatus.style.fontWeight = "bold";
  } else {
    elStatus.style.color = "red";
    elStatus.style.fontWeight = "bold";
  }
});
