export default abstract class Mensagem {
  protected assunto: string = "";
  protected mensagem: string = "";

  setAssunto(assunto: string): void {
    this.assunto = assunto;
  }

  setMensagem(mensagem: string): void {
    this.mensagem = mensagem;
  }

  abstract enviar(): void;
}
