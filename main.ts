abstract class Conta {
  private _titular: string;
  private _saldo: number;

  constructor(titular: string) {
    this._titular = titular;
    this._saldo = 0;
  }

  get titular(): string {
    return this._titular;
  }

  set titular(titular: string) {
    this._titular = titular;
  }

  get saldo(): number {
    return this._saldo;
  }

  public depositar(valor: number): void {
    if (valor > 0) {
      this._saldo = this._saldo + valor;
    }
  }

  public sacar(valor: number) {
    if (valor > 0 && valor <= this._saldo) {
      this._saldo = this._saldo - valor;
    }
  }
}

class ContaCorretente extends Conta {
  public sacar(valor: number): void {
    let acrescimo = (1 / 100) * valor;
    let valorTotal = valor + acrescimo;
    super.sacar(valorTotal);
  }
}

class ContaPoupanca extends Conta {
  public depositar(valor: number): void {
    let acrescimo = (1 / 100) * valor;
    let valorTotal = valor + acrescimo;
    super.depositar(valorTotal);
  }
}
