# Study Lofi

Halaman web statis bertema belajar dengan teknik Pomodoro dan suasana lofi. Dibuat sebagai tugas mata kuliah menggunakan **HTML** dan **Tailwind CSS**.

## Tentang Website

Study Lofi menjelaskan teknik Pomodoro (belajar 25 menit, istirahat 5 menit) dan menampilkan pilihan suasana belajar berupa musik lofi dan suara latar seperti hujan, sungai, ombak, dan burung.

## Struktur Halaman

| Bagian | Isi |
| --- | --- |
| Header | Logo di kiri dan menu navigasi di kanan |
| Section Tentang | Penjelasan singkat dan tampilan timer 25:00 |
| Section Cara pakai | Empat langkah Pomodoro dalam bentuk kartu |
| Section Suasana | Daftar musik lofi dan suara latar |
| Footer | Tiga bagian sejajar: logo, penjelasan singkat, info website |

## Teknologi

- HTML5 dengan tag semantik: `header`, `nav`, `main`, `section`, `article`, `footer`
- Tailwind CSS (via CDN), tanpa file CSS terpisah
- Layout menggunakan Flexbox dan Grid
- Tanpa JavaScript

## Cara Menjalankan

1. Clone atau download repository ini.
2. Buka file `index.html` di browser (Chrome, Edge, atau Firefox).
3. Pastikan perangkat terhubung ke internet karena Tailwind dan font dimuat lewat CDN.

## Struktur File

```
.
├── index.html
└── README.md
```

## Catatan Pengerjaan

- Header dan footer menggunakan `display: flex` dan `grid` melalui class Tailwind (`flex`, `justify-between`, `grid`, `md:grid-cols-3`).
- Tampilan responsif untuk layar HP, tablet, dan laptop.

## Identitas

- Nama: [isi nama kamu]
- NIM: [isi NIM kamu]
- Mata kuliah: [isi mata kuliah]
- Kampus: Cakrawala University
