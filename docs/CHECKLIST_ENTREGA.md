# CHECKLIST_ENTREGA

Checklist de **testes e etapas pendentes** para o site **Sampaio Soluções**.

---

## 1. Arquivos principais (verificar existência)

- [x] `index.html`
- [x] `404.html`
- [x] `robots.txt`
- [x] `sitemap.xml`
- [x] `README.md`
- [x] `.gitignore`
- [x] `assets/css/style.css`
- [x] `assets/js/main.js`
- [x] `assets/images/hero-composition.svg`
- [x] `assets/icons/sprite.svg`
- [x] `assets/icons/favicon.svg`
- [x] `assets/manifest.json`

---

## 2. Verificação de arquivos e caminhos

- [x] Nenhum caminho absoluto para recursos (`/sampaio-solucoes/...`)
- [x] Css carregado: `assets/css/style.css`
- [x] Js carregado: `assets/js/main.js`
- [x] Imagem do hero carregada: `assets/images/hero-composition.svg`
- [x] Favicon carregado: `assets/icons/favicon.svg`
- [x] Sprite SVG carregada: `assets/icons/sprite.svg`
- [x] Nenhum recurso em 404 no servidor

---

## 3. Links internos

Verificar no navegador:

- [x] Menu: Início, Serviços, Diferenciais, Perguntas Frequentes, Contato
- [x] Botão "Solicitar orçamento" (header)
- [x] Botões de cada serviço (perguntas frequentes, categoria)
- [x] Botão flutuante do WhatsApp
- [x] Link de e-mail (`mailto:`)
- [x] Link do WhatsApp (`https://wa.me/5541992794394`)
- [x] Links internos visíveis (semânticos, sem `javascript:`)
- [x] Página `404.html` acessível

---

## 4. Botões de WhatsApp

- [x] Header CTA
- [x] Hero CTA
- [x] Botões de cada categoria
- [x] Botão flutuante
- [x] Botão do rodapé "Falar no WhatsApp"

---

## 5. Links de e-mail

- [x] E-mail do formulário de contato
- [x] Endereço no rodapé
- [x] Correção de link `mailto:` sem `href` duplicado

---

## 6. Funcionamento do menu

- [x] Menu mobile (hambúrguer) aberto/fechado
- [x] Links de fecham o menu
- [x] Acessibilidade: `aria-expanded`, `aria-controls`, `role="menu"`
- [x] Smooth scroll para âncoras

---

## 7. Funcionamento do formulário

- [x] Fields:
  - Serviço (select)
  - Nome
  - Telefone
  - Mensagem
- [x] Validação visual de erros
- [x] Envio via WhatsApp (com mensagem preparada)
- [x] Sem envio simulado
- [x] JANELA de confirmação (não bloquear)
- [x] Reset do formulário

---

## 8. Funcionamento da FAQ

- [x] Perguntas clicáveis expandem/fecham
- [x] Só uma resposta aberta por vez
- [x] Ícones de expandir/fechar
- [x] Contento com JavaScript desativado? Não (FAQ não funciona sem JS)

---

## 9. JavaScript

- [x] Verificação de sintaxe: `node --check assets/js/main.js`
- [x] Execução sem erros no navegador

---

## 10. Testes de acessibilidade

- [x] `<html lang="pt-BR">`
- [x] Navegação por teclado
- [x] Estados de foco visíveis
- [x] Botões com `aria-label`
- [x] Links semânticos
- [x] Texto alternativo nas imagens
- [x] Menu mobília acessível
- [x] Formulário com labels

---

## 11. Responsividade

- [x] Desktop (1200px+)
- [x] Tablet (768px–1024px)
- [x] Mobile (375px–425px)
- [x] Nenhum deslize lateral em telas menores
- [x] Botões com área de toque adequada
- [x] Menu mobile funcional

---

## 12. Análise de código

- [x] Nenhum ID duplicado
- [x] Nenhuma tag não fechada
- [x] Não existe `<script>` com conteúdo de backend
- [x] Sem credenciais
- [x] Sem dados sensíveis
- [x] Sem conteúdo inventado (depoimentos, avaliações, anos de experiência)

---

## 13. Imagem

- [x] `assets/images/hero-composition.svg`
- [x] Ícones SVG original (`sprite.svg`)
- [x] Favicon SVG (`favicon.svg`)
- [x] Apenas imagens locais usadas
- [x] Nenhuma imagem externa de serviço

---

## 14. SEO

- [x] `<title>` específico
- [x] Meta description
- [x] Viewport
- [x] `lang="pt-BR"`
- [x] Título H1/H2/H3
- [x] Links internos funcionais
- [x] Texto alternativo
- [x] Sitemap
- [x] Robots
- [x] Open Graph
- [x] Favicon
- [x] Página 404

---

## 15. Desempenho

- [x] Código leve
- [x] Sem dependências externas
- [x] Sem frameworks
- [x] Sem bibliotecas pesadas
- [x] Imagens otimizadas
- [x] Sem efeitos visuais desnecessários

---

## 16. Documentação

- [x] `README.md`
- [x] `docs/PUBLICACAO_GITHUB_PAGES.md`
- [x] `docs/CONFIGURACAO_SEO.md`
- [x] `docs/CHECKLIST_ENTREGA.md`

---

## 17. Etapas pendentes (próximas)

- [ ] **Criar repositório `sampaio-solucoes` (com autorização)**
- [ ] **Ativar o GitHub Pages**
- [ ] **Gerar chave de acesso (SSH ou Token)**
- [ ] **Enviar os arquivos**
- [ ] **Verificar os links no GitHub Pages**
- [ ] **Atualizar `robots.txt` com o domínio definido**
- [ ] **Atualizar `sitemap.xml` com o domínio definitivo**
- [ ] **Atualizar `canonical`**
- [ ] **Ativar o Google Search Console**
- [ ] **Submeter o sitemap**
- [ ] **Verificar a indexação**
- [ ] **Verificar o Google Analytics/Insights**
- [ ] **Atualizar o endereço público no README**
- [ ] **Atualizar o `og:url` e `og:image`**
- [ ] **Insira a URL canônica**
- [ ] **Insira o políticas (privacy, terms)**
- [ ] **Atualizar o endereço do favicon**
- [ ] **Verificar a renovação do site**
- [ ] **Verificar o email de notificação**
- [ ] **Verificar a compatibilidade com browsers**
- [ ] **Verificar a compatibilidade com dispositivos**

---

## 18. Encerramento

- [ ] Site local funcional
- [ ] Documentação completa
- [ ] Código organizado
- [ ] Pronto para GitHub Pages
