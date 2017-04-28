import React from 'react';
import { Route, Switch } from 'react-router-dom';

//pages
import Home from './Home.jsx';
import ExerciseListContainer from './ExerciseListContainer.jsx';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/exercises" component={ExerciseListContainer} />
          </Switch>
        </div>
      );
    }
}
