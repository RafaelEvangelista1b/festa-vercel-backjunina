

const express = require('express');
const router = express.Router();
let db = require('../data/database');

router.get('/erro-teste', (req, res) => {
    // throw new Error() lança um erro intencional.
    // O Express captura e repassa para o middleware de erro (errorHandler.js).
    throw new Error("O servidor da Festa Junina tropeçou!");
});


router.get('/', (req, res) => {

    // Tentamos ler o parâmetro "categoriaId" da URL (ex: ?categoriaId=1)
    const categoriaId = req.query.categoriaId;

    // Se o parâmetro foi enviado, filtramos os produtos por categoria
    if (categoriaId) {

        const produtosFiltrados = db.produtos.filter(p => p.categoriaId == categoriaId);
        return res.json(produtosFiltrados);
    }

    // Se não tem filtro, retorna todos os produtos
    res.json(db.produtos);
});


router.get('/:id', (req, res) => {

    // Convertemos o ID de string para número inteiro com parseInt()
    const produtoId = parseInt(req.params.id);

    // .find() retorna o PRIMEIRO produto cujo id corresponde
    const produto = db.produtos.find(p => p.id === produtoId);

    if (produto) {
        res.json(produto);
    } else {
        // Status 404 = "Not Found" (não encontrado)
        res.status(404).json({ mensagem: 'Produto não encontrado.' });
    }
});


router.post('/', (req, res) => {

    // Calcula o novo ID automaticamente.
    // Se a lista não estiver vazia: pega o maior ID existente + 1
    // Se a lista estiver vazia: começa do 1
    const novoId = db.produtos.length > 0
        ? Math.max(...db.produtos.map(p => p.id)) + 1
        : 1;

    // Monta o objeto do novo produto com os dados recebidos no body
    const novoProduto = {
        id: novoId,
        categoriaId: req.body.categoriaId,
        nome: req.body.nome,
        descricao: req.body.descricao,
        preco: req.body.preco,
        imagem: req.body.imagem
    };

    // Adiciona ao nosso array (banco em memória)
    db.produtos.push(novoProduto);

    // Responde com status 201 e o produto criado
    res.status(201).json(novoProduto);
});


router.put('/:id', (req, res) => {

    const produtoId = parseInt(req.params.id);

    // .findIndex() retorna o ÍNDICE (posição) do item no array.
    // Retorna -1 se não encontrar.
    const index = db.produtos.findIndex(p => p.id === produtoId);

    if (index !== -1) {
        // Spread operator (...): mescla o produto original com os novos dados.
        // Os campos do req.body sobrescrevem apenas os campos enviados,
        // mantendo os campos não enviados intactos.
        db.produtos[index] = { ...db.produtos[index], ...req.body };
        res.json(db.produtos[index]);
    } else {
        res.status(404).json({ mensagem: 'Produto não encontrado.' });
    }
});


router.delete('/:id', (req, res) => {

    const produtoId = parseInt(req.params.id);

    // .filter() cria um NOVO array excluindo o produto com o ID informado.
    // Reatribuímos db.produtos (por isso usamos 'let' na importação).
    db.produtos = db.produtos.filter(p => p.id !== produtoId);

    res.json({ mensagem: 'Produto deletado com sucesso!' });
});

// ─── Exportação do Router ─────────────────────────────────────
module.exports = router;