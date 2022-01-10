import "./App.css";
import MainPageComponent from "./main/index";
import ProductPageComponent from "./product/index";
import UploadPageComponent from "./upload/index";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
       <div id="header">
        <div id="header-area">
          <img src="/images/icons/logo.png"/>
        </div>
      </div>
      <div id="body">
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
      <div id="footer"></div>
    </div>
  );
}

export default App;
