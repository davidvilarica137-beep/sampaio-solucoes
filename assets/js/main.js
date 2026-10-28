/* ============================================================
   Sampaio Soluções — JavaScript principal
   Versão estática para GitHub Pages
   ============================================================ */

// Dados de configuração centralizados (ponto único de verdade)
const CONFIG = {
  telefone: "419992704394",
  email: "sampaiosolucoes2904@gmail.com",
  endereço: "Rua Fortunato, 75, sala 4 – Santa Cecília, São Paulo – SP, 01224-030",
  whatsappLink: "https://wa.me/5541992794394",
  mensagemPadrao: "Olá! Gostaria de solicitar um orçamento para um serviço.",
};

// Formatar telefone brasileiro (xx) xxxx-xxxx a partir do número
function formatarTelefone(numero) {
  const digits = numero.replace(/\D/g, "");
  if (digits.length === 11) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  if (digits.length === 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 5)}-${digits.slice(5)}`;
  }
  return numero;
}

// Atribuir link do WhatsApp (formatação correta para o Brasil)
function obterLinkWhatsapp(mensagem) {
  const destino = "55" + CONFIG.telefone;
  return `https://wa.me/${destino}${mensagem ? "%20" + mensagem.replace(/\s+/g, "%20") : ""}`;
}

// Eventos do menu móvel
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuMobile = document.getElementById("menu-mobile");
  const headerMenuLinks = document.querySelectorAll(".header__menu__link");

  if (menuToggle && menuMobile) {
    menuToggle.addEventListener("click", () => {
      const aberto = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !aberto);
      menuMobile.classList.toggle("header__menu--mobile", !aberto);
    });

    // Fechar menu ao clicar em um link
    headerMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (menuToggle.getAttribute("aria-expanded") === "true") {
          menuToggle.setAttribute("aria-expanded", "false");
          menuMobile.classList.remove("header__menu--mobile");
        }
      });
    });
  }

  // Smooth scroll para âncoras internas
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (href === "#" || href.length <= 1) return;
      const alvo = document.querySelector(href);
      if (!alvo) return;
      e.preventDefault();
      alvo.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Botão flutuante do WhatsApp
  const whatsappFloat = document.getElementById("whatsapp-float");
  if (whatsappFloat) {
    whatsappFloat.addEventListener("click", () => {
      window.open(CONFIG.whatsappLink, "_blank", "noopener");
    });
  }

  // Botões de "Solicitar orçamento" das categorias:
  // usam data-wa="#link whatshot" — abre o WhatsApp com a mensagem pronta.
  document.querySelectorAll("[data-wa]").forEach((botao) => {
    botao.addEventListener("click", () => {
      const url = botao.getAttribute("data-wa");
      window.open(url, "_blank", "noopener");
    });
  });

  // ABIERTO clássico de FAQ
  const faqItens = document.querySelectorAll(".faq__questao");
  faqItens.forEach((questao) => {
    questao.addEventListener("click", () => {
      const resposta = questao.nextElementSibling;
      if (!resposta || !resposta.classList.contains("faq__resposta")) return;
      const aberto = resposta.style.maxHeight && resposta.style.maxHeight !== "0px";
      fecharTodasFAQ(faqItens);
      if (!aberto) {
        resposta.style.maxHeight = resposta.scrollHeight + "px";
        const icone = questao.querySelector(".faq__resposta__icone");
        if (icone) icone.textContent = "—";
      }
    });
  });

  function fecharTodasFAQ(quems) {
    quems.forEach((q) => {
      const r = q.nextElementSibling;
      if (r && r.classList.contains("faq__resposta")) {
        r.style.maxHeight = "0";
        const icone = q.querySelector(".faq__resposta__icone");
        if (icone) icone.textContent = "+";
      }
    });
  }

  // Laboratório de formulário de orçamento
  const form = document.getElementById("form-orcamento");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const servico = form.querySelector('select[name="servico"]');
      const servicoValor = servico ? servico.value : "";
      const nome = form.querySelector('#campos-nome');
      const telefone = form.querySelector('#campos-telefone');
      const msg = form.querySelector('#campos-mensagem');
      const erro = form.querySelector('.contato__erro');

      let valido = true;
      erro.style.display = "none";

      if (!servicoValor) {
        valido = false;
        erro.textContent = "Selecione um serviço.";
        erro.style.display = "block";
        servico.focus();
      }
      if (!nome.value.trim()) {
        valido = false;
        erro.textContent = "Informe seu nome.";
        erro.style.display = "block";
        nome.focus();
      }
      const digits = telefone.value.replace(/\D/g, "");
      if (digits.length < 10) {
        valido = false;
        erro.textContent = "Informe um telefone de 10 dígitos.";
        erro.style.display = "block";
        telefone.focus();
      }

      if (!valido) return;

      const mensagem = `Olá, meu nome é ${nome.value.trim()}.\n` +
        `Serviço: ${servicoValor}\n` +
        `Telefone: ${formatarTelefone(telefone.value)}\n` +
        `Mensagem: ${msg.value.trim()}\n` +
        `Gostaria de agendar uma visita para solicitar um orçamento.`;

      const link = obterLinkWhatsapp(mensagem);
      window.open(link, "_blank", "noopener");
      form.reset();
      fecharTodasFAQ(faqItens);
      alert("Sua mensagem foi preparada no WhatsApp. Em breve entraremos em contato.");
    });
  }

  // Disclaimer do rodapé (removido se o cliente confirmar)
  const disclaimer = document.querySelector(".footer__destinatario");
  if (disclaimer) {
    disclaimer.remove();
  }
});
