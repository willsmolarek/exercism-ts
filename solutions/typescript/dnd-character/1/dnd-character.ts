export class DnDCharacter {
  // Ability scores: Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma
  public strength: number;
  public dexterity: number;
  public constitution: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;
  public hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    
    // HP = 10 + Constitution Modifier
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
    // 1. Roll four 6-sided dice
    const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
    
    // 2. Sort them to easily identify the lowest
    rolls.sort((a, b) => a - b);
    
    // 3. Discard the smallest (index 0) and sum the top three
    return rolls.slice(1).reduce((sum, roll) => sum + roll, 0);
  }

  public static getModifierFor(abilityValue: number): number {
    // Formula: (Score - 10) / 2, rounded down
    return Math.floor((abilityValue - 10) / 2);
  }
}