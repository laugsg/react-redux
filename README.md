# Migrate HTML to React App

## Steps

1. Actions & Action Creators (Sync & Async)
2. Reducers
3. Middlewares
4. Components
5. import defaults (becareful! Not wrap into brackts!)
      1. `import reducers from ./reducers` because of default export
      1. `import middlewares from ./middlewares` because of default export
6. Create the Store
      1. `createStore(reducers, middlewares)`
7. Use Provider Component as Container
8. Load the App Component (exports ConnectedApp)