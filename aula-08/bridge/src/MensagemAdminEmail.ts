import Mensagem from "./Mensagem";

export default class MensagemAdminEmail extends Mensagem {
  enviar(): void {
    console.log("Mensagem enviada pelo Administrador");
    console.log("Mensagem enviada por Email");
    console.log(`Assunto: ${this.assunto}`);
    console.log(`Mensagem: ${this.mensagem}`);
    console.log("-----------------------------------");
  }
}
