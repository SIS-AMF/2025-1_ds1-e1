interface Conta {
    depositar(valor: number): void;
    sacar(valor: number): void;
    saldo(): number;
    render(): number;
}

class Popanca implements Conta {
    private accountBalance: number = 0;

    public depositar(valor: number): void {
        this.accountBalance += valor;
    }
    public sacar(valor: number): number {
        if (this.accountBalance - valor > 0) {
            this.accountBalance -= valor;
            return valor
        }
        else {
            return 0;
        }

    }
    public saldo(): number {
        return this.accountBalance;
    }
    public render(): number {
        const rendimento: number = 0.1
        this.accountBalance *= rendimento;
        return this.accountBalance * rendimento;
    }
}

class RendaFixa implements Conta {
    private accountBalance: number = 0;

    public depositar(valor: number): void {
        this.accountBalance += valor;
    }
    public sacar(valor: number): number {
        if (this.accountBalance - valor > 0) {
            this.accountBalance -= valor;
            return valor
        }
        else {
            return 0;
        }

    }
    public saldo(): number {
        return this.accountBalance;
    }
    public render(): number {
        const rendimento: number = 0.15
        this.accountBalance *= rendimento;
        return this.accountBalance * rendimento;
    }
}

class Fundos implements Conta {
    private accountBalance: number = 0;

    public depositar(valor: number): void {
        this.accountBalance += valor;
    }
    public sacar(valor: number): number {
        if (this.accountBalance - valor > 0) {
            this.accountBalance -= valor;
            return valor
        }
        else {
            return 0;
        }

    }
    public saldo(): number {
        return this.accountBalance;
    }
    public render(): number {
        const rendimento: number = 0.3
        this.accountBalance *= rendimento;
        return this.accountBalance * rendimento;
    }
}