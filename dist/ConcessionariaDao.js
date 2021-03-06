"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log('logica interna');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log('logica update');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('logica remover');
        return new Concessionaria_1.default('', []);
    };
    return ConcessionariaDao;
}());
exports.default = ConcessionariaDao;
