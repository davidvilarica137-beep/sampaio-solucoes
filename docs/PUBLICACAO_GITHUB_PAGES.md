# PUBLICACAO_GITHUB_PAGES.md

Documentação passo a passo para publicar o site **Sampaio Soluções** no GitHub Pages.

---

## 1. Pré-requisitos

- Uma conta no GitHub (https://github.com)
- O repositório **sampaio-solucoes** criado (sem arquivos iniciais)
- O projeto baixado/local em `/home/cliente/sampaio-solucoes`

---

## 2. Criar o repositório

1. Acesse https://github.com
2. Clique no ícone **+** (Top right) > **New repository**
3. Configure:
   - **Repository name:** `sampaio-solucoes`
   - **Public** (selecione)
   - **Initialize this repository with:** (nenhum — vazio)
   - **Add .gitignore:** (None)
   - Clique em **Create repository**

---

## 3. Enviar os arquivos

No terminal:

```bash
cd /home/cliente/sampaio-solucoes

git init
git add -A
git commit -m "Site institucional: Sampaio Soluções"

git branch -M main

git remote add origin https://github.com/SEU_USUARIO/sampaio-solucoes.git
git push -u origin main
```

Substitua `SEU_USUARIO` pelo nome de usuário do GitHub.

---

## 4. Ativar o GitHub Pages

1. No GitHub, abra o repositório `sampaio-solucoes`
2. Vá em **Settings** (à esquerda)
3. Role até **Pages** (geralmente perto do final da página)
4. Em **Branch**, escolha `main`
5. Clique em **Save**
6. O GitHub Pages estará ativo em instantes

---

## 5. Endereço público

O site ficará disponível em:

```
https://SEU_USUARIO.github.io/sampaio-solucoes/
```

- Se o repositório for o **username** (nome do usuário), o endereço é:
  ```
  https://SEU_USUARIO.github.io/
  ```
- Como este projeto está em um diretório `sampaio-solucoes`, o endereço é o indicado acima.

> **Verificação:** abra o link no navegador. O site deve carregar com o estilo, o menu e os botões de WhatsApp.

---

## 6. Verificar após a publicação

| Verificação | Comando |
|---|---|
| Acesso ao site base | `curl -I https://SEU_USUARIO.github.io/sampaio-solucoes/` |
| Css | `curl -I https://SEU_USUARIO.github.io/sampaio-solucoes/assets/css/style.css` |
| Js | `curl -I https://SEU_USUARIO.github.io/sampaio-solucoes/assets/js/main.js` |
| Imagem | `curl -I https://SEU_USUARIO.github.io/sampaio-solucoes/assets/images/hero-composition.svg` |
| Sprite | `curl -I https://SEU_USUARIO.github.io/sampaio-solucoes/assets/icons/sprite.svg` |
| Sitemap | `curl -I https://SEU_USUARIO.github.io/sampaio-solucoes/sitemap.xml` |
| robots.txt | `curl -I https://SEU_USUARIO.github.io/sampaio-solucoes/robots.txt` |

Todos os links devem retornar `HTTP 200`.

---

## 7. Configuração do domínio definitivo (Hostinger)

1. No GitHub Pages, em **Custom domain**, insira seu domínio (ex.: `www.sampaio.com.br`)
2. Adicione o record `CNAME` no Hostinger:
   - Tipo: `CNAME`
   - Valor: `SEU_USUARIO.github.io`
   - TTL: padrão
3. No Hostinger, verifique se o domínio aponta para a Amazon (ou para o GitHub)
4. Sincronize os DNS (pode levar até 24h)
5. Após a propagação, o site estará em:
   ```
   https://www.seu-dominio.com.br/
   ```

---

## 8. Arquivos relevantes

```
sampaio-solucoes/
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── README.md
├── .gitignore
└── assets/
    ├── css/style.css
    ├── js/main.js
    ├── images/hero-composition.svg
    └── icons/
        ├── sprite.svg
        └── favicon.svg
```

---

## 9. Como atualizar o site

1. Edite os arquivos localmente
2. Faça commit:

```bash
cd /home/cliente/sampaio-solucoes
git add -A
git commit -m "Atualização: descrição das mudanças"
git push origin main
```

3. O GitHub Pages reimprime automaticamente (geralmente em minutos)

---

## 10. Informações comerciais que precisam de confirmação

| Item | Estado |
|---|---|
| Nome | Sampaio Soluções (confirmado) |
| Telefone | (41) 99270-4394 (confirmado) |
| E-mail | sampaiosolucoes2904@gmail.com (confirmado) |
| Endereço | Rua Fortunato, 75, sala 4 — Santa Cecília, SP (fornecido) |
| Analítica/rastreadores | decidir (não incluí nesta versão) |
| Página de políticas | criar se houver necessidade |
| Serviços pagos | não incluir |
