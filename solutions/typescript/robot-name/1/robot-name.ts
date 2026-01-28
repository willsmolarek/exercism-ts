export class Robot {
  private static usedNames: Set<string> = new Set();
  private _name: string;

  constructor() {
    this._name = this.generateUniqueName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    this._name = this.generateUniqueName();
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }

  private generateUniqueName(): string {
    let newName: string;
    
    // Para passar nos testes de performance e unicidade
    // Tentamos gerar um nome até encontrar um que não foi usado
    do {
      newName = this.createRandomName();
    } while (Robot.usedNames.has(newName));

    Robot.usedNames.add(newName);
    return newName;
  }

  private createRandomName(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';

    const r1 = letters[Math.floor(Math.random() * 26)];
    const r2 = letters[Math.floor(Math.random() * 26)];
    const n1 = numbers[Math.floor(Math.random() * 10)];
    const n2 = numbers[Math.floor(Math.random() * 10)];
    const n3 = numbers[Math.floor(Math.random() * 10)];

    return `${r1}${r2}${n1}${n2}${n3}`;
  }
}