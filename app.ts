import Carro from './Carro' // Exemplo exportação default
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

let carroA = new Carro("Dogde", 4)
let carroB = new Carro("BMW", 2)

//Array do tipo Carro
let carros: Carro[] = [carroA, carroB]

let concessionaria = new Concessionaria("Av Magalhaes Pinto", carros)

console.log(concessionaria.mostrarListaCarros())

let pessoa = new Pessoa("Joao", "Dogde");
console.log(pessoa.dizerCarroPreferido())

//Percorre cada um dos elementos do array
concessionaria.mostrarListaCarros().map((carro: Carro) => {
    if(carro["modelo"] == pessoa.dizerCarroPreferido())
    {
        pessoa.comprarCarro(carro)
    }
})

pessoa.dizerCarroQueTem()






