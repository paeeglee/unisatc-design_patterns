import CanalDeEnvio from "./CanalDeEnvio";

export default abstract class Mensagem {
  protected assunto: string = "";
  protected mensagem: string = "";
  protected canal: CanalDeEnvio;

  constructor(canal: CanalDeEnvio) {
    this.canal = canal;
  }

  setAssunto(assunto: string): void {
    this.assunto = assunto;
  }

  setMensagem(mensagem: string): void {
    this.mensagem = mensagem;
  }

  abstract enviar(): void;
}
