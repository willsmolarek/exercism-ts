export function hey(message: string): string {
  // 1. Limpar espaços em branco inúteis no início e fim
  const speech = message.trim();

  // 2. Definir os estados
  const isSilent = speech.length === 0;
  
  // Verifica se há letras e se todas as letras presentes são maiúsculas
  const hasLetters = /[a-zA-Z]/.test(speech);
  const isShouting = hasLetters && speech === speech.toUpperCase();
  
  const isQuestion = speech.endsWith('?');

  // 3. Aplicar as regras do Bob
  if (isSilent) {
    return 'Fine. Be that way!';
  }

  if (isShouting && isQuestion) {
    return "Calm down, I know what I'm doing!";
  }

  if (isShouting) {
    return 'Whoa, chill out!';
  }

  if (isQuestion) {
    return 'Sure.';
  }

  // Resposta padrão para qualquer outra coisa
  return 'Whatever.';
}