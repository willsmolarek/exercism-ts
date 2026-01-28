export function convert(n: number): string {
  let result = '';

  if (n % 3 === 0) result += 'Pling';
  if (n % 5 === 0) result += 'Plang';
  if (n % 7 === 0) result += 'Plong';

  // Se a string continuar vazia, significa que não é divisível por 3, 5 ou 7
  return result || n.toString();
}