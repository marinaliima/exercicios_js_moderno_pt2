// 1. Crie um novo array contendo apenas os nomes dos produtos em letras maiúsculas.

const produtos = [
    { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
    { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
    { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
    { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const produtosMaiusculos = produtos.map((p) => p.nome.toUpperCase());

console.log(produtosMaiusculos);