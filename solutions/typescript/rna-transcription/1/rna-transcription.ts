export function toRna(dna: string): string {
    // Mapeamento com tipo explícito
    const dnaToRna: { [key: string]: string } = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U'
    };
    
    let rnaResult: string = '';
    
    // Para cada caractere na string DNA
    for (const nucleotide of dna) {
        // Pega a tradução
        const translated = dnaToRna[nucleotide];
        
        // Se não existir tradução, lança erro
        if (!translated) {
            throw new Error('Invalid input DNA.');
        }
        
        // Adiciona ao resultado
        rnaResult += translated;
    }
    
    return rnaResult;
}