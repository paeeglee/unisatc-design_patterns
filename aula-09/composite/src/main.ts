import Arquivo from "./Arquivo";
import Pasta from "./Pasta";

const raiz = new Pasta("Raiz", "/");

const arquivo1 = new Arquivo("Arquivo 1", "/arquivo1");
const arquivo2 = new Arquivo("Arquivo 2", "/arquivo2");
const arquivo3 = new Arquivo("Arquivo 3", "/arquivo3");
const arquivo4 = new Arquivo("Arquivo 4", "/arquivo4");
const arquivo5 = new Arquivo("Arquivo 5", "/arquivo5");
const arquivo6 = new Arquivo("Arquivo 6", "/arquivo6");

raiz.adicionar(arquivo1);
raiz.adicionar(arquivo2);
raiz.adicionar(arquivo3);
raiz.adicionar(arquivo4);
raiz.adicionar(arquivo5);
raiz.adicionar(arquivo6);

raiz.exibir();
