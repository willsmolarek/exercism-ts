export function decodedResistorValue(colors: string[]): string {
  const colorMap: { [key: string]: number } = {
    'black': 0, 'brown': 1, 'red': 2, 'orange': 3, 'yellow': 4,
    'green': 5, 'blue': 6, 'violet': 7, 'grey': 8, 'white': 9
  };

  const mainValue = colorMap[colors[0]] * 10 + colorMap[colors[1]];
  const zeros = colorMap[colors[2]];
  let totalOhms = mainValue * Math.pow(10, zeros);

  // Converte para unidades métricas apropriadas
  if (totalOhms >= 1000000000) return `${totalOhms / 1000000000} gigaohms`;
  if (totalOhms >= 1000000) return `${totalOhms / 1000000} megaohms`;
  if (totalOhms >= 1000) return `${totalOhms / 1000} kiloohms`;
  return `${totalOhms} ohms`;
}