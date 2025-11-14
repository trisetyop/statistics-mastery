import type { QuizTopic } from '@/types';
const questionsPart1 = [
  {
    id: 'q1',
    question: 'Ilmu yang mempelajari cara pengumpulan, pengolahan, penyajian, dan analisis data, serta penarikan kesimpulan berdasarkan data tersebut adalah...',
    options: ['Matematika', 'Probabilitas', 'Statistika', 'Metodologi Penelitian'],
    correctAnswer: 2,
  },
  {
    id: 'q2',
    question: 'Metode statistika yang berfungsi untuk meringkas, mengatur, dan menyajikan data dalam bentuk tabel, grafik, atau ringkasan numerik tanpa melakukan generalisasi terhadap populasi disebut...',
    options: ['Statistika Inferensia', 'Statistika Deskriptif', 'Statistika Parametrik', 'Statistika Non-parametrik'],
    correctAnswer: 1,
  },
  {
    id: 'q3',
    question: 'Ukuran tendensi sentral yang merupakan nilai tengah dari data yang telah diurutkan adalah...',
    options: ['Mean (Rata-rata)', 'Median', 'Modus (Mode)', 'Jangkauan (Range)'],
    correctAnswer: 1,
  },
  {
    id: 'q4',
    question: 'Nilai yang paling sering muncul dalam suatu himpunan data disebut...',
    options: ['Mean', 'Median', 'Modus', 'Kuartil'],
    correctAnswer: 2,
  },
  {
    id: 'q5',
    question: 'Ukuran tendensi sentral yang paling sensitif atau paling terpengaruh oleh nilai ekstrem (outlier) adalah...',
    options: ['Mean', 'Median', 'Modus', 'Persentil'],
    correctAnswer: 0,
  },
  {
    id: 'q6',
    question: 'Selisih antara nilai maksimum dan nilai minimum dalam suatu set data disebut...',
    options: ['Varians', 'Simpangan Baku', 'Jangkauan (Range)', 'Jangkauan Antar Kuartil (IQR)'],
    correctAnswer: 2,
  },
  {
    id: 'q7',
    question: 'Statistika yang bertujuan untuk menarik kesimpulan atau membuat generalisasi mengenai karakteristik populasi berdasarkan informasi dari sampel disebut...',
    options: ['Statistika Deskriptif', 'Statistika Matematika', 'Statistika Inferensia', 'Analisis Data'],
    correctAnswer: 2,
  },
];
const questionsPart2 = [
  {
    id: 'q8',
    question: 'Nilai probabilitas suatu kejadian A, yang dinotasikan sebagai P(A), selalu berada dalam rentang...',
    options: ['0 ≤ P(A) ≤ 1', '-1 ≤ P(A) ≤ 1', 'P(A) > 0', '0 ≤ P(A) ≤ 100'],
    correctAnswer: 0,
  },
  {
    id: 'q9',
    question: 'Dalam pelemparan sebuah dadu bersisi enam yang seimbang, peluang munculnya mata dadu angka 5 adalah...',
    options: ['1/2', '1/3', '1/5', '1/6'],
    correctAnswer: 3,
  },
  {
    id: 'q10',
    question: 'Jika A dan B adalah dua kejadian yang saling lepas (mutually exclusive), maka peluang terjadinya A atau B, P(A ∪ B), adalah...',
    options: ['P(A) + P(B)', 'P(A) × P(B)', 'P(A) + P(B) - P(A ∩ B)', 'P(A) | P(B)'],
    correctAnswer: 0,
  },
  {
    id: 'q11',
    question: 'Jika A dan B adalah dua kejadian yang independen (bebas), maka peluang terjadinya A dan B bersamaan, P(A ∩ B), adalah...',
    options: ['P(A) + P(B)', 'P(A) × P(B)', 'P(A) + P(B) - P(A ∩ B)', '0'],
    correctAnswer: 1,
  },
  {
    id: 'q12',
    question: 'Peluang kejadian A terjadi dengan syarat kejadian B telah terjadi sebelumnya, P(A|B), disebut...',
    options: ['Peluang Gabungan', 'Peluang Irisan', 'Peluang Bersyarat', 'Peluang Saling Lepas'],
    correctAnswer: 2,
  },
  {
    id: 'q13',
    question: 'Jika peluang tim A menang pertandingan adalah 0.4, maka peluang tim A tidak menang (kalah atau seri) adalah...',
    options: ['0.4', '0.6', '1.0', '0.0'],
    correctAnswer: 1,
  },
  {
    id: 'q14',
    question: 'Dua koin dilempar bersamaan. Peluang munculnya minimal satu sisi "Gambar" adalah...',
    options: ['1/4', '1/2', '3/4', '1'],
    correctAnswer: 2,
  },
];
const questionsPart3 = [
  {
    id: 'q15',
    question: 'Suatu fungsi yang memetakan setiap hasil dalam ruang sampel ke bilangan real disebut...',
    options: ['Variabel Acak', 'Fungsi Peluang', 'Ruang Sampel', 'Kejadian'],
    correctAnswer: 0,
  },
  {
    id: 'q16',
    question: 'Jumlah kecelakaan yang terjadi di sebuah persimpangan dalam sebulan adalah contoh dari...',
    options: ['Variabel Acak Kontinu', 'Variabel Acak Diskrit', 'Variabel Kualitatif', 'Variabel Nominal'],
    correctAnswer: 1,
  },
  {
    id: 'q17',
    question: 'Waktu tempuh seorang mahasiswa dari rumah ke kampus adalah contoh dari...',
    options: ['Variabel Acak Kontinu', 'Variabel Acak Diskrit', 'Variabel Ordinal', 'Variabel Independen'],
    correctAnswer: 0,
  },
  {
    id: 'q18',
    question: 'Untuk variabel acak diskrit, fungsi yang memberikan nilai peluang untuk setiap nilai yang mungkin dari variabel acak tersebut disebut...',
    options: ['Fungsi Densitas Peluang (PDF)', 'Fungsi Distribusi Kumulatif (CDF)', 'Fungsi Massa Peluang (PMF)', 'Nilai Harapan'],
    correctAnswer: 2,
  },
  {
    id: 'q19',
    question: 'Nilai rata-rata tertimbang dari semua kemungkinan nilai variabel acak, di mana bobotnya adalah peluangnya masing-masing, dikenal sebagai...',
    options: ['Varians', 'Modus', 'Nilai Harapan (Expected Value)', 'Median'],
    correctAnswer: 2,
  },
  {
    id: 'q20',
    question: 'Distribusi peluang diskrit yang paling tepat untuk memodelkan jumlah "sukses" dalam n kali percobaan independen yang identik (percobaan Bernoulli) adalah...',
    options: ['Distribusi Poisson', 'Distribusi Normal', 'Distribusi Binomial', 'Distribusi Uniform'],
    correctAnswer: 2,
  },
  {
    id: 'q21',
    question: 'Distribusi peluang diskrit yang sering digunakan untuk memodelkan jumlah kejadian dalam suatu interval waktu atau ruang tertentu (misal: jumlah panggilan telepon per jam) adalah...',
    options: ['Distribusi Poisson', 'Distribusi Normal', 'Distribusi Binomial', 'Distribusi Hipergeometrik'],
    correctAnswer: 0,
  },
];
const questionsPart4 = [
  {
    id: 'q22',
    question: 'Untuk variabel acak kontinu X, peluang P(X = c) untuk satu nilai c tertentu selalu...',
    options: ['1', '0.5', '0', 'Tergantung pada c'],
    correctAnswer: 2,
  },
  {
    id: 'q23',
    question: 'Fungsi yang digunakan untuk menghitung peluang pada variabel acak kontinu, di mana peluang diwakili oleh luas di bawah kurva, disebut...',
    options: ['Fungsi Massa Peluang (PMF)', 'Fungsi Densitas Peluang (PDF)', 'Fungsi Distribusi Kumulatif (CDF)', 'Histogram'],
    correctAnswer: 1,
  },
  {
    id: 'q24',
    question: 'Karakteristik utama dari kurva Distribusi Normal adalah...',
    options: ['Miring ke kanan (positively skewed)', 'Miring ke kiri (negatively skewed)', 'Simetris dan berbentuk lonceng', 'Memiliki dua puncak (bimodal)'],
    correctAnswer: 2,
  },
  {
    id: 'q25',
    question: 'Distribusi Normal Standar (Distribusi Z) adalah distribusi normal yang memiliki nilai mean (μ) dan simpangan baku (σ) berturut-turut...',
    options: ['μ = 1, σ = 1', 'μ = 0, σ = 1', 'μ = 1, σ = 0', 'μ = 0, σ = 0'],
    correctAnswer: 1,
  },
  {
    id: 'q26',
    question: 'Proses mengubah variabel acak normal X menjadi variabel acak normal standar Z menggunakan rumus transformasi...',
    options: ['Z = (X - σ) / μ', 'Z = X - μ', 'Z = (X - μ) / σ', 'Z = X / σ'],
    correctAnswer: 2,
  },
  {
    id: 'q27',
    question: 'Teorema yang menyatakan bahwa distribusi rata-rata sampel (sampling distribution of the mean) akan mendekati distribusi normal jika ukuran sampel (n) cukup besar, terlepas dari distribusi aslinya, adalah...',
    options: ['Teorema Bayes', 'Hukum Bilangan Besar', 'Teorema Limit Pusat (Central Limit Theorem)', 'Teorema Chebyshev'],
    correctAnswer: 2,
  },
  {
    id: 'q28',
    question: 'Jika X berdistribusi normal dengan μ = 50 dan σ = 10, berapa nilai Z-score untuk X = 70?',
    options: ['1.0', '1.5', '2.0', '-2.0'],
    correctAnswer: 2,
  },
  {
    id: 'q29',
    question: 'Distribusi yang digunakan sebagai pengganti distribusi Z ketika simpangan baku populasi (σ) tidak diketahui dan ukuran sampel (n) kecil adalah...',
    options: ['Distribusi F', 'Distribusi t (Student\'s t)', 'Distribusi Chi-Square (Kai-Kuadrat)', 'Distribusi Poisson'],
    correctAnswer: 1,
  },
];
const questionsPart5 = [
  {
    id: 'q30',
    question: 'Proses menggunakan statistik sampel untuk memperkirakan nilai parameter populasi yang tidak diketahui disebut...',
    options: ['Pengujian Hipotesis', 'Statistika Deskriptif', 'Pengambilan Sampel', 'Pendugaan (Estimasi)'],
    correctAnswer: 3,
  },
  {
    id: 'q31',
    question: 'Rata-rata sampel (x̄) yang digunakan untuk menduga rata-rata populasi (μ) adalah contoh dari...',
    options: ['Penduga Titik (Point Estimate)', 'Penduga Interval (Interval Estimate)', 'Parameter Populasi', 'Hipotesis Nol'],
    correctAnswer: 0,
  },
  {
    id: 'q32',
    question: 'Sebuah rentang nilai yang digunakan untuk menduga parameter populasi, yang disertai dengan tingkat kepercayaan tertentu (misal 95%), disebut...',
    options: ['Penduga Titik', 'Selang Kepercayaan (Confidence Interval)', 'Kesalahan Standar (Standard Error)', 'Margin of Error'],
    correctAnswer: 1,
  },
  {
    id: 'q33',
    question: 'Jika sebuah selang kepercayaan 95% untuk μ adalah [40, 50], interpretasi yang paling tepat adalah...',
    options: ['95% data populasi berada di antara 40 dan 50', '95% data sampel berada di antara 40 dan 50', 'Kita 95% yakin bahwa prosedur yang digunakan menghasilkan interval yang mengandung nilai μ yang sebenarnya', 'Peluang μ berada di antara 40 dan 50 adalah 0.95'],
    correctAnswer: 2,
  },
  {
    id: 'q34',
    question: 'Dalam sebuah selang kepercayaan, setengah dari lebar total interval tersebut disebut...',
    options: ['Tingkat Signifikansi (α)', 'Nilai Kritis', 'Margin of Error', 'Kesalahan Standar'],
    correctAnswer: 2,
  },
  {
    id: 'q35',
    question: 'Simpangan baku dari distribusi sampling rata-rata (x̄) disebut...',
    options: ['Simpangan Baku Populasi (σ)', 'Varians Sampel (s²)', 'Kesalahan Standar (Standard Error, SE)', 'Jangkauan (Range)'],
    correctAnswer: 2,
  },
  {
    id: 'q36',
    question: 'Jika faktor lain tetap sama, memperbesar ukuran sampel (n) akan membuat selang kepercayaan...',
    options: ['Semakin lebar', 'Semakin sempit', 'Tetap sama', 'Tidak dapat ditentukan'],
    correctAnswer: 1,
  },
  {
    id: 'q37',
    question: 'Jika faktor lain tetap sama, menaikkan tingkat kepercayaan (misal dari 95% ke 99%) akan membuat selang kepercayaan...',
    options: ['Semakin lebar', 'Semakin sempit', 'Tetap sama', 'Menjadi 0'],
    correctAnswer: 0,
  },
];
const questionsPart6 = [
  {
    id: 'q38',
    question: 'Pernyataan mengenai parameter populasi yang diasumsikan benar sampai ada bukti statistik yang cukup untuk menolaknya disebut...',
    options: ['Hipotesis Alternatif (H1)', 'Hipotesis Nol (H0)', 'Statistik Uji', 'Tingkat Signifikansi'],
    correctAnswer: 1,
  },
  {
    id: 'q39',
    question: 'Hipotesis yang ingin dibuktikan kebenarannya oleh peneliti (seringkali menyatakan adanya perbedaan, hubungan, atau efek) disebut...',
    options: ['Hipotesis Alternatif (H1 atau Ha)', 'Hipotesis Nol (H0)', 'Parameter', 'Statistik'],
    correctAnswer: 0,
  },
  {
    id: 'q40',
    question: 'Kesalahan yang terjadi ketika kita menolak Hipotesis Nol (H0) padahal H0 tersebut benar adalah...',
    options: ['Kesalahan Tipe I (Type I Error)', 'Kesalahan Tipe II (Type II Error)', 'Power of the test', 'p-value'],
    correctAnswer: 0,
  },
  {
    id: 'q41',
    question: 'Peluang maksimum untuk melakukan Kesalahan Tipe I dalam uji hipotesis dinotasikan sebagai...',
    options: ['α (Alpha)', 'β (Beta)', '1 - α', '1 - β (Power)'],
    correctAnswer: 0,
  },
  {
    id: 'q42',
    question: 'Kesalahan yang terjadi ketika kita gagal menolak Hipotesis Nol (H0) padahal H0 tersebut salah (H1 benar) adalah...',
    options: ['Kesalahan Tipe I (Type I Error)', 'Kesalahan Tipe II (Type II Error)', 'Alpha (α)', 'p-value'],
    correctAnswer: 1,
  },
  {
    id: 'q43',
    question: 'Nilai yang menunjukkan probabilitas mendapatkan hasil statistik uji yang sama atau lebih ekstrem daripada yang diamati, dengan asumsi H0 benar, disebut...',
    options: ['Nilai Kritis', 'Statistik Uji', 'p-value', 'Tingkat Signifikansi'],
    correctAnswer: 2,
  },
  {
    id: 'q44',
    question: 'Aturan pengambilan keputusan yang umum digunakan adalah: Jika p-value lebih kecil dari tingkat signifikansi (α), maka keputusannya adalah...',
    options: ['Tolak H0', 'Gagal Tolak H0 (atau Terima H0)', 'Terima H1', 'Ulangi eksperimen'],
    correctAnswer: 0,
  },
  {
    id: 'q45',
    question: 'Jika seorang peneliti ingin menguji apakah rata-rata (μ) tinggi badan mahasiswa lebih besar dari 165 cm (H1: μ > 165), maka jenis uji yang digunakan adalah...',
    options: ['Uji dua sisi (two-tailed test)', 'Uji sisi kiri (left-tailed test)', 'Uji sisi kanan (right-tailed test)', 'Uji F'],
    correctAnswer: 2,
  },
];
const questionsPart7 = [
  {
    id: 'q46',
    question: 'Uji hipotesis yang digunakan untuk membandingkan rata-rata dua populasi independen dengan varians yang tidak diketahui adalah...',
    options: ['Uji Z', 'Uji t dua sampel independen', 'Uji t berpasangan', 'Uji Chi-Square'],
    correctAnswer: 1,
  },
  {
    id: 'q47',
    question: 'Dalam Analisis Varians (ANOVA), hipotesis nol (H0) yang diuji adalah...',
    options: ['Semua varians populasi sama', 'Semua rata-rata populasi berbeda', 'Setidaknya satu rata-rata populasi berbeda', 'Semua rata-rata populasi sama'],
    correctAnswer: 3,
  },
  {
    id: 'q48',
    question: 'Uji Chi-Square (Kai-Kuadrat) paling sering digunakan untuk...',
    options: ['Menguji hubungan antara dua variabel kategorikal', 'Membandingkan dua rata-rata', 'Memprediksi nilai variabel dependen', 'Mengukur kekuatan hubungan linear'],
    correctAnswer: 0,
  },
  {
    id: 'q49',
    question: 'Jika p-value dari uji F dalam ANOVA lebih kecil dari α, maka kesimpulannya adalah...',
    options: ['Menerima H0', 'Gagal menolak H0', 'Menolak H0, setidaknya ada satu rata-rata yang berbeda', 'Menolak H0, semua rata-rata berbeda'],
    correctAnswer: 2,
  },
  {
    id: 'q50',
    question: 'Uji yang digunakan untuk membandingkan rata-rata sebelum dan sesudah perlakuan pada kelompok yang sama adalah...',
    options: ['Uji t dua sampel independen', 'ANOVA', 'Uji t berpasangan (paired t-test)', 'Uji korelasi'],
    correctAnswer: 2,
  },
];
const questionsPart8 = [
  {
    id: 'q51',
    question: 'Ukuran statistik yang menunjukkan arah dan kekuatan hubungan linear antara dua variabel kontinu adalah...',
    options: ['Koefisien Determinasi (R²)', 'Koefisien Korelasi (r)', 'Slope (b1)', 'Intercept (b0)'],
    correctAnswer: 1,
  },
  {
    id: 'q52',
    question: 'Nilai koefisien korelasi (r) berkisar antara...',
    options: ['0 dan 1', '-1 dan 1', '0 dan tak hingga', '-tak hingga dan tak hingga'],
    correctAnswer: 1,
  },
  {
    id: 'q53',
    question: 'Dalam model regresi linear sederhana Y = b0 + b1X, b1 merepresentasikan...',
    options: ['Nilai Y ketika X = 0', 'Perubahan rata-rata pada Y untuk setiap kenaikan satu unit X', 'Kekuatan hubungan antara X dan Y', 'Proporsi variasi Y yang dijelaskan oleh X'],
    correctAnswer: 1,
  },
  {
    id: 'q54',
    question: 'Koefisien Determinasi (R²) mengukur...',
    options: ['Arah hubungan antara variabel', 'Kekuatan hubungan linear', 'Proporsi variabilitas variabel dependen yang dapat dijelaskan oleh variabel independen', 'Tingkat kesalahan prediksi'],
    correctAnswer: 2,
  },
  {
    id: 'q55',
    question: 'Jika koefisien korelasi (r) mendekati -1, artinya terdapat...',
    options: ['Hubungan positif yang kuat', 'Hubungan negatif yang kuat', 'Tidak ada hubungan', 'Hubungan non-linear'],
    correctAnswer: 1,
  },
];
const questionsPart9 = [
  {
    id: 'q56',
    question: 'Uji statistik yang tidak memerlukan asumsi tentang distribusi populasi (misalnya, normalitas) disebut...',
    options: ['Uji Parametrik', 'Uji Non-parametrik', 'Uji F', 'Uji Z'],
    correctAnswer: 1,
  },
  {
    id: 'q57',
    question: 'Uji Mann-Whitney U adalah alternatif non-parametrik untuk...',
    options: ['Uji t berpasangan', 'Uji t dua sampel independen', 'ANOVA satu arah', 'Uji korelasi Pearson'],
    correctAnswer: 1,
  },
  {
    id: 'q58',
    question: 'Analisis yang digunakan untuk mempelajari data yang dikumpulkan dari waktu ke waktu secara berurutan adalah...',
    options: ['Analisis Regresi', 'Analisis Deret Waktu (Time Series)', 'Analisis Survival', 'Analisis Klaster'],
    correctAnswer: 1,
  },
  {
    id: 'q59',
    question: 'Dalam Pengendalian Kualitas Statistik (SQC), diagram yang digunakan untuk memantau variabilitas proses dari waktu ke waktu adalah...',
    options: ['Diagram Pareto', 'Diagram Pencar', 'Diagram Kontrol (Control Chart)', 'Histogram'],
    correctAnswer: 2,
  },
  {
    id: 'q60',
    question: 'Uji Kruskal-Wallis adalah alternatif non-parametrik untuk...',
    options: ['Uji t dua sampel independen', 'Uji Chi-Square', 'ANOVA satu arah', 'Regresi Linear'],
    correctAnswer: 2,
  },
];
const questionsPart10 = [
  {
    id: 'q61',
    question: 'Sebuah uji klinis obat baru menemukan p-value 0.03 saat membandingkan efektivitasnya dengan plasebo. Interpretasi yang paling tepat adalah...',
    options: ['Obat tersebut 97% efektif', 'Ada kemungkinan 3% bahwa obat tersebut tidak efektif', 'Jika H0 (tidak ada efek) benar, ada 3% kemungkinan mengamati hasil seekstrem ini karena kebetulan', 'Ada 3% kesalahan dalam penelitian'],
    correctAnswer: 2,
  },
  {
    id: 'q62',
    question: 'Selang kepercayaan 95% untuk rata-rata penurunan tekanan darah oleh obat X adalah [8, 12] mmHg. Ini berarti...',
    options: ['95% pasien akan mengalami penurunan antara 8 dan 12 mmHg', 'Kita 95% yakin bahwa rata-rata penurunan tekanan darah sebenarnya di populasi berada antara 8 dan 12 mmHg', 'Peluang rata-rata penurunan tekanan darah adalah 95%', 'Obat ini tidak efektif untuk 5% populasi'],
    correctAnswer: 1,
  },
  {
    id: 'q63',
    question: 'Dalam konteks tes diagnostik penyakit, Kesalahan Tipe I (menolak H0 yang benar) berarti...',
    options: ['Mendiagnosis orang sehat sebagai sakit (positif palsu)', 'Mendiagnosis orang sakit sebagai sehat (negatif palsu)', 'Hasil tes tidak meyakinkan', 'Tes tersebut tidak valid'],
    correctAnswer: 0,
  },
  {
    id: 'q64',
    question: 'Dalam konteks tes diagnostik penyakit, Kesalahan Tipe II (gagal menolak H0 yang salah) berarti...',
    options: ['Mendiagnosis orang sehat sebagai sakit (positif palsu)', 'Mendiagnosis orang sakit sebagai sehat (negatif palsu)', 'Hasil tes terlalu sensitif', 'Tes tersebut tidak spesifik'],
    correctAnswer: 1,
  },
  {
    id: 'q65',
    question: 'Seorang peneliti ingin membandingkan efektivitas tiga jenis diet (A, B, C) terhadap penurunan berat badan. Metode statistik yang paling sesuai adalah...',
    options: ['Uji t dua sampel', 'Analisis Varians (ANOVA)', 'Uji Chi-Square', 'Regresi Linear'],
    correctAnswer: 1,
  },
  {
    id: 'q66',
    question: 'Perbedaan mendasar antara studi observasional dan studi eksperimental (uji klinis acak terkontrol) adalah...',
    options: ['Studi observasional lebih murah', 'Studi eksperimental dapat membuktikan hubungan sebab-akibat', 'Studi observasional menggunakan sampel yang lebih besar', 'Studi eksperimental tidak memiliki kelompok kontrol'],
    correctAnswer: 1,
  },
  {
    id: 'q67',
    question: 'Dalam merancang uji klinis, meningkatkan ukuran sampel (n) akan...',
    options: ['Meningkatkan kemungkinan Kesalahan Tipe I', 'Menurunkan power statistik dari uji', 'Mempersempit selang kepercayaan dan meningkatkan power', 'Menghilangkan kebutuhan akan kelompok plasebo'],
    correctAnswer: 2,
  },
  {
    id: 'q68',
    question: 'Odds Ratio (OR) sebesar 2.5 dalam sebuah studi kasus-kontrol berarti...',
    options: ['Risiko penyakit 2.5 kali lebih tinggi pada kelompok terpapar', 'Peluang (odds) terpapar 2.5 kali lebih tinggi pada kelompok kasus dibandingkan kelompok kontrol', 'Penyakit tersebut 2.5 kali lebih parah', '250% dari kelompok terpapar akan sakit'],
    correctAnswer: 1,
  },
  {
    id: 'q69',
    question: 'Analisis survival sering digunakan dalam penelitian medis untuk...',
    options: ['Menganalisis kualitas hidup pasien', 'Membandingkan biaya pengobatan', 'Menganalisis data waktu-hingga-kejadian (misal: waktu hingga kematian atau kambuh)', 'Menguji prevalensi penyakit'],
    correctAnswer: 2,
  },
  {
    id: 'q70',
    question: 'Nilai p-value yang sangat kecil (misal, p < 0.001) tidak selalu berarti...',
    options: ['Hasilnya signifikan secara statistik', 'H0 harus ditolak', 'Efek yang diamati besar atau penting secara klinis', 'Hasilnya tidak mungkin terjadi karena kebetulan'],
    correctAnswer: 2,
  },
];
const questionsPart11 = [
  {
    id: 'q71',
    question: 'Sebuah perusahaan e-commerce melakukan A/B testing pada dua desain tombol "Beli Sekarang" (desain A dan B). Desain B menghasilkan tingkat konversi 5% lebih tinggi dengan p-value 0.04. Keputusan terbaik adalah...',
    options: ['Tetap menggunakan desain A karena perbedaannya kecil', 'Menerapkan desain B karena hasilnya signifikan secara statistik', 'Menjalankan tes lagi dengan sampel lebih besar', 'Menggunakan kedua desain secara acak'],
    correctAnswer: 1,
  },
  {
    id: 'q72',
    question: 'Sebuah model regresi untuk memprediksi penjualan bulanan (Y) berdasarkan biaya iklan (X) menghasilkan persamaan Y = 5000 + 2.5X. Ini berarti...',
    options: ['Jika tidak ada iklan, penjualan adalah 2.5 unit', 'Setiap kenaikan $1 biaya iklan diprediksi meningkatkan penjualan sebesar $2.5', 'Model ini 2.5% akurat', 'Penjualan maksimum adalah 5000 unit'],
    correctAnswer: 1,
  },
  {
    id: 'q73',
    question: 'Koefisien Determinasi (R²) dari model prediksi penjualan adalah 0.65. Ini berarti...',
    options: ['Model tersebut 65% akurat', '65% dari variasi penjualan dapat dijelaskan oleh variasi biaya iklan', 'Ada 65% korelasi antara penjualan dan iklan', 'Biaya iklan menyebabkan 65% dari penjualan'],
    correctAnswer: 1,
  },
  {
    id: 'q74',
    question: 'Sebuah survei pasar menemukan bahwa pangsa pasar produk kita adalah 20% dengan margin of error ±3% pada tingkat kepercayaan 95%. Ini berarti...',
    options: ['Pangsa pasar kita pasti antara 17% dan 23%', 'Kita 95% yakin bahwa pangsa pasar sebenarnya di populasi berada antara 17% dan 23%', 'Ada 95% kemungkinan pangsa pasar kita adalah 20%', 'Pangsa pasar akan naik 3%'],
    correctAnswer: 1,
  },
  {
    id: 'q75',
    question: 'Analisis sentimen pada ulasan pelanggan menghasilkan skor rata-rata 4.2 dari 5. Untuk menentukan apakah ini secara signifikan lebih tinggi dari rata-rata industri 4.0, uji yang sesuai adalah...',
    options: ['Uji t satu sampel', 'ANOVA', 'Uji Chi-Square', 'Analisis Korelasi'],
    correctAnswer: 0,
  },
  {
    id: 'q76',
    question: 'Sebuah perusahaan ingin mengetahui apakah ada hubungan antara kategori produk (Elektronik, Pakaian, Buku) dan metode pembayaran (Kartu Kredit, Transfer, E-wallet). Uji statistik yang tepat adalah...',
    options: ['Uji t', 'ANOVA', 'Uji Chi-Square untuk independensi', 'Regresi Logistik'],
    correctAnswer: 2,
  },
  {
    id: 'q77',
    question: 'Dalam analisis deret waktu penjualan, komponen "musiman" (seasonality) mengacu pada...',
    options: ['Tren penjualan jangka panjang', 'Fluktuasi acak dari hari ke hari', 'Pola berulang yang terjadi pada interval tetap (misal, kuartalan, tahunan)', 'Dampak peristiwa tak terduga pada penjualan'],
    correctAnswer: 2,
  },
  {
    id: 'q78',
    question: 'Customer Lifetime Value (CLV) sering dimodelkan menggunakan distribusi peluang karena...',
    options: ['Semua pelanggan memiliki nilai yang sama', 'Perilaku pembelian di masa depan mengandung ketidakpastian', 'Hanya pelanggan baru yang dihitung', 'CLV selalu berdistribusi normal'],
    correctAnswer: 1,
  },
  {
    id: 'q79',
    question: 'Sebuah bank menggunakan model regresi logistik untuk memprediksi kemungkinan nasabah gagal bayar pinjaman. Variabel dependen dalam model ini adalah...',
    options: ['Jumlah pinjaman', 'Tingkat suku bunga', 'Variabel biner (gagal bayar/tidak gagal bayar)', 'Skor kredit nasabah'],
    correctAnswer: 2,
  },
  {
    id: 'q80',
    question: 'Menemukan korelasi yang kuat antara penjualan es krim dan jumlah serangan hiu adalah contoh klasik dari...',
    options: ['Hubungan sebab-akibat langsung', 'Korelasi palsu (spurious correlation) karena variabel ketiga (musim panas)', 'Kesalahan pengambilan sampel', 'Regresi non-linear'],
    correctAnswer: 1,
  },
];
const questionsPart12 = [
  {
    id: 'q81',
    question: 'Dalam machine learning, masalah "overfitting" terjadi ketika...',
    options: ['Model terlalu sederhana dan gagal menangkap pola data', 'Model terlalu kompleks dan menghafal data training, sehingga berkinerja buruk pada data baru', 'Data training tidak cukup besar', 'Akurasi model pada data training dan data tes sama-sama rendah'],
    correctAnswer: 1,
  },
  {
    id: 'q82',
    question: 'Metode validasi silang (cross-validation) digunakan untuk...',
    options: ['Mempercepat training model', 'Mendapatkan estimasi yang lebih andal tentang kinerja model pada data yang belum pernah dilihat', 'Menyederhanakan arsitektur model', 'Memilih fitur yang paling penting secara otomatis'],
    correctAnswer: 1,
  },
  {
    id: 'q83',
    question: 'Metrik "presisi" (precision) dalam klasifikasi biner mengukur...',
    options: ['Dari semua kasus positif aktual, berapa banyak yang berhasil diidentifikasi dengan benar', 'Dari semua prediksi positif, berapa banyak yang benar-benar positif', 'Proporsi total prediksi yang benar', 'Kemampuan model untuk menghindari negatif palsu'],
    correctAnswer: 1,
  },
  {
    id: 'q84',
    question: 'Metrik "recall" atau "sensitivitas" (sensitivity) dalam klasifikasi biner mengukur...',
    options: ['Dari semua kasus positif aktual, berapa banyak yang berhasil diidentifikasi dengan benar', 'Dari semua prediksi positif, berapa banyak yang benar-benar positif', 'Akurasi keseluruhan model', 'Kemampuan model untuk menghindari positif palsu'],
    correctAnswer: 0,
  },
  {
    id: 'q85',
    question: 'Seorang data scientist membangun model untuk mendeteksi penipuan kartu kredit. Metrik evaluasi yang paling penting adalah...',
    options: ['Akurasi (Accuracy)', 'Presisi (Precision)', 'Recall (Sensitivity)', 'Spesifisitas (Specificity)'],
    correctAnswer: 2,
  },
  {
    id: 'q86',
    question: 'Analisis Komponen Utama (PCA) adalah teknik yang digunakan untuk...',
    options: ['Klasifikasi data', 'Memprediksi nilai kontinu', 'Mengurangi dimensi data (dimensionality reduction) dengan tetap mempertahankan sebagian besar varians', 'Mengelompokkan data (clustering)'],
    correctAnswer: 2,
  },
  {
    id: 'q87',
    question: 'Perbedaan utama antara supervised learning dan unsupervised learning adalah...',
    options: ['Supervised learning menggunakan data berlabel, unsupervised learning tidak', 'Supervised learning lebih kompleks', 'Unsupervised learning hanya untuk data kategorikal', 'Unsupervised learning tidak memerlukan data'],
    correctAnswer: 0,
  },
  {
    id: 'q88',
    question: 'Algoritma K-Means adalah contoh dari...',
    options: ['Regresi', 'Klasifikasi', 'Clustering (Unsupervised Learning)', 'Reinforcement Learning'],
    correctAnswer: 2,
  },
  {
    id: 'q89',
    question: 'P-value dalam uji hipotesis fitur pada model regresi digunakan untuk...',
    options: ['Menentukan apakah koefisien fitur secara statistik signifikan berbeda dari nol', 'Mengukur kekuatan prediksi fitur', 'Memeriksa normalitas residual', 'Menghitung R-squared'],
    correctAnswer: 0,
  },
  {
    id: 'q90',
    question: 'Jika dua variabel independen dalam model regresi sangat berkorelasi (multikolinearitas), hal ini dapat menyebabkan...',
    options: ['Nilai R-squared yang sangat rendah', 'Estimasi koefisien yang tidak stabil dan sulit diinterpretasikan', 'Model menjadi overfitting', 'Residual yang tidak normal'],
    correctAnswer: 1,
  },
];
export const quizData: QuizTopic[] = [
  {
    id: 'topic-1',
    title: 'Pengertian & Statistika Deskriptif',
    description: 'Dasar-dasar statistika, klasifikasi, dan metode deskriptif.',
    questions: questionsPart1,
  },
  {
    id: 'topic-2',
    title: 'Peluang (Probabilitas)',
    description: 'Konsep dasar peluang, kejadian, dan aturan-aturan probabilitas.',
    questions: questionsPart2,
  },
  {
    id: 'topic-3',
    title: 'Variabel Acak & Distribusi Peluang',
    description: 'Mengenal variabel acak diskrit dan distribusi peluangnya.',
    questions: questionsPart3,
  },
  {
    id: 'topic-4',
    title: 'Distribusi Peluang Kontinu',
    description: 'Fokus pada distribusi normal dan aplikasinya.',
    questions: questionsPart4,
  },
  {
    id: 'topic-5',
    title: 'Statistika Inferensia - Pendugaan',
    description: 'Estimasi titik dan interval untuk parameter populasi.',
    questions: questionsPart5,
  },
  {
    id: 'topic-6',
    title: 'Pengujian Hipotesis Satu Populasi',
    description: 'Langkah-langkah dan konsep dalam pengujian hipotesis.',
    questions: questionsPart6,
  },
  {
    id: 'topic-7',
    title: 'Statistika Inferensia Lanjutan',
    description: 'Uji hipotesis untuk dua populasi, ANOVA, dan Chi-Square.',
    questions: questionsPart7,
    isAdvanced: true,
  },
  {
    id: 'topic-8',
    title: 'Analisis Regresi & Korelasi',
    description: 'Mengukur dan memodelkan hubungan antar variabel.',
    questions: questionsPart8,
    isAdvanced: true,
  },
  {
    id: 'topic-9',
    title: 'Topik Khusus & Aplikasi',
    description: 'Statistika non-parametrik, time series, dan quality control.',
    questions: questionsPart9,
    isAdvanced: true,
  },
  {
    id: 'topic-10',
    title: 'Studi Kasus: Uji Klinis & Medis',
    description: 'Aplikasi statistika dalam penelitian medis dan uji klinis.',
    questions: questionsPart10,
    isAdvanced: true,
  },
  {
    id: 'topic-11',
    title: 'Studi Kasus: Analisis Bisnis & Pasar',
    description: 'Penerapan konsep statistik dalam A/B testing, prediksi, dan riset pasar.',
    questions: questionsPart11,
    isAdvanced: true,
  },
  {
    id: 'topic-12',
    title: 'Studi Kasus: Sains Data & Machine Learning',
    description: 'Konsep statistik fundamental dalam validasi model dan interpretasi hasil.',
    questions: questionsPart12,
    isAdvanced: true,
  },
];