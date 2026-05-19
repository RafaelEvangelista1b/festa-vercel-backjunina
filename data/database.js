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
//   Simplifica o aprendizado! Não precisamos instalar e configure
//   um banco de dados externo. O foco é aprender a API e os Middlewares.
// =============================================================

// ─── Tabela de Categorias ─────────────────────────────────────
// Cada categoria agrupa produtos do cardápio da pastelaria.
let categorias = [
    { id: 1, nome: 'Pastéis Salgados' },
    { id: 2, nome: 'Bebidas' },
    { id: 3, nome: 'Sobremesas' }
];

// ─── Tabela de Produtos ───────────────────────────────────────
// Cada produto tem um ID único, pertence a uma categoria (categoriaId),
// e possui nome, descrição, preço e o nome do arquivo de imagem.
let produtos = [
    // --- PASTÉIS SALGADOS (Categoria 1) ---
    {
        id: 1,
        categoriaId: 1,
        nome: 'Pastel de Queijo',
        descricao: 'Pastel super crocante recheado com bastante queijo muçarela derretido.',
        preco: 10.00,
        imagem: './images/pastelqueijo.webp'
    },
    {
        id: 2,
        categoriaId: 1,
        nome: 'Pastel Artesanal de catupiry',
        descricao: 'Pastel artesanal recheado com o autêntico catupiry cremoso.',
        preco: 12.00,
        imagem: './images/pastelcatupiry.webp'
    },
    {
        id: 3,
        categoriaId: 1,
        nome: 'Pastel de Carne',
        descricao: 'Pastel clássico com recheio de carne moída bem temperada e suculenta.',
        preco: 11.00,
        imagem: './images/pastelcarne.webp'
    },
    {
        id: 4,
        categoriaId: 1,
        nome: 'Pastel de Frango',
        descricao: 'Recheio de frango desfiado com temperos especiais da casa.',
        preco: 11.00,
        imagem: './images/pastelfrango.webp'
    },
    {
        id: 5,
        categoriaId: 1,
        nome: 'Pastel de Pizza',
        descricao: 'Combinação perfeita de queijo, presunto, tomate e orégano.',
        preco: 12.00,
        imagem: './images/pastelpizza.webp'
    },
    {
        id: 6,
        categoriaId: 1,
        nome: 'Pastel de Costela',
        descricao: 'Pastel gourmet recheado com costela desfiada cozida lentamente.',
        preco: 16.00,
        imagem: './images/pastelcostela.webp'
    },
    {
        id: 7,
        categoriaId: 1,
        nome: 'Pastel de Camarão',
        descricao: 'Pastel sofisticado recheado com camarões selecionados e temperados.',
        preco: 18.00,
        imagem: './images/pastelcamarao.webp'
    },
    {
        id: 8,
        categoriaId: 1,
        nome: 'Pastel de 4 Queijos',
        descricao: 'Mistura cremosa de muçarela, catupiry, provolone e parmesão.',
        preco: 14.00,
        imagem: './images/pastelquatroqueijos.webp'
    },

    // --- BEBIDAS (Categoria 2) ---
    {
        id: 9,
        categoriaId: 2,
        nome: 'Refrigerante',
        descricao: 'Lata 350ml – Sabores variados.',
        preco: 6.00,
        imagem: './images/refri.webp'
    },
    {
        id: 10,
        categoriaId: 2,
        nome: 'Coca-Cola Lata',
        descricao: 'Refrigerante Coca-Cola lata de 350ml bem gelada.',
        preco: 7.00,
        imagem: './images/coca.webp'
    },
    {
        id: 11,
        categoriaId: 2,
        nome: 'Guaraná Lata',
        descricao: 'Refrigerante Guaraná Antarctica lata de 350ml bem gelada.',
        preco: 6.50,
        imagem: './images/guarana.webp'
    },
    {
        id: 12,
        categoriaId: 2,
        nome: 'Suco Natural',
        descricao: 'Suco natural feito na hora (consulte sabores disponíveis).',
        preco: 9.00,
        imagem: './images/suco.webp'
    },

    // --- SOBREMESAS (Categoria 3) ---
    {
        id: 13,
        categoriaId: 3,
        nome: 'Pastel de Chocolate',
        descricao: 'Pastel doce recheado com uma camada generosa de chocolate ao leite.',
        preco: 12.00,
        imagem: './images/pastelchocolate.webp'
    },
    {
        id: 14,
        categoriaId: 3,
        nome: 'Pastel de Banana',
        descricao: 'Pastel doce recheado com banana fatiada, açúcar e canela.',
        preco: 11.00,
        imagem: './images/pastelbanana.webp'
    },
    {
        id: 15,
        categoriaId: 3,
        nome: 'Churros',
        descricao: 'Churros crocantes polvilhados no açúcar e canela com doce de leite.',
        preco: 8.00,
        imagem: './images/churros.webp'
    }
];

// ─── Exportação dos dados ─────────────────────────────────────
module.exports = { categorias, produtos };