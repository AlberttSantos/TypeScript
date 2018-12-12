"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    Dao.prototype.inserir = function (object) {
        console.log('logica interna');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('logica update');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('logica remover');
        return Object();
    };
    return Dao;
}());
exports.default = Dao;
