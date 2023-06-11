export const generateYears = (startYear = 1980) => {
  let years = [];
  const currentYear = new Date().getFullYear();
  while (startYear <= currentYear) {
    years.push(startYear++);
  }

  return years;
};

export const sumArrayOfObject = (list, key) => {
  return list?.reduce((a, b) => a + (b[key] || 0), 0);
};
