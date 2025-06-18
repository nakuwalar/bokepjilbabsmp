// src/utils/slugify.ts
export function slugify(text: string): string {
  return text
    .toString() // Ubah ke string
    .normalize('NFD') // Normalisasi unicode characters
    .replace(/[\u0300-\u036f]/g, '') // Hapus diacritics (tanda aksen)
    .toLowerCase() // Ubah ke huruf kecil
    .trim() // Hapus spasi awal/akhir
    .replace(/\s+/g, '-') // Ganti spasi dengan hyphen
    .replace(/[^\w-]+/g, '') // Hapus semua karakter non-word
    .replace(/--+/g, '-'); // Ganti hyphen berulang dengan satu hyphen
}