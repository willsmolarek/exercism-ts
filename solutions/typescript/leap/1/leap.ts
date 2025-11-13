export function isLeap(year: number): boolean {
  if (year % 4 !== 0) {
    return false; // Não é divisível por 4 → não é bissexto
  }
  
  if (year % 100 !== 0) {
    return true; // Divisível por 4 mas não por 100 → é bissexto
  }
  
  // Divisível por 4 e por 100 → só é bissexto se for divisível por 400
  return year % 400 === 0;
}