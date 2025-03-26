abstract class Transporte {

    abstract calcularCusto(): number;
}

class Carro extends Transporte {
    public calcularCusto(): number {
        return 100;
    }
}

class Moto extends Transporte {
    public calcularCusto(): number {
        return 10;
    }
}

class Caminhao extends Transporte {
    public calcularCusto(): number {
        return 1000;
    }
}