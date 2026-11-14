# Issues do projeto Quiz Básico

Cada item abaixo é uma issue. Copie o **Título** para o campo "Title" e o resto para o campo "Description". Depois adicione a **Label** indicada.

---

## 1. Adicionar temporizador por pergunta
**Label:** `enhancement`

**Descrição:**
Cada pergunta deve ter um tempo limite (ex.: 15 segundos). Se o tempo acabar, a pergunta conta como errada e o quiz avança.

**Tarefas:**
- [ ] Mostrar contagem regressiva na tela
- [ ] Marcar a pergunta como errada quando o tempo acabar
- [ ] Reiniciar o tempo a cada nova pergunta

---

## 2. Embaralhar a ordem das perguntas e das opções
**Label:** `enhancement`

**Descrição:**
Hoje as perguntas aparecem sempre na mesma ordem. Embaralhar para que cada partida seja diferente.

**Tarefas:**
- [ ] Embaralhar a lista de perguntas ao iniciar
- [ ] Embaralhar as opções de cada pergunta
- [ ] Garantir que a resposta certa continue sendo identificada corretamente

---

## 3. Salvar a melhor pontuação
**Label:** `enhancement`

**Descrição:**
Guardar o melhor resultado do jogador no navegador (localStorage) e mostrar na tela final.

**Tarefas:**
- [ ] Salvar a maior pontuação em `localStorage`
- [ ] Mostrar "Melhor pontuação" na tela de resultado

---

## 4. Adicionar mais perguntas e categorias
**Label:** `good first issue`

**Descrição:**
O quiz tem apenas 5 perguntas. Aumentar para pelo menos 15, divididas em categorias (ex.: Geografia, Tecnologia, Ciência).

**Tarefas:**
- [ ] Escrever 10 perguntas novas em `script.js`
- [ ] Adicionar um campo `categoria` em cada pergunta
- [ ] (Opcional) Permitir escolher a categoria antes de começar

---

## 5. Criar barra de progresso visual
**Label:** `enhancement`

**Descrição:**
Além do texto "Pergunta X de Y", mostrar uma barra que enche conforme o jogador avança.

**Tarefas:**
- [ ] Adicionar a barra no `index.html`
- [ ] Estilizar no `style.css`
- [ ] Atualizar a largura da barra no `script.js`

---

## 6. Melhorar o visual para celular
**Label:** `design`

**Descrição:**
Testar o quiz em telas pequenas e ajustar tamanhos de fonte, botões e espaçamentos.

**Tarefas:**
- [ ] Testar em tela de 360px de largura
- [ ] Aumentar a área de toque dos botões
- [ ] Adicionar modo escuro (opcional)

---

## 7. Mostrar a resposta certa no final
**Label:** `enhancement`

**Descrição:**
Na tela de resultado, listar as perguntas que o jogador errou junto com a resposta correta.

**Tarefas:**
- [ ] Guardar as respostas erradas durante o jogo
- [ ] Mostrar a lista na tela final

---

## 8. Corrigir bug: [exemplo de modelo para reportar bugs]
**Label:** `bug`

**Descrição:**
- **O que aconteceu:**
- **O que era esperado:**
- **Como reproduzir:**
  1. 
  2. 
- **Navegador e dispositivo:**
