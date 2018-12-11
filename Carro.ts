export default class Carro {
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
