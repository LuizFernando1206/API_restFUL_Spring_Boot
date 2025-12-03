package com.estoquepi.estoque_api_restful.controller;

import com.estoquepi.estoque_api_restful.model.Produto;
import com.estoquepi.estoque_api_restful.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/produtos")
public class ProdutoController  {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping
    public List<Produto> listarTodos() {
        return produtoService.buscarTodos();
    }

    @GetMapping("/{id}")
    public Optional<Produto>  buscarPorId(@PathVariable Long id){
        return produtoService.buscarPorId(id);
    }

    @PostMapping("/salvar-todos")
    public List<Produto> salvarTodos(@RequestBody List<Produto> produtos) {
        return produtoService.salvarTodos(produtos);
    }

    @PostMapping("/salvar")
    public Produto salvar(@RequestBody Produto produto) {
        return produtoService.salvar(produto);
    }

    @PutMapping("/{id}")
    public Produto atualizar(@PathVariable Long id,@RequestBody Produto produto) {
        return produtoService.atualizar(id, produto);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        produtoService.deletar(id);
    }

    @DeleteMapping()
    public void deletarTodos() {
        produtoService.deletarTudo();
    }
}
