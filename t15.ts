interface Cliente {
    nome: string;
    email: string;
    senha: string;
    cpf: string;
};

type CleanedClient = Omit<Cliente, "senha" | "cpf">


function treatment(client: Cliente): CleanedClient {
    const temp: CleanedClient = {
        nome: client.nome,
        email: client.email
    };

    return temp
}


const lucas: Cliente = {
    nome: "Lucas",
    email: "lucas@lucas.com",
    senha: "lucas",
    cpf: "000284586"
}

console.log(treatment(lucas));