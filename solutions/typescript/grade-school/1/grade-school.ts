type Roster = { [grade: number]: string[] };

export class GradeSchool {
  private _roster: Roster = {};

  /**
   * Adiciona um aluno a uma série.
   * Se o aluno já existir em qualquer série, ele é removido da anterior.
   */
  add(name: string, grade: number): void {
    // 1. Remover o aluno de qualquer série onde ele já possa estar
    for (const g in this._roster) {
      this._roster[g] = this._roster[g].filter(student => student !== name);
    }

    // 2. Inicializar a série se não existir e adicionar o aluno
    if (!this._roster[grade]) {
      this._roster[grade] = [];
    }
    this._roster[grade].push(name);

    // 3. Manter a lista da série sempre em ordem alfabética
    this._roster[grade].sort();
  }

  /**
   * Retorna uma cópia profunda (deep copy) do registro para evitar 
   * modificações externas acidentais.
   */
  roster(): Roster {
    const copy: Roster = {};
    for (const grade in this._roster) {
      copy[grade] = [...this._roster[grade]];
    }
    return copy;
  }

  /**
   * Retorna os alunos de uma série específica.
   * Retorna uma cópia do array para garantir imutabilidade.
   */
  grade(grade: number): string[] {
    return this._roster[grade] ? [...this._roster[grade]] : [];
  }
}