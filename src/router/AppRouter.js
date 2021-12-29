import React from "react";
import AddBook from "../components/AddBook";
import Header from "../components/Header";
import BooksList from "../components/BooksList";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
export default function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route component={BooksList} path="/" exact={true} />
            <Route component={AddBook} path="/add" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
