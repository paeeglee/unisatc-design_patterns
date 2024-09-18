import Mensagem from "./Mensagem";

export default class MensagemUsuario extends Mensagem {
  enviar(): void {
    console.log("Mensagem enviada pelo Usuário");
    this.canal.enviarMensagem(this.assunto, this.mensagem);
  }
}
