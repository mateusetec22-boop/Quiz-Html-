# Quiz Básico

Um quiz simples feito com HTML, CSS e JavaScript puro, sem dependências.

## Como usar

1. Baixe ou clone o repositório
2. Abra o arquivo `index.html` no navegador

## Estrutura

```
.
├── index.html   # Estrutura da página
├── style.css    # Estilos
├── script.js    # Lógica do quiz e perguntas
└── README.md
```

## Como adicionar perguntas

Edite a lista `perguntas` em `script.js`:

```js
{
  texto: "Sua pergunta?",
  opcoes: ["A", "B", "C", "D"],
  correta: 0 // índice da resposta certa (começa em 0)
}
```

## Publicar no GitHub Pages (opcional)

No repositório, vá em **Settings → Pages**, escolha a branch `main` e a pasta `/ (root)`.

## Licença

Livre para usar e modificar.
