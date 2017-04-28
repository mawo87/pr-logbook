import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//UI components
import Header from './Header.jsx';
import Main from './Main.jsx';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Playground</h1>
          <Header/>
          <Main/>
        </div>
      </Router>
    );
  }
}
