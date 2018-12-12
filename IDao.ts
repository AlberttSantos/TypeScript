interface IDao<T>{
    nomeTabela : string 

    inserir(object: T): boolean  
    atualizar(object: T) : boolean
    remover(id: T): T
}

export default IDao