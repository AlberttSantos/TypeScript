"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Moto_1 = __importDefault(require("./Moto"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Dao_1 = __importDefault(require("./Dao"));
var carro = new Carro_1.default("BMW", 4);
var moto = new Moto_1.default();
moto.acelerar();
carro.acelerar();
console.log(moto);
console.log(carro);
var concessionaria = new Concessionaria_1.default('Teste de endereço', []);
console.log(concessionaria.horaioDeFuncionamento());
// let dao = new ConcessionariaDao()
// dao.atualizar(concessionaria)
var daoGeneric = new Dao_1.default(); // Utilizando classe generica
daoGeneric.remover(concessionaria);
