const baseURL = "http://localhost:8080/produtos";

function mostrarResultado(mensagem) {
    const resultado = document.getElementById("resultadoConteudo");
    if (typeof mensagem === 'object') {
        resultado.innerHTML = JSON.stringify(mensagem, null, 2);
    } else {
        resultado.innerHTML = mensagem;
    }
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("status").value = "EM_ESTOQUE";
}

function inserirProduto() {
    const produto = {
        nome: document.getElementById("nome").value,
        preco: parseFloat(document.getElementById("preco").value),
        quantidade: parseInt(document.getElementById("quantidade").value),
        status: document.getElementById("status").value
    };

    // Validação básica
    if (!produto.nome || !produto.preco || !produto.quantidade) {
        mostrarResultado(" Preencha todos os campos!");
        return;
    }

    fetch(`${baseURL}/salvar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto)
    })
    .then(response => {
        if (!response.ok) throw new Error('Erro na requisição');
        return response.json();
    })
    .then(data => {
        mostrarResultado(data);
        limparCampos();
        alert(" Produto inserido com sucesso!");
    })
    .catch(error => {
        console.error(error);
        mostrarResultado(" Erro ao inserir produto");
    });
}

function buscarTodos() {
    fetch(baseURL)
        .then(response => {
            if (!response.ok) throw new Error('Erro na requisição');
            return response.json();
        })
        .then(data => {
            if (data.length === 0) {
                mostrarResultado(" Nenhum produto encontrado");
            } else {
                mostrarResultado(data);
            }
        })
        .catch(error => {
            console.error(error);
            mostrarResultado(" Erro ao buscar produtos");
        });
}

function buscarPorId() {
    const id = document.getElementById("idBuscar").value;

    if (!id) {
        mostrarResultado(" Digite um ID válido!");
        return;
    }

    fetch(`${baseURL}/${id}`)
        .then(response => {
            if (!response.ok) throw new Error('Produto não encontrado');
            return response.json();
        })
        .then(data => mostrarResultado(data))
        .catch(error => {
            console.error(error);
            mostrarResultado(" Produto não encontrado");
        });
}

function atualizar() {
    const id = document.getElementById("idAtualizar").value;

    if (!id) {
        mostrarResultado(" Digite um ID válido!");
        return;
    }

    const produtoAtualizado = {
        nome: document.getElementById("nome").value,
        preco: parseFloat(document.getElementById("preco").value),
        quantidade: parseInt(document.getElementById("quantidade").value),
        status: document.getElementById("status").value
    };

    if (!produtoAtualizado.nome || !produtoAtualizado.preco || !produtoAtualizado.quantidade) {
        mostrarResultado(" Preencha todos os campos!");
        return;
    }

    fetch(`${baseURL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produtoAtualizado)
    })
    .then(response => {
        if (!response.ok) throw new Error('Erro ao atualizar');
        return response.json();
    })
    .then(data => {
        mostrarResultado(data);
        limparCampos();
        alert(" Produto atualizado com sucesso!");
    })
    .catch(error => {
        console.error(error);
        mostrarResultado(" Erro ao atualizar produto");
    });
}

function deletarPorId() {
    const id = document.getElementById("idDeletar").value;

    if (!id) {
        mostrarResultado(" Digite um ID válido!");
        return;
    }

    if (!confirm(`Deseja realmente deletar o produto ID ${id}?`)) {
        return;
    }

    fetch(`${baseURL}/${id}`, { method: "DELETE" })
        .then(response => {
            if (!response.ok) throw new Error('Erro ao deletar');
            mostrarResultado(` Produto ID ${id} deletado com sucesso`);
            document.getElementById("idDeletar").value = "";
        })
        .catch(error => {
            console.error(error);
            mostrarResultado(" Erro ao deletar produto");
        });
}

function deletarTodos() {
    if (!confirm(" Deseja realmente deletar TODOS os produtos? Esta ação é irreversível!")) {
        return;
    }

    fetch(baseURL, { method: "DELETE" })
        .then(response => {
            if (!response.ok) throw new Error('Erro ao deletar');
            mostrarResultado(" Todos os produtos foram deletados");
        })
        .catch(error => {
            console.error(error);
            mostrarResultado(" Erro ao deletar todos os produtos");
        });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("btnInserir").addEventListener("click", inserirProduto);
    document.getElementById("btnBuscarTodos").addEventListener("click", buscarTodos);
    document.getElementById("btnBuscarPorId").addEventListener("click", buscarPorId);
    document.getElementById("btnAtualizar").addEventListener("click", atualizar);
    document.getElementById("btnDeletarPorId").addEventListener("click", deletarPorId);
    document.getElementById("btnDeletarTodos").addEventListener("click", deletarTodos);
});