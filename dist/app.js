"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro")); // Exemplo exportação default
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var carroA = new Carro_1.default("Dogde", 4);
var carroB = new Carro_1.default("BMW", 2);
//Array do tipo Carro
var carros = [carroA, carroB];
var concessionaria = new Concessionaria_1.default("Av Magalhaes Pinto", carros);
console.log(concessionaria.mostrarListaCarros());
var pessoa = new Pessoa_1.default("Joao", "Dogde");
console.log(pessoa.dizerCarroPreferido());
//Percorre cada um dos elementos do array
concessionaria.mostrarListaCarros().map(function (carro) {
    if (carro["modelo"] == pessoa.dizerCarroPreferido()) {
        pessoa.comprarCarro(carro);
    }
});
pessoa.dizerCarroQueTem();
