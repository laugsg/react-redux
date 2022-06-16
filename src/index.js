import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./components/App";

/** Redux Implementation
 * 1. Create Store
 * 2. Combine Reducers
 * 3. Apply Middlewares
 * 4. Use Provider Component as Container
 * 5. Load the App Component (exports ConnectedApp)
 */

import { createStore } from "redux";
import reducers from "./reducers/";
import middlewares from "./middleware/";
import { Provider } from "react-redux";

const store = createStore(reducers, middlewares);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
