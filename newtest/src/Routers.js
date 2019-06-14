import React from 'react';
import loadable from 'react-loadable';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

function Loading(props) {
  if (props.error){
    // When the loader has errored
    return 'oooppppsssss';

  } else if (props.pastDelay) {
    // When the loader has taken longer than the delay
    return (<h3>Loading ... we know thats take a bit long,but plz keep calm ...</h3>);

  } else if (props.timedOut) {
    // When the loader has taken longer than the timeout
    return (
      <div>
        Taking a long time... 
        <button onClick={props.retry}>Retry</button>
      </div>);

  } else {
    // When the loader has just started
    return null;

  }
}

const Home = loadable ({
  loader: () => import('./components/home/Home'),
  loading: Loading
});

// 1. delay : Time to wait(in milliseconds) before passing props.pastDelay to your
//      loading component.This defaults to 200.
// 2. timeout: Time to wait(in milliseconds) before passing props.timedOut to your
//      loading component.This is turned off by default.
// 3. render : A function to customize the rendering of loaded modules.
        // example: it was more than 1 import in a file
const Posts = loadable({
  loader: () => import('./components/posts/Posts'),
  loading: Loading,
  delay: 300,
  timeout: 5000,
  // render(loaded, props) {
  //   let Component = loaded.default;
  //   return <Component {...props} />;
  // } // its just an example :D 
});

const NotFound = loadable({
  loader: () => import('./components/notFound/NotFound'),
  loading: Loading
});

export default () => 
  <Router>
    <div>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/posts/12">post</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/posts/54">hiiiii</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/ahmadpath">not matched</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/posts/:id" component={Posts} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>;
