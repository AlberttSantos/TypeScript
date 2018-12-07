class Carro {
    private modelo: string
    private numeroPortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroPortas: number) {
        this.modelo = modelo
        this.numeroPortas = numeroPortas
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }
    public parar(): void {
        this.velocidade = 0
    }
    public velocidadeAtual(): number {
        return this.velocidade
    }
}

class Concessionaria {
    private endereco: string
    private listaCarros: any //Qualquer tipo de dados

    constructor(endereco: string) {
        this.endereco = endereco
    }

    public fornecerEndereco(): string {
        return this.endereco
    }
    public mostrarListaCarros(): any {
        return this.listaCarros
    }
}

class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: any

    constructor(nome: string, carroPreferido: string) {
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string {
        return this.nome
    }
    public comprarCarro(carro: any): void {
        this.carro = carro
    }
    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }
}

let p = new Pessoa("Albertt", "BMW")
p.comprarCarro("Lancer")
console.log(p.dizerCarroPreferido())







