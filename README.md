# Superlight React Boilerplate = TypeScript + Vite + Zendeskgarden

This template provides a minimal setup to get React working in Typescript, Vite with HMR, Zendeskgarden and some ESLint rules.

## Scaffolding
- Typescript
- Zendeskgarden [link](https://garden.zendesk.com/components)
- Vite
- React Router v6

## System requirements
- node 18.17.1 LTS required
- react 18.2.0

## Folder structure
<pre>
├── tsconfig.json
├── tsconfig.node.json
├── .eslintrc.cjs
├── index.html
├── vite.config.ts
├── package.json
├── package-lock.json
├── README.md
└── src
    ├── main.tsx (entry point)
    ├── components (basic and reusable atoms stored inside this folder)
        ├── buttons
            ├── __test__ () (test code here)
                  └── BaseButton.test.ts
            └── BaseButton.tsx
    ├── hooks (custom hooks)
    ├── modules (business logic such as payment and ...)
    ├── pages ()
        ├── pageFolder (page connection UI, store and business logic)
        ├── app.tsx
        └── RouteWrapper.tsx (routing pages)
    ├── services (APIs)
    ├── stores (Redux)
    └── utils

</pre>

## How to run the project
Install command:
<code>npm install</code>

Run command:
<code>npm run dev</code>

Build command:
<code>npm run build</code>

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
