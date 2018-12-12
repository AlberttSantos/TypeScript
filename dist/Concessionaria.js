"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, carros) {
        this.endereco = endereco;
        this.listaCarros = carros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaCarros = function () {
        return this.listaCarros;
    };
    //Implementação da interface
    Concessionaria.prototype.horaioDeFuncionamento = function () {
        return 'De segunda a Sexta 8h as 18h';
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
