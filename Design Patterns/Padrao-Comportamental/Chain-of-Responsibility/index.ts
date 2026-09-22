import * as readline from "readline";
import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import Middleware from "./middlewares/Middleware";
import Server from "./servers/Server";
import CheckWeakPasswordMiddleware from "./middlewares/CheckWeakPasswordMiddleware";

//declare var process;

const server: Server = new Server();

function setPromptQuestions() {

  const rl = readline.createInterface({ //cria interface com input e output
    input: process.stdin,
    output: process.stdout
  })

  rl.question("Digite o seu e-mail:", (email: string) => {

    rl.question("Digite a sua senha:", (password: string) => {
      server.logIn(email, password);  //chama login do servidor
      rl.close();  //fecha conexão com readline
    });

  });

  rl.on("close", () => {  //definir evento
    setPromptQuestions(); //quando fechar interface, inicia novo ciclo de perguntas
  });

}

const middleware: Middleware = new CheckUserMiddleware(); //primeiro middleware da corrente

//linka primeiro com o proximo que quero que seja executado
middleware.linkWith(new CheckPermissionMiddleware());

middleware.linkWith(new CheckWeakPasswordMiddleware());

server.setMiddleware(middleware); //define primeiro middleware da corrente

setPromptQuestions(); //inicia as perguntas de entrada

//npm run dev -- "Design Patterns/Padrao-Comportamental/Chain-of-responsibility/index.ts"
