package com.estoquepi.estoque_api_restful.service;

import com.estoquepi.estoque_api_restful.model.Produto;
import com.estoquepi.estoque_api_restful.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public Produto salvar(Produto produto) {
        return produtoRepository.save(produto);
    }

    public List<Produto> salvarTodos(List<Produto> produtos) {
        return produtoRepository.saveAll(produtos);
    }

    public Optional<Produto> buscarPorId(Long id) {
        return produtoRepository.findById(id);
    }

    public List<Produto> buscarTodos() {
        return produtoRepository.findAll();
    }

    public Produto atualizar(Long id, Produto produtoAtualizado) {
        return produtoRepository.findById(id)
                .map(produto -> {
                    produto.setNome(produtoAtualizado.getNome());
                    produto.setPreco(produtoAtualizado.getPreco());
                    produto.setQuantidade(produtoAtualizado.getQuantidade());
                    produto.setStatus(produtoAtualizado.getStatus());
                    return produtoRepository.save(produto);
                })
                .orElse(null);
    }

    public void deletar(Long id) {
        produtoRepository.deleteById(id);
    }

    public void deletarTudo() {
        produtoRepository.deleteAll();
    }
}
