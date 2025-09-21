---

# HC Saúde Digital — Sprint 03

## 📌 Descrição do Projeto

Aplicação **SPA (Single Page Application)** desenvolvida em **React + Vite + TypeScript + TailwindCSS**, como parte da **Sprint 03**.
Nesta entrega, foi realizada a **reestruturação das páginas da Sprint 02** com foco em:

* **Componentização e modularidade**
* **Responsividade (XS → XL)**
* **Validação com React Hook Form**
* **Rotas estáticas e dinâmicas**
* **Versionamento Git/GitHub (Git Flow)**

⚠️ **Escopo da Sprint:** não há consumo de API nesta etapa, conforme orientações.

---

## ✅ Conformidade

* 100% estilização com **TailwindCSS**
* Sem bibliotecas proibidas (**Axios, Bootstrap, Carrossel, Accordion**)
* SPA em **React + Vite + TypeScript**
* **React Hook Form** para formulários
* Rotas estáticas e dinâmicas com React Router 6
* **Acessibilidade (A11y)** e **responsividade** garantidas

---

## 🔗 Links

* **Repositório GitHub (Organização):** \[Adicionar link]
* **Vídeo de Apresentação (≤ 3 min):** \[Adicionar link]

---

## 📦 Execução Local

```bash
npm install
npm run dev
```

Acesse em: [http://localhost:5173](http://localhost:5173) (ou próxima porta disponível).

---

## 🧭 Rotas da SPA

| Caminho            | Página        | Observações                                 |
| ------------------ | ------------- | ------------------------------------------- |
| `/`                | Home          |                                             |
| `/ajuda`           | Ajuda         | Atalhos para páginas de suporte             |
| `/como-acessar`    | Como Acessar  | Passo a passo                               |
| `/checklist`       | Checklist     | Estado com useState / useMemo               |
| `/faq`             | FAQ           | Cards de perguntas e respostas              |
| `/contato`         | Contato       | Formulário com validações (React Hook Form) |
| `/integrantes`     | Integrantes   | Lista de membros                            |
| `/integrantes/:rm` | Member Detail | Rota dinâmica com `useParams`               |
| `/galeria`         | Galeria       | Exibição de mídias (imagens/vídeos)         |
| `/preciso-ajuda`   | Ajuda Direta  | Tabs (headless, sem libs externas)          |
| `*`                | 404           | Página não encontrada                       |

> **Observação:** não há página “Sobre”, conforme solicitado.

---

## 🧩 Componentização e Reuso

* **UI Components**

  * `Button` (variações *solid* / *ghost*)
  * `Card`, `Grid`, `Tabs`
  * `ChecklistItem`, `FAQItem`, `FormField`, `MemberCard`

* **Layout Components**

  * `Navbar`, `Footer`, `Layout`, `PageTitle`, `ErrorBoundary`

👉 Benefícios: **responsabilidades isoladas**, **tipagem forte com TypeScript**, **reuso amplo** e **facilidade de manutenção/evolução**.

---

## ⚙️ Tecnologias Utilizadas

* **Frontend:** React 18, Vite 5, TypeScript 5
* **Estilização:** TailwindCSS 3
* **Roteamento:** React Router 6
* **Formulários:** React Hook Form
* **Controle de versão:** Git/GitHub (Git Flow)

---

## 🧪 Hooks, Props e Rotas (Rubrica)

* **useState:** estados locais (ex.: checklist, feedback de contato)
* **useEffect:** persistência em `localStorage` + acessibilidade
* **useNavigate:** navegação programática (Home → Galeria; Checklist → Como Acessar)
* **useParams:** rotas dinâmicas (`/integrantes/:rm`)
* **Props Tipadas:** interfaces em todos os componentes UI
* **Rotas:** estáticas e dinâmicas, conforme tabela

---

## 🎨 Estilização e Responsividade

* **100% TailwindCSS** (`@layer components` + utilitários JSX)
* **Breakpoints:** `sm`, `md`, `lg`, `xl`
* **Acessibilidade (A11y):** foco visível, atributos `aria-*`, contraste adequado e semântica HTML

---

## 👥 Integrantes

* Pedro Henrique Costa — RM: 559932 — Turma: 1TDSPV
* Júlia Kauane Menezes — RM: 565568 — Turma: 1TDSPV

---

## 🗂️ Estrutura de Pastas

```bash
.
├── public/
│   ├── icons/
│   ├── imgs/
│   │   ├── hc-05.png
│   │   ├── hc.png
│   │   ├── julia.jiff
│   │   └── pedro.jpg
│   └── videos/
│       ├── Cópia de Acesso ao Portal.mp4
│       └── Cópia de PRIMEIRO ACESSO.mp4
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── ChecklistItem.tsx
│   │   │   ├── FAQItem.tsx
│   │   │   ├── FormField.tsx
│   │   │   ├── Grid.tsx
│   │   │   ├── MemberCard.tsx
│   │   │   └── Tabs.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   └── PageTitle.tsx
│   ├── pages/
│   │   ├── Ajuda.tsx
│   │   ├── AjudaDireta.tsx
│   │   ├── Checklist.tsx
│   │   ├── ComoAcessar.tsx
│   │   ├── Contato.tsx
│   │   ├── FAQ.tsx
│   │   ├── Galeria.tsx
│   │   ├── Home.tsx
│   │   ├── Integrantes.tsx
│   │   ├── MemberDetail.tsx
│   │   └── NotFound.tsx
│   ├── routes/
│   │   └── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── App.tsx
├── CHANGELOG.md
├── CONTRIBUTING.md
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🌿 Fluxo de Versionamento (Git Flow)

* **Branches:**

  * `main` → produção
  * `develop` → integração
  * `feature/*` → novas features

* **Commits:**

  * Mínimo 5 por integrante
  * Projeto ≥ 15 commits totais

---

## 🛡️ Licença

Projeto acadêmico — uso exclusivamente **educacional**.

---
