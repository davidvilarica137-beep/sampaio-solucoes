# CONFIGURACAO_SEO.md

Guia de configuração de **SEO técnico** para o site **Sampaio Soluções**.
Com foco em indexação, posicionamento e Google Search Console.

---

## 1. O que está configurado nesta versão

| Item | Status |
|---|---|
| `<html lang="pt-BR">` | OK |
| `<meta name="viewport">` | OK |
| Título HTML (`<title>`) | OK |
| Meta description | OK |
| Estrutura semântica HTML5 | OK |
| Hierarquia de títulos (H1–H3) | OK |
| Links internos funcionais | OK |
| Texto alternativo (`alt`) para imagens | OK |
| Favicon (`assets/icons/favicon.svg`) | OK |
| Página `404.html` | OK |
| Sitemap XML | OK (precisa de ajuste de URL) |
| Robots.txt | OK (precisa de ajuste) |
| Open Graph | OK |
| Dados estruturados Schema.org | OK (sem dados fictícios) |
| URLs relativas (GitHub Pages) | OK |
| SEO semântico e semântica local | OK |

---

## 2. Arquivos essenciais

```
sampaio-solucoes/
├── robots.txt
├── sitemap.xml
└── index.html
```

### robots.txt

```txt
User-agent: *
Allow: /

Sitemap: https://seu-usuario.github.io/sampaio-solucoes/sitemap.xml
```

### sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://seu-usuario.github.io/sampaio-solucoes/</loc>
    <lastmod>2026-10-30</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- ... -->
</urlset>
```

> **Importante:** substitua `seu-usuario` e `sampaio-solucoes` pelos valores reais
> antes de submeter ao Search Console.

### Meta tags principais (no `<head>` do index.html)

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sampaio Soluções | Construção, Reformas e Instalações</title>
<meta name="description" content="...">
<meta name="author" content="Sampaio Soluções">
<meta name="theme-color" content="#0f1f3d">

<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:type" content="website">
<meta property="og:url" content="https://seu-usuario.github.io/sampaio-solucoes/">
<meta property="og:image" content="https://seu-usuario.github.io/sampaio-solucoes/assets/images/hero-composition.svg">

<link rel="canonical" href="https://seu-usuario.github.io/sampaio-solucoes/">
```

> O `canonical` deve apontar para o domínio definitivo após a escolha do domínio.

---

## 3. Configurar o Google Search Console

1. Acesse https://search.google.com/search-console
2. Clique em **Adicionar proprietário**
3. Escolha o método **DNS** (recomendado para GitHub Pages):

   - Selecione `https://seu-usuario.github.io/sampaio-solucoes/`
   - Encontre o `TXT` record fornecido
   - No GitHub, vá em **Settings > Pages** (ou **DNS** dos repositórios)
   - Adicione o TXT record

> Alternativa: **HTML file** (mais simples, mas exige arquivos na raiz).

4. Após verificar a propriedade:
   - Clique em **Sitemap** à esquerda
   - Cole: `https://seu-usuario.github.io/sampaio-solucoes/sitemap.xml`
   - Clique em **Submit**

---

## 4. Como atualizar o sitemap

1. Edite `sitemap.xml`
2. Substitua a URL base:
   ```xml
   <loc>https://seu-usuario.github.io/sampaio-solucoes/</loc>
   ```
   Por:
   ```xml
   <loc>https://SEU_USUARIO.github.io/sampaio-solucoes/</loc>
   ```
   ou, se o domínio for configurado:
   ```xml
   <loc>https://www.seu-dominio.com.br/</loc>
   ```
3. Envie o commit:

```bash
cd /home/cliente/sampaio-solucoes
git add sitemap.xml
git commit -m "SEO: atualizar sitemap com URL definitiva"
git push origin main
```

4. No Search Console, vá em **Sitemaps** e clique em **Submit** novamente.

---

## 5. Como definir a URL canônica

No `<head>` do `index.html`:

```html
<link rel="canonical" href="https://SEU_USUARIO.github.io/sampaio-solucoes/">
```

Para domínio principal:

```html
<link rel="canonical" href="https://www.seu-dominio.com.br/">
```

Se o domínio for definido no GitHub Pages, o `canonical` deve apontar para o domínio
definitivo e o `og:url` também.

---

## 6. Como solicitar a indexação

1. No Google Search Console, vá em **URL Inspection**
2. Cole a URL: `https://seu-usuario.github.io/sampaio-solucoes/`
3. Clique em **Indexar**
4. O Google solicitará a indexação da página
5. Repita para as URLs principais
6. Após 1–2 semanas, visualizar o relatório de **Indexação** e **Performance**

---

## 7. Como avaliar os relatórios de desempenho

No Google Search Console, navegue por:

### **Performance**
- Mostra cliques, impressões, posição média e CTR
- Filtrar por: dispositivo, país, busca, página

### **Indexation**
- Verifica se as páginas estão indexadas
- Lista páginas "diferentes", "removidas", "conformes"

### **Coverage**
- Avisos de erros de indexação
- Corrigir e reenviar

### **Links**
- Contagem de links internos/externos
- Refinamentos de páginas

### **Abordagem**
- Se o site ficar lento ou não carregar em dispositivos móveis
- Debug do Core Web Vitals

---

## 8. Palavras-chave estratégicas (por seção)

| Seção | Palavra-chave |
|---|---|
| Hero | "Eletricista predial e residencial" |
| Serviços elétricos | "Instalação de pisos", "Piso vinílico" |
| Pisos e acabamentos | "Instalação de portas e janelas", "Forro de madeira e PVC" |
| Hidráulica e aquecimento | "Serviços hidráulicos", "Instalação de banheira de hidromassagem", "Instalação de boiler de aquecimento" |
| Pintura e reformas | "Pintura", "Gesso e drywall" |
| Segurança e automação | "Instalação de câmeras CFTV", "Automação residencial com Alexa", "Fechadura eletrônica" |
| Instalações domésticas | "Instalação de TVs", "Instalação de máquina de lavar roupa", "Instalação de lava-louças" |
| Construção e reforma | "Construção e reforma em São Paulo" |

---

## 9. O que ainda precisa de confirmação

| Item | Ação |
|---|---|
| Domínio | Atualizar `robots.txt` e `sitemap.xml` com o domínio real |
| Canonical | Inserir `<link rel="canonical">` no `<head>` |
| Logotipo completo | Substituir o logotipo tipográfico por um arquivo real, se disponível |
| Imagens de serviços | Substituir placeholder por fotos confirmadas |
| Título do head | Confirmar |
| Página de política de privacidade | Criar e links se houver coleta de dados |
| Análitica | Decidir sobre rastreadores |
| Informações de horário/área de atendimento | Consultar cliente |

---

## 10. Notas de segurança e privacidade

- Não colete dados pessoais desnecessários
- Não envie e-mail/senha para o servidor
- Use `mailto:` e `https://wa.me/` para contato
- Pense antes de colocar dados sensíveis no Google (endereço, telefone)
- Se houver formulário, envie os dados via WhatsApp
- Não houver interceptação de dados
