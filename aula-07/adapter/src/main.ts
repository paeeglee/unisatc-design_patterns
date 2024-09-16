import Cobranca from "./Cobranca";
import MercadoPagoAdapter from "./MercadoPagoAdapter";
import PagarmeAdapter from "./PagarmeAdapter";
import MercadoPago from "./terceiros/MercadoPage";

const mpAdapter = new MercadoPagoAdapter();
const pgAdapter = new PagarmeAdapter();

const cobranca = new Cobranca(mpAdapter);

cobranca.setValor(100);
cobranca.setParcelas(3);
cobranca.setNumeroCartao("1234123412341234");
cobranca.setCvv("123");

if (cobranca.realizarPagament()) {
    console.log("- sucesso");
} else {
    console.log("- falha");
}

cobranca.setGateway(pgAdapter);
cobranca.setValor(100);
cobranca.setParcelas(3);
cobranca.setNumeroCartao("1234123412341234");
cobranca.setCvv("123");

if (cobranca.realizarPagament()) {
    console.log("- sucesso");
} else {
    console.log("- falha");
}
