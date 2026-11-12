# fullstack-bootcamp

My coding challenges and projects from the neuefische bootcamps — from the first HTML page to NestJS backends, Next.js apps and a React Native app.

| Folder | Course | Content |
| --- | --- | --- |
| [`web-dev/`](web-dev) | Web Development | HTML, CSS, JavaScript, React, first backends with Next.js |
| [`web-dev-advanced/`](web-dev-advanced) | Advanced Software Development | TypeScript, Express, SQL, NestJS, Next.js App Router, DevOps, real-time, AI |
| [`projects/`](projects) | Projects | Larger apps built outside the daily challenges |

## Getting started

Every lesson folder contains one or more **independent projects** with their own `package.json` — there is no install step for the whole repository.

```bash
nvm use                 # or: fnm use — Node 24, pinned in .nvmrc
cd web-dev-advanced/nestjs_auth/cyber-chat_auth
pnpm install
pnpm start:dev          # check the project's package.json for its scripts
```

- **Package manager:** [pnpm](https://pnpm.io) (`packageManager` is pinned per project). Projects that need native modules (e.g. SQLite, bcrypt) allow their build scripts in a local `pnpm-workspace.yaml`.
- **Environment variables:** projects with a database or API key ship a `.env.example`. Copy it to `.env` and fill in your own values — `.env` files are never committed.
- **Databases:** some projects include a `docker-compose.yml` for Postgres (`docker compose up -d`).

---

## Web Development — `web-dev/`

### HTML & CSS

| Lesson | What's inside |
| --- | --- |
| [`html`](web-dev/html) | First pages: div salad, find the errors, format salad |
| [`html-forms`](web-dev/html-forms) | Forms, validation and finding accessibility errors |
| [`css-basics`](web-dev/css-basics) | Selectors and pseudo-classes (button styles, Pokémon page, pseudo park) |
| [`css-structure`](web-dev/css-structure) | BEM, custom properties and a taco truck page |
| [`css-positioning`](web-dev/css-positioning) | Absolute positioning and decorations |
| [`css-flexbox`](web-dev/css-flexbox) | Navigation bar and profile card with flexbox |
| [`css-grid`](web-dev/css-grid) | Galleries, fish cards, payment cards and placing elements on a grid |
| [`css-responsive`](web-dev/css-responsive) | Media queries and a responsive website |
| [`css-animations`](web-dev/css-animations) | Movements with transitions and keyframes |

### JavaScript

| Lesson | What's inside |
| --- | --- |
| [`shell-basics_treasure-hunt`](web-dev/shell-basics_treasure-hunt) | Navigating the terminal on a treasure hunt |
| [`js-functions`](web-dev/js-functions) | Parameters, arrow functions, DOM manipulation, pizza analyzer, progress bar |
| [`js-conditions-and-booleans`](web-dev/js-conditions-and-booleans) | `if`/`else`, truthy and falsy, type checks |
| [`js-inputs-and-strings`](web-dev/js-inputs-and-strings) | Reading inputs and transforming strings |
| [`js-dom-and-events`](web-dev/js-dom-and-events) | Dark mode, a calculator and fixing a survey |
| [`js-forms_*`](web-dev) | Handling form submits, checkboxes and a form calculator |
| [`js-objects-and-arrays`](web-dev/js-objects-and-arrays) | Working with objects and arrays |
| [`js-create-element`](web-dev/js-create-element) | Building DOM elements: product teaser, toasts, social media post |
| [`js-loops`](web-dev/js-loops) | `for`, `for…of`, `for…in` and `while` (stars, pixels, select nav) |
| [`js-array-methods`](web-dev/js-array-methods) | `map`, `filter`, `forEach` & co., data puzzles and small single-page apps |
| [`js-modern-syntax`](web-dev/js-modern-syntax) | Destructuring, rest and spread |
| [`js-structure`](web-dev/js-structure) | ES modules with `import`/`export` (quiz app, shapes, space rocket) |
| [`js-fetch`](web-dev/js-fetch) | Fetching APIs: Star Wars, color clue |
| [`js-error-handling`](web-dev/js-error-handling) | `try`/`catch` in a calculator and around `fetch` |
| [`js-unit-testing`](web-dev/js-unit-testing) | First tests with Jest |
| [`mock`](web-dev/mock) | Simple algorithms for the mock assessment |

### React

| Lesson | What's inside |
| --- | --- |
| [`react-basics`](web-dev/react-basics) | JSX, attributes and the first components |
| [`react-props`](web-dev/react-props) | Passing props: buttons, greeting, smiley, sum |
| [`react-nesting`](web-dev/react-nesting) | `children`, fragments and nested navigation |
| [`react-state-1`](web-dev/react-state-1) – [`react-state-3`](web-dev/react-state-3) | `useState` step by step, up to shared state and the **journal app** |
| [`react-with-arrays`](web-dev/react-with-arrays) | Rendering and filtering lists |
| [`react-immutable-state`](web-dev/react-immutable-state) | Updating objects and arrays immutably (car race, form) |
| [`react-effects-and-fetch`](web-dev/react-effects-and-fetch) | `useEffect` with APIs: ISS tracker, Pokémon with paging |
| [`react-with-local-storage`](web-dev/react-with-local-storage) | Persisting state: dice, notes, journal app |
| [`react-custom-hooks`](web-dev/react-custom-hooks) | Own hooks: `useMouse`, `useName`, `useChronicle`, advanced fetch |
| [`react-styled-components`](web-dev/react-styled-components) | Styling with styled-components, including the LOTR app |
| [`react-global-state`](web-dev/react-global-state) | Lifting state up for a smart home light switch |
| [`react-component-testing`](web-dev/react-component-testing) | Testing a scorekeeper with React Testing Library |

### Next.js & backend basics

| Lesson | What's inside |
| --- | --- |
| [`nextjs-basics-and-routing_lotr-app`](web-dev/nextjs-basics-and-routing_lotr-app) | A Lord of the Rings app with the Pages Router |
| [`nextjs-dynamic-routes_lotr-app-dynamic-routes`](web-dev/nextjs-dynamic-routes_lotr-app-dynamic-routes) | The LOTR app with dynamic routes |
| [`react-data-fetching`](web-dev/react-data-fetching) | Data fetching with SWR: ISS tracker, Star Wars characters |
| [`backend-basics`](web-dev/backend-basics) | First Node.js servers and routes |
| [`backend-api-routes`](web-dev/backend-api-routes) | Next.js API routes (products, random character) |
| [`backend-read`](web-dev/backend-read) · [`backend-create`](web-dev/backend-create) · [`backend-update-and-delete`](web-dev/backend-update-and-delete) | CRUD for a product shop with MongoDB |
| [`agile-workflow-and-user-stories`](web-dev/agile-workflow-and-user-stories) | User stories for a movie app |

---

## Advanced Software Development — `web-dev-advanced/`

### TypeScript

| Lesson | What's inside |
| --- | --- |
| [`typescript-introduction`](web-dev-advanced/typescript-introduction) | The start of the course: turning JavaScript snippets into strictly typed TypeScript |
| [`coding-assessments`](web-dev-advanced/coding-assessments) | Six algorithm challenges, solved without AI help |
| [`typescript-basics`](web-dev-advanced/typescript-basics) | Types and interfaces: film watchlist, music library, online shop, recipe book |
| [`typescript-client-side`](web-dev-advanced/typescript-client-side) | DOM exercises in TypeScript, up to a to-do app and a book search |
| [`typescript-advanced`](web-dev-advanced/typescript-advanced) | Generics and utility types for a bookshelf type layer |
| [`typescript-advanced-setup`](web-dev-advanced/typescript-advanced-setup) | Running TypeScript with Bun, nodemon and tsx |

### Backend with Express & SQL

| Lesson | What's inside |
| --- | --- |
| [`backend-basics-and-express`](web-dev-advanced/backend-basics-and-express) | A first Express API: bookmark manager |
| [`backend-express-advanced`](web-dev-advanced/backend-express-advanced) | Middleware and a burn-on-read message service |
| [`backend-template-engines`](web-dev-advanced/backend-template-engines) | Server-rendered pages with Nunjucks: blog, event hub |
| [`backend-mvc-pattern`](web-dev-advanced/backend-mvc-pattern) | The blog restructured as Model–View–Controller |
| [`backend_sql-basics`](web-dev-advanced/backend_sql-basics) · [`backend-sql-advanced`](web-dev-advanced/backend-sql-advanced) | The blog on SQLite, then with authors and full CRUD |
| [`software-design`](web-dev-advanced/software-design) | Programming paradigms, design patterns, undo/redo |

### NestJS — the Cyber Chat series

One chat backend, extended lesson by lesson:

| Lesson | What's new |
| --- | --- |
| [`nestjs_basics-1`](web-dev-advanced/nestjs_basics-1) | First NestJS project: a quote API |
| [`nestjs_basics-2`](web-dev-advanced/nestjs_basics-2) | **Cyber Chat** starts: threads and comments |
| [`nestjs_typeORM`](web-dev-advanced/nestjs_typeORM) | Persisting with TypeORM, SQLite and migrations |
| [`nestjs_RESTful-design`](web-dev-advanced/nestjs_RESTful-design) | DTOs, validation, pagination and proper status codes |
| [`nestjs_auth`](web-dev-advanced/nestjs_auth) | Registration and login with JWT |
| [`nestjs_swagger`](web-dev-advanced/nestjs_swagger) | API documentation with Swagger |
| [`devops_testing`](web-dev-advanced/devops_testing) | Unit and e2e tests with Vitest |
| [`devops_docker-basics`](web-dev-advanced/devops_docker-basics) · [`devops_docker-advanced`](web-dev-advanced/devops_docker-advanced) | Containerizing Cyber Chat, Compose with Postgres and a scoreboard service |

### Next.js App Router

| Lesson | What's inside |
| --- | --- |
| [`nextjs_app-router`](web-dev-advanced/nextjs_app-router) | App Router basics: **Kiki's Delivery Service** and a **code snippet library** |
| [`nextjs_server-vs-client`](web-dev-advanced/nextjs_server-vs-client) | Server vs. client components with Postgres |
| [`nextjs_tailwind-and-shadcn`](web-dev-advanced/nextjs_tailwind-and-shadcn) | Styling with Tailwind CSS and shadcn/ui |
| [`nextjs_ecosystem`](web-dev-advanced/nextjs_ecosystem) | Forms, state and libraries around Next.js |

### Real-time & AI

| Lesson | What's inside |
| --- | --- |
| [`real-time-communication`](web-dev-advanced/real-time-communication) | Polling, server-sent events and a WebSocket chat (React + NestJS) |
| [`ai_openai-api`](web-dev-advanced/ai_openai-api) | A chat app on the OpenAI REST API |
| [`ai_openai-sdk`](web-dev-advanced/ai_openai-sdk) | A chat app on the OpenAI SDK, with tests |

---

## Projects — `projects/`

| Project | Stack | Description |
| --- | --- | --- |
| [`rick-and-morty_mobile-app`](projects/rick-and-morty_mobile-app) | Expo · React Native · NestJS | Character gallery with details pages, dark mode and a camera to set your own character images, backed by a small NestJS API. Start both parts with `pnpm dev`. |
