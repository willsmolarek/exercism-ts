const colorValues: { [key: string]: number } = {
  'black': 0,
  'brown': 1,
  'red': 2,
  'orange': 3,
  'yellow': 4,
  'green': 5,
  'blue': 6,
  'violet': 7,
  'grey': 8,
  'white': 9
};

export function decodedValue(colors: string[]): number {
  // Pega apenas as duas primeiras cores e converte para números
  const firstTwoColors = colors.slice(0, 2);
  const [firstDigit, secondDigit] = firstTwoColors.map(color => colorValues[color]);
  
  // Combina os dois dígitos (ex: 1 e 5 vira 15)
  return firstDigit * 10 + secondDigit;
}