import IDao from "./IDao";

export default class Dao<T> implements IDao<T>{
    nomeTabela: string = 'tb_concessionaria'

    inserir(object: T): boolean{
        console.log('logica interna')
        return true
    }

    atualizar(object: T): boolean{
        console.log('logica update')
        return true
    }

    remover(id: T): T {
        console.log('logica remover')
        return Object()
    }
}