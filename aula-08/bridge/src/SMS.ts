import CanalDeEnvio from "./CanalDeEnvio";

export default class SMS implements CanalDeEnvio {
  enviarMensagem(assunto: string, mensagem: string): void {
    console.log("Mensagem enviada por SMS");
    console.log(`Assunto: ${assunto}`);
    console.log(`Mensagem: ${mensagem}`);
    console.log("-----------------------------------");
  }
}
