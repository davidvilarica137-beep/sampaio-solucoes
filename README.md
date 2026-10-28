# Sampaio Soluções — Site Institucional

Site institucional profissional para **Sampaio Soluções**, empresa de construção, reformas, instalações elétricas, hidráulicas, acabamentos, automação residencial e instalações domésticas.

Site estático, sem backend, pronto para publicação no **GitHub Pages**.

## Estrutura do projeto

```
sampaio-solucoes/
├── index.html                  # Página inicial (única página)
├── 404.html                    # Página de erro personalizada (quando disponível)
├── robots.txt                  # Permissão de indexação para mecanismos de busca
├── sitemap.xml                 # Mapa de site para o Google Search Console
├── README.md                   # Este arquivo
├── .gitignore
└── assets/
    ├── css/
    │   └── style.css           # Estilo principal (design system)
    ├── js/
    │   └── main.js             # Interações: menu, FAQ, formulário
    ├── images/
    │   └── hero-composition.svg # Composição visual do hero (técnica/instalações)
    └── icons/
        ├── sprite.svg          # Sprite de ícones SVG (uso via <use href="#...">)
        └── favicon.svg         # Favicon original
```

## Como executar localmente

O site é estático e não exige servidor, mas recomenda-se usar um servidor HTTP local para evitar bloqueios de recursos:

```bash
# 1. Entrar no diretório do projeto
cd /home/cliente/sampaio-solucoes

# 2. Iniciar servidor HTTP local
python3 -m http.server 8000

# 3. Abrir no navegador
#    http://localhost:8000
```

**Alternativa:** abrir `index.html` diretamente no navegador. Alguns navegadores podem bloquear recursos (como o sprite SVG) por política de segurança de arquivo local (`file://`). Se isso ocorrer, use o servidor HTTP local acima.

## Como testar a navegação

1. Iniciar o servidor HTTP local (`python3 -m http.server 8000`)
2. Abrir `http://localhost:8000`
3. Testar:
   - **Menu de navegação** (hambúrguer no mobile, links no desktop)
   - **Botão "Solicitar orçamento"** (abre WhatsApp)
   - **Botões de cada serviço** (abrem WhatsApp com mensagem pré-preenchida)
   - **Botão flutuante do WhatsApp** (abre WhatsApp)
   - **FAQ** (clique nas perguntas para expandir)
   - **Formulário de orçamento** (clicar em "Enviar" abre o WhatsApp com a mensagem preparada)
   - **Responsividade**: redimensionar a janela (1200px, 768px, 375px)

## Como criar o repositório no GitHub

1. Acesse https://github.com e entre com sua conta.
2. Clique em **New repository** (+).
3. Configure:
   - **Repository name:** `sampaio-solucoes`
   - **Public** (se quiser que o site fique acessível à qualquer um)
   - **Initialize this repository with:** (nenhum — vamos enviar os arquivos manualmente)
   - Clique em **Create repository**.
4. Siga o fluxo de push:

```bash
cd /home/cliente/sampaio-solucoes
git init
git add -A
git commit -m "Site institucional: Sampaio Soluções"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/sampaio-solucoes.git
git push -u origin main
```

Substitua `SEU_USUARIO` pelo nome de usuário real do GitHub.

## Como publicar no GitHub Pages

1. No GitHub, abra o repositório `sampaio-solucoes`.
2. Vá em **Settings** > **Pages** (à esquerda).
3. Em **Branch**, escolha `main` e clique em **Save**.
4. O GitHub Pages estará ativo instantaneamente.
5. Verifique o endereço público:
   - https://SEU_USUARIO.github.io/sampaio-solucoes/

## Como identificar o endereço público

O site ficará disponível em:

- Raiz: `https://SEU_USUARIO.github.io/sampaio-solucoes/`

Se o repositório for o **username**, o endereço é `https://SEU_USUARIO.github.io/`. Como este projeto está em um diretório chamado `sampaio-solucoes`, o endereço será o indicado acima.

## O que precisa ser confirmado pelo cliente antes da publicação definitiva

- **Nome da empresa:** Sampaio Soluções (confirmado)
- **Telefone/WhatsApp:** (41) 99270-4394 → link: https://wa.me/5541992794394 (confirmado)
- **E-mail:** sampaiosolucoes2904@gmail.com (confirmado)
- **Endereço:** Rua Fortunato, 75, sala 4 – Santa Cecília, São Paulo – SP, 01224-030 (fornecido)
- **Nome de usuário do GitHub:** a definir
- **URL definitiva do GitHub Pages:** a definir
- **URL canônica no <head>:** atualizar para o endereço definitivo
- **Meta og:url e og:image:** atualizar se o caminho dos assets for ajustado
- **Favicon:** definir (será substituído pelo favicon.svg atual)
- **Mapa de site (sitemap.xml):** gerar com o endereço definitivo
- **robots.txt:** ajustar se houver restrição de indexação
- **Política de privacidade:** criar se houver necessidade
- **Termos de uso:** criar se houver necessidade

## Próximas etapas (configuração do GitHub Pages e domínio)

1. **Criar o repositório:** seguir os passos acima.
2. **Ativar o GitHub Pages:** Settings > Pages > Branch main.
3. **Configurar o domínio:** se o cliente tiver um domínio (Hostinger etc.), configurar:
   - `CNAME` (caminho relativo) no repositório
   - Redirecionamento do domínio para o GitHub Pages
   - DNS: A/AAAA ou CNAME apontando para o GitHub
4. **Google Search Console:**
   - Adicionar o site: https://SEU_USUARIO.github.io/sampaio-solucoes/
   - Verificar a propriedade
   - Submeter o sitemap.xml
   - Ativar o provedor de registro de DNS se necessário
5. **Verificar a indexação:** após ativar o GitHub Pages e o Search Console, solicitar a indexação nas Ferramentas de Propriedade > URLs.

## Testes disponíveis

- **HTML:** parse sem erros de tags
- **JavaScript:** verificação de sintaxe com `node --check`
- **Servidor HTTP:** `python3 -m http.server 8000`
- **Responsividade:** teste em 1200px, 768px, 375px
