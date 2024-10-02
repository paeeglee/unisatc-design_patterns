import Component from "./Component";

export class GerenciadorArquivos {
    private raiz: Component;

    constructor(r: Component) {
        this.raiz = r;
    }
    
    exibirTodos(): void {
        this.raiz.exibir();
    }
}