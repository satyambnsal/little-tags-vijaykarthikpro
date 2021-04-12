import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import * as ROUTES from "./constants/routes";
// import AccountPage from "./components/AccountPage/AccountPage";
import Login from "./components/Login/Login";
import ProductsListPage from "./components/ProductsListPage/ProductListPage";
import ProductDetailsPage from "./components/ProductDetailsPage/ProductDetailsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path={ROUTES.LANDING}>
            <HomePage />
          </Route>
          <Route path={ROUTES.ACCOUNT}>
            <Login />
          </Route>
          <Route path={ROUTES.OFFERS}>
            <ProductsListPage />
          </Route>
          <Route path={ROUTES.PRODUCT}>
            <ProductsListPage />
          </Route>
          <Route path={ROUTES.PRODUCT_DETAILS}>
            <ProductDetailsPage />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
