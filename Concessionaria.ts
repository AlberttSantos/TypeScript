import Carro from './Carro'
import IConcessionaria from './IConcessionaria'

export default class Concessionaria implements IConcessionaria{
    private endereco: string
    private listaCarros: Carro[] //Qualquer tipo de dados

    constructor(endereco: string, carros : Carro[]) {
        this.endereco = endereco
        this.listaCarros = carros
    }

    public fornecerEndereco(): string {
        return this.endereco
    }
    public mostrarListaCarros(): Carro[] {
        return this.listaCarros
    }

    //Implementação da interface
    public horaioDeFuncionamento(): string{
        return 'De segunda a Sexta 8h as 18h'
    }
}