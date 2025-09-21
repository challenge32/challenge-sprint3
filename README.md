HC Saúde Digital — Sprint 03

SPA em React + Vite + TypeScript + TailwindCSS
Reestruturação das páginas da Sprint 02 com componentização, modularidade, responsividade (XS→XL), validação com React Hook Form, rotas estáticas e dinâmicas, e versionamento Git/GitHub.

Conformidade: estilização 100% TailwindCSS; não utilizamos bibliotecas proibidas (Axios/Bootstrap/Carrossel/Accordion).
Integrações: sem consumo de API nesta sprint, conforme orientações.

🔗 Links

Repositório GitHub (organização): adicionar link

Vídeo no YouTube (≤ 3 min): adicionar link

📦 Execução local
npm install
npm run dev


Local: http://localhost:5173
 (ou próxima porta disponível)

🧭 Rotas da SPA
Caminho	Página	Observações
/	Home	
/ajuda	Ajuda	Atalhos para páginas de suporte
/como-acessar	Como Acessar	Passo a passo
/checklist	Checklist	Estado com useState / useMemo
/faq	FAQ	Cards com perguntas/respostas
/contato	Contato	React Hook Form + validações
/integrantes	Integrantes	Lista de membros
/integrantes/:rm	Member Detail	Rota dinâmica com useParams
/galeria	Galeria	Mídias (imagens/vídeos)
/preciso-ajuda	Ajuda Direta	Tabs (headless)
*	404	Página não encontrada

Observação: não há página “Sobre”, conforme solicitado.

🧩 Componentização e Reuso

components/ui/Button — variações "solid"/"ghost"

components/ui/Card, components/ui/Grid

components/ui/Tabs (abas sem libs externas)

components/ui/ChecklistItem, components/ui/FormField

components/ui/MemberCard

components/Navbar, components/Footer, components/Layout, components/PageTitle, components/ErrorBoundary

Benefícios: responsabilidades isoladas, reuso amplo e tipagem forte (TypeScript), facilitando manutenção e evolução.

⚙️ Tecnologias

React 18, React Router 6, React Hook Form

Vite 5, TypeScript 5

TailwindCSS 3 (apenas Tailwind; sem Bootstrap/Axios/carrossel/accordion)

🧪 Hooks, Props e Rotas (rubrica)

useState: estados locais (p.ex. Checklist, feedback do Contato)

useEffect: persistência/localStorage e preferências de acessibilidade

useNavigate: navegação programática (Home → Galeria; Checklist → Como Acessar)

useParams: rotas dinâmicas (/integrantes/:rm)

Props tipadas: interfaces/props em todos os componentes de components/ui

Rotas estáticas e dinâmicas: conforme tabela de rotas

🎨 Estilização e Responsividade (TailwindCSS)

100% Tailwind (@layer components + utilitários nos JSX)

Breakpoints: sm, md, lg, xl — grids responsivos (Home, Galeria, Integrantes, FAQ)

Acessibilidade (A11y): foco visível, atributos aria-*, contraste adequado e semântica

👥 Integrantes (exemplo — atualizar)

Pedro Henrique Costa — RM: 559932 — Turma: 1TDSPV

Júlia Kauane Menezes — RM: 565568 — Turma: 1TDSPV

Outros integrantes…

🗂️ Estrutura de Pastas
.
├── public/
│   ├── logo-hc.png
│   ├── hero-hc.png
│   └── videos/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Grid.tsx
│   │   │   ├── Tabs.tsx
│   │   │   ├── ChecklistItem.tsx
│   │   │   ├── FormField.tsx
│   │   │   └── MemberCard.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── PageTitle.tsx
│   │   └── ErrorBoundary.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Ajuda.tsx
│   │   ├── ComoAcessar.tsx
│   │   ├── Checklist.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contato.tsx
│   │   ├── Integrantes.tsx
│   │   ├── MemberDetail.tsx
│   │   ├── Galeria.tsx
│   │   ├── AjudaDireta.tsx
│   │   └── NotFound.tsx
│   ├── routes/
│   │   └── AppRoutes.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── README.md

🌿 Fluxo de Versionamento (Git Flow)

Branches: main (produção), develop (integração), feature/*, release/*

Commits por integrante: mínimo 5; projeto com ≥ 15 commits no total

Pull Requests: base = develop utilizando Create a merge commit (sem squash/rebase), para preservar a contagem individual

✅ Conformidade com as Regras

 SPA React + Vite + TypeScript

 TailwindCSS somente (sem Bootstrap/Axios/carrosséis/accordions)

 Sem integração com API nesta sprint

 React Hook Form para formulários (Contato)

 Rotas estáticas e dinâmicas

 Acessibilidade e Responsividade (XS→XL)

 Git/GitHub/Git Flow com commits por integrante

🛡️ Licença

Projeto acadêmico — uso educacional.