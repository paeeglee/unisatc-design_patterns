import Mensagem from "./Mensagem";

export default class MensagemAdmin extends Mensagem {
  enviar(): void {
    console.log("Mensagem enviada pelo Administrador");
    this.canal.enviarMensagem(this.assunto, this.mensagem);
  }
}
