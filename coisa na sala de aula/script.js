let saldo = 1000;

function mostrarmenu(){
    return prompt(
        "escolha um operação:\n" +
        "1. verificar saldo\n" +
        "2. deposite\n" +
        "3. saque\n" +
        "4. sair"
    );
}

function verifirsaldo() {
    alert("seu saldo atual é: r$"
        + saldo.toFixed(2)
    )
}

function deposite() {
    let valor = Number(prompt("digite o valor para deposito"));
    if (valor > 0) {
        saldo += valor;
        alert ("deposito realizado com sucesso! seu novo saldo é: r$") +
        saldo.toFixed(2)
        } else {
            alert("valor de deposito invalido.");
    } let saque = Number(prompt("digite o valor para deposito"));

}

while (true) {
    let opcao = mostrarmenu();
    
    if (opcao === '1') {
        verifirsaldo();
    } else if (opcao === '2') {
        deposite();
    } else if (opcao === '3') {
        saque()
    } else if (opcao === '4') {
        alert("obrigado por utilizar o nosso ATM. ate mais!");
        break;
    } else {
        alert("opção invalida por favor escolha uma opção valida");
    }

}





