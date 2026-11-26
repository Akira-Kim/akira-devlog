# Akira Devlog

Devlog/portfolio bilíngue (Português e Inglês), com tema escuro roxo, feito em HTML, CSS e JavaScript puro para GitHub Pages.

## Estrutura
- `index.html` — página principal
- `style.css` — identidade visual e layout responsivo
- `script.js` — alternância de idioma, filtros, busca e leitura dos artigos
- `posts.js` — conteúdo dos artigos iniciais
- `.nojekyll` — evita processamento Jekyll desnecessário

## Publicação
1. Crie um repositório público chamado `akira-devlog`.
2. Clone o repositório para `Desktop/GitHub/akira-devlog`.
3. Coloque estes arquivos diretamente na raiz clonada (não copie nem substitua a pasta `.git`).
4. Faça commit e push:
   ```bash
   git add -A
   git commit -m "Initial Akira Devlog website"
   git push -u origin main
   ```
5. No GitHub, abra **Settings → Pages**; selecione **Deploy from a branch**, branch `main`, pasta `/(root)` e salve.

URL esperada: https://akira-kim.github.io/akira-devlog/

## Atualizar conteúdo
Edite `posts.js`, mantendo cada artigo com `id`, `date`, `category`, `title`, `excerpt` e `body`. Os campos `title`, `excerpt` e `body` têm versões `pt` e `en`.

## Projetos citados
- ProjetoOmega: https://github.com/Akira-Kim/ProjetoOmega
- Simulador de Bilhares Simpléticos: https://github.com/Akira-Kim/ProjetoOmega/tree/main/SimuladorBilharesSimpleticos
- Sexta-feira: https://github.com/Akira-Kim/Sexta-feira
- Ctrl-Play: https://github.com/Akira-Kim/Ctrl-Play
- Smart_Wood: https://github.com/Akira-Kim/Smart_Wood

O site é estático e não exige Node, build, dependências ou submódulos.
