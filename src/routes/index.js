import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import * as Lazy from "./lazyPaths";

export default (
  <Suspense fallback={<></>}>
    <Switch>
      <Route exact path="/" component={props => <Lazy.PostList {...props} />} />
      <Route
        exact
        path="/postForm/:id?"
        component={props => <Lazy.PostForm {...props} />}
      />
      <Route
        exact
        path="/todos"
        component={props => <Lazy.ToDoList {...props} />}
      />
      <Route
        exact
        path="/toDoForm/:id?"
        component={props => <Lazy.ToDoForm {...props} />}
      />
      <Route component={props => <Lazy.ErrorPage {...props} />} />
    </Switch>
  </Suspense>
);
