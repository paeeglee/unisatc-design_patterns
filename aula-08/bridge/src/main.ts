import Email from "./Email";
import MensagemAdmin from "./MensagemAdmin";
import MensagemUsuario from "./MensagemUsuario";
import SMS from "./SMS";

const canalEmail = new Email();
const canalSMS = new SMS();

let mensagem = new MensagemAdmin(canalEmail);
mensagem.setAssunto("Primeira mensagem");
mensagem.setMensagem("Olá mundo!");
mensagem.enviar();

mensagem = new MensagemUsuario(canalEmail);
mensagem.setAssunto("Primeira mensagem");
mensagem.setMensagem("Olá mundo!");
mensagem.enviar();

mensagem = new MensagemAdmin(canalSMS);
mensagem.setAssunto("Primeira mensagem");
mensagem.setMensagem("Olá mundo!");
mensagem.enviar();

mensagem = new MensagemUsuario(canalSMS);
mensagem.setAssunto("Primeira mensagem");
mensagem.setMensagem("Olá mundo!");
mensagem.enviar();
