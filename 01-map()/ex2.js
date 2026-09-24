// 2. Crie um novo array de produtos em que cada item tenha o preço reajustado com 10% de desconto.

const produtos = [
    { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
    { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
    { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
    { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const produtosComDesconto = produtos.map((p) => {
    return {
        id: p.id,
        nome: p.nome,
        preco: p.preco * 0.9,
        estoque: p.estoque,
        ativo: p.ativo
    };
});

console.log(produtosComDesconto);