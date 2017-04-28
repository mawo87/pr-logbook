import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
      return (
        <ul className="header">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/exercises">Exercises</Link></li>
        </ul>
      );
  }
}
