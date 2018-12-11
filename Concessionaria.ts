import Carro from './Carro'

export default class Concessionaria {
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
}