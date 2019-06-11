import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from "./components/home/Home";
import Posts from "./components/posts/Posts";
import NotFound from "./components/notFound/NotFound";
// import asyncComponent from './components/AsyncComponent';

/* Use components to define routes */

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
        <Route path="/" exact component={Home} />
        <Route path="/posts/:id" exact component={Posts} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>;
