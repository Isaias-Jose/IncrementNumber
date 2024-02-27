//Parametros
//Argumentos
//Retorno

function fazerPizza(tipoQueijo, tipoRecheio) {
    const pizza = `Pizza de ${tipoQueijo} com ${tipoRecheio}`
    return pizza;
}

const pizzaCliente = fazerPizza('Bacon Suíno', 'Berbekiu');
console.log(pizzaCliente);