export function isPangram(sentence: string): boolean {
  const alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split(''); 
  const fraseBaixa = sentence.toLowerCase(); 
  return alfabeto.every((letra) => fraseBaixa.includes(letra));
}