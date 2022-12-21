## Following are the steps:

First follow the **Tailwind-for-production** steps inside this repo and then follow the following steps:

**Step 1:** Move the **input.css** file inside the **src** folder\
**Step 2:** Make a new file named **context.js** inside the **src** folder and write the following code in it:\
```
import React, { Component } from "react";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {};
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
```
**Step 3:** Your **index.js** file will look like the following:\
```
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>
);
reportWebVitals();
```


**Step 4:** Your **App.js** file will look like the following:\
```
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;
```
**Step 5:** Now as you have made a new file named **Home.js** inside the folder **Home** inside the folder **components**. Write the following code inside the **Home.js** file:\
```
import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import styles from "../../input.css";

export default class Home extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <div>
              <h1 className="bg-black text-yellow-300 cursor-pointer">
                This is home
              </h1>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
```
## Example of usage of context api inside component:\
```
import React, { Component } from "react";
import { ProductConsumer } from "../context";

export default class Tax extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { initialTax } = value;
          return (
            <div className="tax">
              <h1>Est. taxes & fees : </h1>
              <h1>${initialTax}</h1>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
```
