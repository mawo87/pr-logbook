import React from 'react';
import ExerciseList from './ExerciseList.jsx';

export default class ExerciseListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          exercises: [
            { id: 0, name: 'Backsquat' },
            { id: 1, name: 'Squat Clean' }
          ]
        };
    }

    render(){
        return (<ExerciseList exercises={this.state.exercises} />);
    }
}
