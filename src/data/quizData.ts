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
];