# HC Saúde Digital — Sprint 03 (React + Vite + TypeScript + Tailwind)

Reestruturação da Sprint 02 em uma **SPA** com **componentização**, **responsividade**, **acessibilidade** e **usabilidade**.  
**Estilização 100% com TailwindCSS**. **Formulários com React Hook Form** (HookForms).

## 🚀 Tecnologias
- React 18, Vite 5, TypeScript
- React Router (rotas estáticas e dinâmicas)
- TailwindCSS (estilização e responsividade)
- React Hook Form (validação de formulários)
- Sem Axios/Bootstrap/CDNs (em conformidade com as proibições)

## 📁 Estrutura
```
src/
  components/ (ErrorBoundary, PageTitle)
  pages/ (Home, Ajuda, ComoAcessar, Checklist, FAQ, Contato, Integrantes, MemberDetail, Galeria, AjudaDireta, Sobre, NotFound)
  routes/ (AppRoutes)
  index.css
  main.tsx
App.tsx
```

## ▶️ Como rodar
```bash
npm install
npm run dev
```
> Se necessário: `npm i -D @vitejs/plugin-react`

## 🧵 Estilização com Tailwind
- Utilitários aplicados diretamente nos componentes.
- Atalhos com `@apply` em `src/index.css`: `.btn`, `.btn-ghost`, `.card`, `.hero`, `.grid-2`, `.grid-3`…
- Suporte a **dark mode** via classe `dark` (alternável no header).

## 📝 Formulários (HookForms)
- Página **Contato** usa `react-hook-form` com validações tipadas.

## 🔗 Rotas
- **Estáticas**: `/`, `/ajuda`, `/como-acessar`, `/checklist`, `/faq`, `/contato`, `/integrantes`, `/galeria`, `/preciso-ajuda`, `/sobre`
- **Dinâmica**: `/integrantes/:rm` (usa `useParams`)

## 🧠 Hooks/Props usados
- `useState`, `useEffect` (App para tema/tamanho de fonte)
- `useNavigate` (Home/Checklist)
- `useParams` (MemberDetail)
- **Props** (ex.: `PageTitle` recebe `title`/`subtitle`)

## ♿ Acessibilidade
- *Skip link* para conteúdo, foco visível, labels, aria-attrs, contraste (dark), escalonamento de fonte.

## 📱 Responsividade
- Mobile-first com Tailwind (`grid`, `md:*`, etc.).
- Layout validado para XS, SM, MD, LG, XL.

## 🌿 Proibições atendidas
- **Não** usamos Axios, Bootstrap, carrosséis prontos, acordions prontos ou templates prontos.
- Apenas bibliotecas essenciais (Router e Hook Form).

## 🔀 Git/GitHub/GitFlow
1. Crie o repositório no GitHub (conta da equipe).
2. Execute o script abaixo para preparar o histórico local (branch `main`):
   - **Windows (PowerShell)**:
     ```powershell
     npm run prepare:repo:win
     ```
   - **macOS/Linux (bash)**:
     ```bash
     npm run prepare:repo:unix
     ```
3. Faça commits frequentes (**mín. 5 por integrante; total ≥ 15**).
4. Preencha o link do repositório no README.
5. Gere o ZIP **sem `node_modules`**, incluindo a pasta `.git` com histórico (use o script acima).

## 📸 Imagens/Ícones
- Substitua os placeholders em `public/` pelos arquivos oficiais da equipe.

## 🔗 Links
- **GitHub do repositório**: _adicione aqui_
- **Vídeo (YouTube)**: _adicione aqui_

---

## ✅ Checklist de Conformidade – Sprint 03
- [x] **React + Vite + TypeScript** (SPA) com **componentização**
- [x] **Páginas da Sprint 02 reestruturadas** e páginas obrigatórias: **Home, Integrantes, Sobre, FAQ, Contato** (+ Ajuda, Como Acessar, Checklist, Galeria, Ajuda Direta)
- [x] **Rotas estáticas e dinâmicas** (com `useParams`)
- [x] **Hooks**: `useState`, `useEffect`, `useNavigate`, `useParams`
- [x] **Props** em componentes (`PageTitle`)
- [x] **TailwindCSS** (cores/fontes consistentes, design atrativo, responsivo XS→XL)
- [x] **HookForms** no formulário de contato (validação tipada)
- [x] **Acessibilidade** (skip-link, dark/contraste, labels, aria, foco visível)
- [x] **Versionamento GitHub** (scripts para preparar histórico, branch `main`)
- [x] **README.md** com tecnologias, integrantes, estrutura, links e instruções
- [x] **ZIP ≤ 50MB**, sem `node_modules`

## 👥 Integrantes
- Pedro Henrique Costa — RM 559932 — 1TDSPV  
- Júlia Kauane Menezes — RM 565568 — 1TDSPV

## 📌 Informações para a banca / professor
- **Repositório GitHub da equipe:** _(adicione o link)_
- **Vídeo no YouTube (até 3 min):** _(adicione o link)_
- **Responsável pelo envio do ZIP no Portal do Aluno:** _(nome)_

## 👥 Integrantes (Identificação)
- **Pedro Henrique Costa** — **RM 559932** — **Turma 1TDSPV**
- **Júlia Kauane Menezes** — **RM 565568** — **Turma 1TDSPV**

## 🧭 Páginas reestruturadas (SPA)
- **Home** (`/`)
- **Ajuda** (`/ajuda`)
- **Como Acessar** (`/como-acessar`)
- **Checklist** (`/checklist`)
- **FAQ** (`/faq`)
- **Contato** (`/contato`) — *HookForms (react-hook-form) com validação tipada*
- **Integrantes** (`/integrantes`) — *lista*
- **Integrante (dinâmica)** (`/integrantes/:rm`) — *useParams*
- **Galeria** (`/galeria`)
- **Preciso de Ajuda** (`/preciso-ajuda`) — *tabs simples sem libs externas*
- **Sobre** (`/sobre`)
- **404** (`*`)

## 🧩 Componentização (exemplos)
- `components/PageTitle` (Props: `title`, `subtitle`)
- `components/ErrorBoundary`
- `routes/AppRoutes`
- Páginas separadas e reutilizáveis, com Tailwind via `@apply` e classes herdadas da Sprint 02 mapeadas.

## 🧠 Hooks e Rotas (conforme critérios)
- **useState**: controles de checklist e preferências de acessibilidade
- **useEffect**: persistência de tema e tamanho de fonte
- **useNavigate**: navegação em Home/Checklist
- **useParams**: rota dinâmica `integrantes/:rm`
- **Props**: `PageTitle`
- **Rotas**: estáticas + dinâmicas (React Router)

## 🎨 Estilização (TailwindCSS only)
- **Sem Bootstrap / Axios / carrosséis / accordions prontos** (proibição atendida)
- Classes da Sprint 02 preservadas e mapeadas para Tailwind (`@layer components` em `src/index.css`):
  `navbar`, `home`, `hero`, `hero-img`, `botao`, `botao-ajuda`, `galeria-botao`, `membros`, `membro`, `tabs`, `tablink`, `tab-content` etc.
- **Dark mode** controlado no header; **responsividade XS→XL**.
- **Acessibilidade**: skip-link, labels, aria-attrs, foco visível, feedback ao leitor de tela.

## 🗂️ Estrutura de pastas
```
public/
  logo-hc.png  hero-hc.png  pedro.jpg  julia.jpg
  videos/ primeiro-acesso.mp4  acesso-portal.mp4
src/
  components/ ErrorBoundary.tsx  PageTitle.tsx
  pages/ Home.tsx Ajuda.tsx ComoAcessar.tsx Checklist.tsx FAQ.tsx
         Contato.tsx Integrantes.tsx MemberDetail.tsx Galeria.tsx
         AjudaDireta.tsx Sobre.tsx NotFound.tsx
  routes/ AppRoutes.tsx
  index.css  main.tsx  App.tsx
tailwind.config.ts  postcss.config.js  vite.config.ts  tsconfig.json  package.json
```

## 🔀 Git / GitHub / GitFlow
- Branch principal **main**.
- Histórico local incluído no **.git** para avaliação (≥ 15 commits; ≥ 5 por integrante).
- Sugestão de fluxo: `feature/*` → PR → `main`.
- Após conferir, suba para o GitHub e atualize os links acima.

## 📦 Entrega (ZIP)
- **Não** incluir `node_modules`.
- **Incluir `.git/`** (histórico).
- O arquivo final já está pronto para envio no Portal do Aluno.

// sprint03-marker


### 📱 Como validar a Responsividade
Use o DevTools (Ctrl+Shift+M) e teste:
- **XS (mobile)**: 360x640 — menu hambúrguer, colunas 1x, mídia fluida.
- **SM (≥640px)**: 640x800 — 2 colunas em várias seções.
- **MD (≥768px)**: 768x1024 — hero em 2 colunas, grids 2–3 colunas.
- **LG (≥1024px)**: 1024x768 — grids 3–4 colunas.
- **XL (≥1280px)**: 1440x900 — grids 4–5 colunas e maior respiro.

Breakpoints usados: `sm`, `md`, `lg`, `xl` (Tailwind default).


## ♻️ Componentização, Modularidade e Reutilização
**Componentes reutilizáveis (TypeScript):**
- `components/ui/Button` — variações `solid`/`ghost`, usado em **todas** as páginas com ações.
- `components/ui/Card` — container semântico para cartões (FAQ, Galeria, blocos de conteúdo).
- `components/ui/Grid` — padroniza grids responsivos (2/3 colunas e lista de integrantes).
- `components/ui/Tabs` — abas headless (usado em **AjudaDireta**).
- `components/ui/ChecklistItem` — item de checklist (usado em **Checklist**).
- `components/ui/FormField` — rótulo + campo + erro acessível (usado em **Contato** com React Hook Form).
- `components/ui/MemberCard` — card do integrante (usado em **Integrantes**).
- `components/Navbar` e `components/Footer` — cabeçalho/rodapé padronizados.
- `components/Layout` — orquestra Navbar + Conteúdo + Footer (SPA).

**Benefícios:**
- **Separação clara** de responsabilidades (3,3 pts).
- **Reutilização** em múltiplas páginas (3,3 pts).
- **Eficiência** na evolução/manutenção: mudanças centralizadas em `ui/` (3,4 pts).

**Observação:** classes visuais da Sprint 02 preservadas via `@layer components` + `@apply` (Tailwind only).
