import IDao from './IDao'
import Concessionaria from './Concessionaria'

class ConcessionariaDao {
    nomeTabela: string = 'tb_concessionaria'

    inserir(object: Concessionaria): boolean{
        console.log('logica interna')
        return true
    }

    atualizar(object: Concessionaria): boolean{
        console.log('logica update')
        return true
    }

    remover(id: number): Concessionaria{
        console.log('logica remover')
        return new Concessionaria('',[])
    }
}

export default ConcessionariaDao