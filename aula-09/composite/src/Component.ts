export default abstract class Component {
    protected nome: string;
    protected caminho: string;

    constructor(nome: string, caminho: string) {
        this.nome = nome;
        this.caminho = caminho;
    }

    getNome(): string {
        return this.nome;
    }

    getCaminho(): string {
        return this.caminho;
    }

    exibir(): void {
        throw new Error("Metodo nao suportado.");
    }

    adicionar(a: Component): void {
        throw new Error("Metodo nao suportado.");
    }

    remover(a: Component): void {
        throw new Error("Metodo nao suportado.");
    }

    recuperarFilho(i: number): Component | undefined {
        throw new Error("Metodo nao suportado.");
    }
}