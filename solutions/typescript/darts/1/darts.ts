export function score(x: unknown, y: unknown): number {
  // 1. Verificamos se x e y são realmente números. 
  // Se não forem, o dardo nem foi lançado direito (0 pontos).
  if (typeof x !== 'number' || typeof y !== 'number') {
    return 0;
  }

  // 2. Calculamos a distância do ponto até o centro (0,0)
  // A fórmula é: Raiz Quadrada de (x² + y²)
  const distancia = Math.sqrt(x * x + y * y);

  // 3. Agora comparamos a distância com os raios dos círculos:
  
  // Se a distância for menor ou igual a 1, está no círculo interno.
  if (distancia <= 1) {
    return 10;
  }

  // Se a distância for menor ou igual a 5, está no círculo do meio.
  if (distancia <= 5) {
    return 5;
  }

  // Se a distância for menor ou igual a 10, está no círculo de fora.
  if (distancia <= 10) {
    return 1;
  }

  // Se não entrou em nenhum dos "if" acima, é porque está fora do alvo.
  return 0;
}