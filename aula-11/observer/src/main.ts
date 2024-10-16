import BotOfertasAmazon from "./BotOfertasAmazon";
import { Elasticsearch } from "./Elasticsearch";
import { MelhorOferta } from "./MelhoOferta";
import { Ofertas } from "./Ofertas";
import { Produto } from "./Produto";

const bot = new BotOfertasAmazon();

const produtos = new Produto(bot);
const melhoreOfertas = new MelhorOferta(bot);
const elastic = new Elasticsearch(bot);
const listaOfertas = new Ofertas(bot);

bot.registerObserver(melhoreOfertas);
bot.registerObserver(elastic);
bot.registerObserver(listaOfertas);
bot.registerObserver(produtos);

bot.scrapper();
