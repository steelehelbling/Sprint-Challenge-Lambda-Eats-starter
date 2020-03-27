import React from "react";
import Form from "./components/Form";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
// const App = () => {
//   return (
//     <>
//       <h1>Lambda Eats</h1>
  
//       <Route exact path='/form' component={Form} /> 
//     </>
//   );
// };

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pizza">order</Link>
        </li>
      </nav>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
              <Route path="/pizza" component={Form} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
