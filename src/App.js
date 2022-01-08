import "./App.css";
import MainPageComponent from "./main/index";
import ProductPageComponent from "./product/index";
import UploadPageComponent from "./upload/index";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/product/:id">
          <ProductPageComponent />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPageComponent />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
