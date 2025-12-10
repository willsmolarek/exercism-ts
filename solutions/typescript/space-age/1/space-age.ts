// Constantes (fora da função, para reuso)
const SEGUNDOS_POR_ANO_TERRESTRE = 31557600;

// Tipo para os planetas (opcional, mas ajuda TypeScript)
type Planeta = 
  | 'mercury' | 'venus' | 'earth' | 'mars' 
  | 'jupiter' | 'saturn' | 'uranus' | 'neptune';

// Objeto com os períodos orbitais
const PERIODOS_ORBITAIS: Record<Planeta, number> = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

// Função principal
export function age(planeta: Planeta, segundos: number): number {
  // 1. Converter segundos para anos terrestres
  const anosTerrestres = segundos / SEGUNDOS_POR_ANO_TERRESTRE;
  
  // 2. Pegar o período orbital do planeta
  const periodoOrbital = PERIODOS_ORBITAIS[planeta];
  
  // 3. Calcular idade no planeta
  const idadeNoPlaneta = anosTerrestres / periodoOrbital;
  
  // 4. Arredondar para 2 casas decimais (como nos exemplos)
  return Math.round(idadeNoPlaneta * 100) / 100;
}