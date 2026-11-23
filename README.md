# MUSA — Um Olhar para a Saúde Mental Feminina a partir da Literatura Comparada

Site institucional do projeto de pesquisa **MUSA**, desenvolvido na **ArteCeb**. O site reúne a produção científica do grupo ao longo de três anos — resenhas e análises literárias, entrevistas, análises de questionários e a trajetória do projeto.

🔗 **Site no ar:** [musazip-ten.vercel.app](https://musazip-ten.vercel.app)

[![Licença: CC BY 4.0](https://img.shields.io/badge/licen%C3%A7a-CC%20BY%204.0-lightgrey.svg)](./LICENSE)
[![Deploy](https://img.shields.io/badge/deploy-Vercel-black?logo=vercel)](https://musazip-ten.vercel.app)

---

## 🔬 Sobre a pesquisa

**MUSA** aproxima a **literatura comparada** do debate sobre **saúde mental feminina**. A partir da leitura e da análise de obras literárias escritas por mulheres — e de obras que tematizam a experiência feminina — o projeto investiga como a literatura nomeia aquilo que muitas vezes a linguagem clínica não alcança.

O trabalho combina:

- **Análise literária** (resenhas e artigos de opinião publicados por ano);
- **Pesquisa de campo** com estudantes (questionários quantitativos e qualitativos);
- **Entrevistas** com profissionais, pesquisadores e participantes.

A pesquisa também originou um **diário digital de cuidado** — um PWA offline-first, disponível no repositório [musa-app](https://github.com/Wlissesdev/musa-app).

---

## 🗂️ Seções do site

| Seção | Conteúdo |
|---|---|
| **Início** | Apresentação do projeto |
| **Sobre** | Contexto, objetivos e justificativa |
| **Pesquisa** | Metodologia e recorte teórico |
| **Leituras** | Resenhas e análises organizadas por ano (2023 · 2024 · 2025) |
| **Entrevistas** | Entrevistas com participantes e convidados |
| **Trajetória** | Linha do tempo e conquistas do projeto |
| **Trabalho de campo** | Resultados dos questionários aplicados |
| **Equipe** | Integrantes da pesquisa |
| **Apoie** | Como apoiar o projeto |

### 📚 Obras analisadas

**2023 — Artigos de opinião**

- *Violet bent backwards over the grass* — Lana Del Rey
- *A redoma de vidro* — Sylvia Plath
- *Garota, interrompida* — Susanna Kaysen

**2024 — Análises de obra**

- *As Meninas* — Lygia Fagundes Telles
- *As Virgens Suicidas* — Jeffrey Eugenides
- *Veronika Decide Morrer* — Paulo Coelho

**2025 — Análises de obra**

- *A Amiga Genial* — Elena Ferrante
- *Lucíola* — José de Alencar
- *Torto Arado* — Itamar Vieira Junior

Cada leitura abre um artigo completo em modal, com autoria e tempo de leitura.

---

## 👥 Equipe

- Kayron Kaic da Silva Sousa
- Carla Guedes Sarmento Costa
- Letícia Castro Barbosa Cruz
- Giovanna de Oliveira dos Reis

---

## 🛠️ Stack

Site **estático**, sem build e sem frameworks:

- **HTML5** semântico
- **CSS3** (identidade visual própria, responsiva)
- **JavaScript** vanilla (renderização de conteúdo, modais e navegação)
- **Vercel** para deploy contínuo

> O projeto segue uma política de segurança de conteúdo restritiva (`script-src 'self'; style-src 'self'`) — não há scripts ou estilos inline.

---

## 📁 Estrutura

```
.
├── index.html            # Estrutura da página
├── script.js             # Conteúdo (artigos, leituras, entrevistas) e renderização
├── styles.css            # Identidade visual e responsividade
├── config.js             # Configuração (ex.: número do WhatsApp)
├── favicon.svg
├── vercel.json           # Headers, CSP e regras de deploy
└── assets/
    └── images/           # Fotografias e imagens do projeto
```

---

## 🚀 Rodar localmente

Não há dependências. Basta servir a pasta com qualquer servidor estático:

```bash
# Opção 1 — Python
python -m http.server 8080

# Opção 2 — Node
npx serve .
```

Depois abra `http://localhost:8080`.

> Também é possível abrir `index.html` diretamente no navegador, mas um servidor local é recomendado para o correto funcionamento de modais e paths.

---

## ⚙️ Configuração do WhatsApp

Em `config.js`, informe o número apenas com dígitos (DDI + DDD):

```js
window.ARTCEB_CONFIG = {
  whatsappNumber: "559991628089"
};
```

---

## 🌐 Deploy

O deploy é feito na [Vercel](https://vercel.com). O `vercel.json` já define os headers de segurança e a política de conteúdo.

```bash
vercel --prod
```

---

## 📄 Licença

O conteúdo textual, as análises e os materiais deste repositório estão licenciados sob a **Creative Commons Attribution 4.0 International (CC BY 4.0)** — você pode compartilhar e adaptar, desde que atribua o crédito ao projeto MUSA / ArteCeb. Veja [`LICENSE`](./LICENSE).

---

<p align="center"><sub>Projeto de pesquisa <strong>MUSA</strong> · ArteCeb · Brasil</sub></p>
