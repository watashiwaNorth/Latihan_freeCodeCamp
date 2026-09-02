const moodData = [
  {
    mood: "marah",
    keywords: ["marah", "kesal", "emosi", "betmen", "geram", "sebel"],
    rekomendasi: "Coba belajar teknik pernapasan atau meditasi sebentar, lalu pelajari hal ringan seperti CSS animation untuk menyalurkan emosi."
  },
  {
    mood: "senang",
    keywords: ["senang", "gembira", "bahagia", "happy", "ceria", "riang"],
    rekomendasi: "Mood-mu sedang bagus! Manfaatkan untuk belajar konsep yang menantang seperti JavaScript closures atau React hooks."
  },
  {
    mood: "sedih",
    keywords: ["sedih", "sedang down", "murung", "galau", "kecewa", "sendu"],
    rekomendasi: "Pelajari hal yang menyenangkan dan kreatif, misalnya membuat gambar dengan p5.js atau belajar UI design."
  },
  {
    mood: "capek",
    keywords: ["capek", "lelah", "letih", "ngantuk", "penat", "kelelahan"],
    rekomendasi: "Istirahat dulu sejenak, atau tonton video tutorial singkat tentang topik ringan seperti tips produktivitas."
  },
  {
    mood: "pusing",
    keywords: ["pusing", "bingung", "stuck", "mentok", "mumet", "kebingungan"],
    rekomendasi: "Saatnya mundur sebentar. Belajar konsep dasar yang sudah kamu kuasai untuk membangun kembali kepercayaan diri."
  },
  {
    mood: "semangat",
    keywords: ["semangat", "antusias", "termotivasi", "bersemangat", "excited", "bergairah"],
    rekomendasi: "Momentum bagus! Mulai proyek kecil atau pelajari topik baru yang selama ini kamu tunda."
  }
];

let inputMood = "";
document.querySelectorAll(".mood-btn").forEach(button =>{
    button.addEventListener("click", function() {
        inputMood = this.dataset.mood;
        document.getElementById("mood-input").value = inputMood;
    });
});

document.getElementById("moodInput").addEventListener("input", function() {
    inputMood = this.value.toLowerCase();
});

function periksaMood() {
    const mood = inputMood.trim().toLowerCase();
    const hasilDiv = document.getElementById("hasil");

    if (mood === "") {
        hasilDiv.textContent = "😅 Pilih atau tulis dulu mood-mu ya!";
        return;
    }

    const found = moodData.find(item => item.keywords.some(keyword => mood.includes(keyword)));
    
    if(found) {
        hasilDiv.innerHTML = `<strong> Mood: $${found.mood}</strong><br>${found.rekomendasi}`;
    } else {
        hasilDiv.textContent = "🤔 Mood tidak dikenali. Coba kata lain seperti: marah, senang, sedih, capek, pusing, semangat.";
    }
}

document.getElementById("btnPeriksa").addEventListener("click", periksaMood);