import Gateway from "./Gateway";
import MercadoPago from "./terceiros/MercadoPage";

export default class MercadoPagoAdapter extends MercadoPago implements Gateway {}
