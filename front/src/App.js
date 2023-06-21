import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, Cart, AcceptedOrder, Cadastro, Login } from "./pages";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Cadastro} exact />
        <Route path="/home" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/accepted" component={AcceptedOrder} exact />
        <Route path="/" exact render={() => <Redirect to="/login" />} />
      </div>
      <Footer />
    </div>
  );
}
