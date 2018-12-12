import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria';
import ConcessionariaDao from './ConcessionariaDao'
import Dao from './Dao';

let carro = new Carro("BMW", 4)
let moto = new Moto()
moto.acelerar()
carro.acelerar()

console.log(moto)
console.log(carro)

let concessionaria = new Concessionaria('Teste de endereço', [])
console.log(concessionaria.horaioDeFuncionamento())

// let dao = new ConcessionariaDao()
// dao.atualizar(concessionaria)

let daoGeneric: Dao<Concessionaria> = new Dao() // Utilizando classe generica
daoGeneric.remover(concessionaria)