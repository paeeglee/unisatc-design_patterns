import CanalDeEnvio from "./CanalDeEnvio";

export default class Email implements CanalDeEnvio {
  enviarMensagem(assunto: string, mensagem: string): void {
    console.log("Mensagem enviada por Email");
    console.log(`Assunto: ${assunto}`);
    console.log(`Mensagem: ${mensagem}`);
    console.log("-----------------------------------");
  }
}
