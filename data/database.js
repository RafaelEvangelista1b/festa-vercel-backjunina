// =============================================================
// data/database.js — Banco de Dados em Memória
// =============================================================
// O que é isso?
//   Em vez de usar um banco de dados real (como MySQL ou MongoDB),
//   guardamos os dados aqui mesmo, dentro de arrays do JavaScript.
//   Isso funciona enquanto o servidor está ligado.
//   Quando o servidor reinicia, os dados voltam para o estado inicial.
//
// Por que usar isso nas aulas?
//   Simplifica o aprendizado! Não precisamos instalar e configurar
//   um banco de dados externo. O foco é aprender a API e os Middlewares.
// =============================================================

// ─── Tabela de Categorias ─────────────────────────────────────
// Cada categoria agrupa produtos do cardápio da Festa Junina.
let categorias = [
    { id: 1, nome: 'Doces' },
    { id: 2, nome: 'Salgados' },
    { id: 3, nome: 'Bebidas' }
];

// ─── Tabela de Produtos ───────────────────────────────────────
// Cada produto tem um ID único, pertence a uma categoria (categoriaId),
// e possui nome, descrição, preço e o nome do arquivo de imagem.
let produtos = [
    // --- PRATOS TÍPICOS (Categoria 1) ---
    {
        id: 1,
        categoriaId: 1,
        nome: 'Pamonha',
        descricao: 'Pamonha tradicional de milho verde, cozida na palha, super cremosa.',
        preco: 8.00,
        imagem: './images/pamonha.webp'
    },
    {
        id: 2,
        categoriaId: 1,
        nome: 'Bolo de Fubá',
        descricao: 'Fatia de bolo de fubá caseiro, fofinho e perfeito para acompanhar um café.',
        preco: 5.00,
        imagem: './images/bolofuba.webp'
    },
    {
        id: 3,
        categoriaId: 1,
        nome: 'Curau',
        descricao: 'Curau de milho verde polvilhado com canela em pó.',
        preco: 6.00,
        imagem: './images/curau.webp'
    },
    {
        id: 4,
        categoriaId: 1,
        nome: 'Milho Cozido',
        descricao: 'Espiga de milho verde cozida na hora, servida com manteiga derretida.',
        preco: 5.50,
        imagem: './images/milhocozido.webp'
    },

    // --- DOCES TRADICIONAIS (Categoria 2) ---
    {
        id: 5,
        categoriaId: 2,
        nome: 'Canjica',
        descricao: 'Canjica cremosa com leite de coco, amendoim e um toque de canela.',
        preco: 7.00,
        imagem: './images/canjica.webp'
    },
    {
        id: 6,
        categoriaId: 2,
        nome: 'Pé de Moleque',
        descricao: 'Doce tradicional de amendoim crocante com rapadura.',
        preco: 4.00,
        imagem: './images/pedemoleque.webp'
    },
    {
        id: 7,
        categoriaId: 2,
        nome: 'Maçã do Amor',
        descricao: 'Maçã fresca espetada no palito e envolvida por uma calda vermelha cristalizada.',
        preco: 6.00,
        imagem: './images/macaamor.webp'
    },

    // --- BEBIDAS QUENTES (Categoria 3) ---
    {
        id: 8,
        categoriaId: 3,
        nome: 'Quentão',
        descricao: 'Bebida quente tradicional à base de cachaça, gengibre, cravo e canela.',
        preco: 10.00,
        imagem: './images/quentao.webp'
    },
    {
        id: 9,
        categoriaId: 3,
        nome: 'Chocolate Quente',
        descricao: 'Chocolate quente cremoso feito com chocolate nobre.',
        preco: 8.00,
        imagem: './images/chocolatequente.webp'
    }
];

// ─── Exportação dos dados ─────────────────────────────────────
module.exports = { categorias, produtos };