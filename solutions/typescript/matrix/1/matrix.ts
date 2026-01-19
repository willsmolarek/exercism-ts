export class Matrix {
  public readonly rows: number[][];
  public readonly columns: number[][];

  constructor(matrixString: string) {
    // 1. Criar as linhas: 
    // Quebra por linha (\n), depois quebra por espaço, converte para número
    this.rows = matrixString.split('\n').map((row) => 
      row.split(/\s+/).map(Number)
    );

    // 2. Criar as colunas (Transposição da matriz):
    // Pegamos a primeira linha para saber quantas colunas existem
    // e mapeamos cada índice de coluna para os elementos correspondentes nas linhas
    this.columns = this.rows[0].map((_, columnIndex) =>
      this.rows.map((row) => row[columnIndex])
    );
  }
}