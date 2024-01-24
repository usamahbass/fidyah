export const generateYears = (startYear = 1980) => {
  let years = [];
  const currentYear = new Date().getFullYear();
  while (startYear <= currentYear) {
    years.push(startYear++);
  }

  return years.reverse();
};

export const sumArrayOfObject = (list, key) => {
  return list?.reduce((a, b) => a + (b[key] || 0), 0);
};

export const toRupiah = (angka) => {
  const rupiah = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(angka || 0);
  return `${rupiah} ,-`;
};

export const replaceAll = (text, replaceFrom, replaceAfter) => {
  const regex = new RegExp(replaceFrom, "g");
  const results = text?.replace(regex, replaceAfter);

  return results;
};

export const rupiahToInt = (rupiahString) => {
  // Menghilangkan "Rp " dan mengganti semua pemisah ribuan dan desimal
  const cleanedValue = rupiahString.replace('Rp ', '').replace(/\./g, '').replace(/,/g, '.');

  // Mengonversi string menjadi nilai integer
  const integerValue = parseFloat(cleanedValue);

  // Mengembalikan nilai integer
  return isNaN(integerValue) ? 0 : integerValue;
};

export const sumRupiah = (...amounts) => {
  // Menghilangkan "Rp " dan mengganti koma dengan titik, serta mengganti semua titik dengan "" 
  const cleanedAmounts = amounts.map(amount => parseFloat(amount.replace('Rp ', '').replace(/,/g, '').replace(/\./g, '').replace(/,/g, '.')) || 0);

  // Menjumlahkan angka
  const total = cleanedAmounts.reduce((acc, val) => acc + val, 0);

  // Mengembalikan hasil dengan format Rupiah
  return `Rp ${total.toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
}

