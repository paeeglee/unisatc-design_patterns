import MensagemAdminEmail from "./MensagemAdminEmail";
import MensagemAdminSMS from "./MensagemAdminSMS";
import MensagemUsuarioEmail from "./MensagemUsuarioEmail";
import MensagemUsuarioSMS from "./MensagemUsuarioSMS";

let mensagem = new MensagemAdminEmail();
mensagem.setAssunto("Primeira mensagem");
mensagem.setMensagem("Olá mundo!");
mensagem.enviar();

mensagem = new MensagemAdminSMS();
mensagem.setAssunto("Primeira mensagem");
mensagem.setMensagem("Olá mundo!");
mensagem.enviar();

mensagem = new MensagemUsuarioEmail();
mensagem.setAssunto("Primeira mensagem");
mensagem.setMensagem("Olá mundo!");
mensagem.enviar();

mensagem = new MensagemUsuarioSMS();
mensagem.setAssunto("Primeira mensagem");
mensagem.setMensagem("Olá mundo!");
mensagem.enviar();