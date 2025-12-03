package com.estoquepi.estoque_api_restful.repository;

import com.estoquepi.estoque_api_restful.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
}
