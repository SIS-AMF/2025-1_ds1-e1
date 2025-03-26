interface Cartao {
    numero: number;
    cvv: number;
    validade: string;
}

interface Boleto {
    codigo: string;
}

type Pagamento = Cartao | Boleto;

