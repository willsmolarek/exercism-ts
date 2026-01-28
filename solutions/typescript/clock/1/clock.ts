export class Clock {
  private minutes: number;
  private readonly MINUTES_IN_A_DAY = 1440; // 24 * 60

  constructor(hour: number, minute: number = 0) {
    // 1. Converte tudo para minutos totais
    let totalMinutes = (hour * 60 + minute) % this.MINUTES_IN_A_DAY;

    // 2. Lida com números negativos (garante que fiquem no intervalo 0-1439)
    if (totalMinutes < 0) {
      totalMinutes += this.MINUTES_IN_A_DAY;
    }

    this.minutes = totalMinutes;
  }

  public toString(): string {
    const hours = Math.floor(this.minutes / 60);
    const mins = this.minutes % 60;

    // Formata com zero à esquerda (ex: 08:05)
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(0, this.minutes + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(0, this.minutes - minutes);
  }

  public equals(other: Clock): boolean {
    return this.minutes === other.minutes;
  }
}