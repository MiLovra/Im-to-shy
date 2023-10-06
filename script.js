document.addEventListener("DOMContentLoaded", function () {
    const lanjutkanButton = document.getElementById("lanjutkanButton");
    const ceritaBox = document.getElementById("ceritaBox");

    // Daftar cerita visual novel
    const ceritaVisualNovel = [
        //awal nyaa
        "haii nesss...",
        "hmm gimana mulainya yaa 😅",
        "gimana kabarmu ness?? wkkwkw",
        "Aku pengen ngomong sesuatu sama kmu ness",
        "Mumpung masih bisa ketemu dan mungkin ini kesempatan yang terakhir",
        "Gak ketemu juga sihh sebenernya wkkwk 😅",
        "Jadi gini ness.....",
        "Aku sebenernya suka sama kmu 😊😊😊",
        "Aneh yaa tiba2 aku ngomong suka sama kmu",
        "Mungkin aku terlalu malu nesss 😌 dan bingung aja harus gimana ngedeketin kmu wkwk",
        "Soalnya aku gak jago buat deketin cewek ness..",
        "Gimana yaa bingung juga jelasinnya wkwk",
        "Aku suka sama kmu udah lama banget ness dan bntar lagi kan mungkin gak ketemu lagi",
        "Jadi aku mikirnya yaa ini kesempatan yang gaakan dateng lagi ",
        "Takut nnti pas kita gak ketemu lagi aku masih kepikiran kmu wkkwk",
        //tahap 1
        "Ceritanya panjang sih kalo gimana aku awal suka sama kmu😅",
        "Boleh aku cerita?? 😁 ",
        "Hmm dulu tuh apa kmu masih inget waktu kita ada acara yang ke villa itu, acaranya pembubaran hma itu",
        "Inget juga gak waktu kita mau pulang",
        "Waktu aku main sama kucing itu pas di ruang tamu kalo gak salah",
        "Kan kmu dateng tuh ikutan juga main kucing",
        "Nah, pas disitu kayak ada yang aneh gitu aku nya",
        "Aku tiba2 kayak nglamun trus mikir (anj Agnes kok manis banget hari ini😳)",
        "Dan waktu di rumah juga masih kepikiran, sampe sekarang masih kepikiran juga akunya wkkwk 😅",
        "Yaa semenjak itu aku kayak mikir gitu bisa gak yaa kalo aku ngedeketin kmu gitu..",
        "Tapi ya gitu kan aku gak berani buat ngawali atau mulai deketin kmu",
        "Dan yaa aku masih kalah sama keberanianku 😓😓",
        "hmmm.......",
        "Maaf yaa ness emang aneh aku wkwk",
        "Mungkin itu aja sih yang mau aku omongin",
        "Kmu gak perlu njawab kok gappa, aku cuman mau keluarin perasaanku yang dah lama terpendam sihh",
        "Aseeeekkkk wkkwkwk 😅",
        "Mungkin kalo dapet kesempatan dari kmu buat deketin",
        "Yaa mau banget aku hehe 😊",
        "Masih banyak sih yang mau ceritain ke kmu",
        "Tapi cerita tadi udah mewakili lah tentang yang mau aku omongin ke kmu ness",
        "Makasih yaa udah dengerin aku cerita panjang banget",
        "Dan yaaa aku berdoa semoga kmu selalu bahagia nnti ness",
        "Makasihh yaaaa ness 😊",

    ];

    // Indeks cerita saat ini
    let indeksCerita = 0;

    // Fungsi untuk menampilkan cerita berikutnya
    function tampilkanCeritaBerikutnya() {
        if (indeksCerita < ceritaVisualNovel.length) {
            ceritaBox.innerHTML = `<p>${ceritaVisualNovel[indeksCerita]}</p>`;
            indeksCerita++;
        } else {
            ceritaBox.innerHTML = "<p>Bye Bye 👋😘</p>";
        }
    }
    

    
    // Menambahkan event listener ke tombol "Lanjutkan"
    lanjutkanButton.addEventListener("click", function () {
        tampilkanCeritaBerikutnya();
    });
});