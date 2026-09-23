//SINGLETON - Garante que uma classe tenha uma única instância
//se tentar instanciar a classe com mesmos valores, retornar a instância já existente

export class Database {
  private static database: Database;  //do tipo Database (da própria classe), só pode ser acessado dentro da classe

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) { }

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`); //simulando uma conexão com um banco de dados
  }

  //FACTORY METHOD - Método para criar novo objeto de uma classe (melhor ao criar instâncias complexas)
  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {                  //se database já tem algum valor
      console.log('Instância já existe:');
      return Database.database;               //retorna esse valor existente (descartando o valor inserido)
    }
    console.log('Criando nova instância...');  //se database ainda não tem um valor
    Database.database = new Database(host, user, password); //cria nova database com o valor inserido
    return Database.database;
  }
}

console.log("-------------------------")
const db1 = Database.getDatabase('localhost', 'root', '123456');
db1.connect();

console.log("-------------------------")
const db2 = Database.getDatabase('localhost', 'root', '123456');
db2.connect();

console.log("-------------------------")  //mesmo tentando criar nova instância passando novos valores, a database em si já existe
const db3 = Database.getDatabase('bancodedados', 'bancao', '987654');
db3.connect();

