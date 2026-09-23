//AGREGAÇÃO - Ambas as classes podem existir, mas uma não funciona corretamente sem a outra (Carrinho sem Produto)
export class CarrinhoDeCompras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Produto[]): void { //pode enviar um ou mais produtos
    for (const produto of produtos) { //percorre array e adiciona no carrinho
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {  //retorna number
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);  //.reduce percorre array e devolve valor acumulado
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Mouse', 50.00);
const produto2 = new Produto('Teclado', 100.00);
const produto3 = new Produto('Monitor', 900.00);

const meuCarrinho = new CarrinhoDeCompras();

console.log("Meu carrinho:")
console.log(meuCarrinho)

console.log("Produtos:")
meuCarrinho.inserirProdutos(produto1, produto2, produto3);

console.log(produto1, produto2, produto3)
console.log("Adicionei os produtos ao carrinho")

console.log("Quantidade: " + meuCarrinho.quantidadeProdutos());
console.log("Valor total: " + meuCarrinho.valorTotal());

console.log("Meu carrinho:")
console.log(meuCarrinho)

