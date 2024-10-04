function calculateLove() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;

    if (name1 === "" || name2 === "") {
        document.getElementById("result").textContent = "Please input your name!";
        return;
    }

    // Algoritma sederhana buat menghitung "persentase cinta"
    let loveScore = Math.floor(Math.random() * 101);

    // Tampilkan hasilnya
    document.getElementById("result").textContent = `${name1} 💖 ${name2} Cocok ${loveScore}% in love! 💖💖💖`;
}