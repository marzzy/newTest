import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./components/home/Home";
import NotFound from "./components/notFound/NotFound";
import Posts from "./components/posts/Posts";

/* Use components to define routes */
export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/posts/:id" exact component={Posts} />
    <Route component={NotFound} />
  </Switch>;
