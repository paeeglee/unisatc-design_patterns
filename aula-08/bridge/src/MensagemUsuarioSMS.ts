import Mensagem from "./Mensagem";

export default class MensagemUsuarioSMS extends Mensagem {
  enviar(): void {
    console.log("Mensagem enviada pelo Usuário");
    console.log("Mensagem enviada por SMS");
    console.log(`Assunto: ${this.assunto}`);
    console.log(`Mensagem: ${this.mensagem}`);
    console.log("-----------------------------------");
  }
}
