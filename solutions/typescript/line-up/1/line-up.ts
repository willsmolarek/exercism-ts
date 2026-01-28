export function format(name: string, position: number): string {
  // Pegamos o resto da divisão por 10 e 100 para identificar o final do número
  const lastDigit = position % 10;
  const lastTwoDigits = position % 100;

  let suffix = 'th';

  // Regra das exceções (11, 12, 13) e sufixos específicos
  if (lastTwoDigits !== 11 && lastTwoDigits !== 12 && lastTwoDigits !== 13) {
    if (lastDigit === 1) {
      suffix = 'st';
    } else if (lastDigit === 2) {
      suffix = 'nd';
    } else if (lastDigit === 3) {
      suffix = 'rd';
    }
  }

  return `${name}, you are the ${position}${suffix} customer we serve today. Thank you!`;
}