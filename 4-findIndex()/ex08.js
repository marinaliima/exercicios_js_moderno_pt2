// 8. Encontre o índice do primeiro produto inativo para que ele possa ser arquivado.

const produtos = [
    { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
    { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
    { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
    { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const encontraPrimeiroIndiceInativo = produtos.findIndex((p) => p.ativo === false);

console.log(`Índice do primeiro produto inativo: ${(encontraPrimeiroIndiceInativo)}`);