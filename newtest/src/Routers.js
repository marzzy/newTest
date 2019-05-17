import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import asyncComponent from './components/AsyncComponent';

/* Use components to define routes */
const AsyncHome = asyncComponent(() => import("./components/home/Home"));
const AsyncPost = asyncComponent(() => import("./components/posts/Posts"));
const AsyncNotFound = asyncComponent(() => import("./components/notFound/NotFound"));

export default () => 
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts/12">post</Link>
        </li>
        <li>
          <Link to="/posts/54">hiiiii</Link>
        </li>
        <li>
          <Link to="/ahmadpath">not matched</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={AsyncHome} />
        <Route path="/posts/:id" exact component={AsyncPost} />
        <Route component={AsyncNotFound} />
      </Switch>
    </div>
  </Router>;
