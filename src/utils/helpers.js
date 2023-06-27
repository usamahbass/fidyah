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
