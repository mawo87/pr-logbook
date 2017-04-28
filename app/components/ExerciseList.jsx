import React from 'react';
import ExerciseItem from './Exercise.jsx'

export default class ExerciseList extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
          <ul>
            {this.props.exercises.map((exercise) =>
              (<li><ExerciseItem exercise={exercise} /></li>)
            )}
          </ul>
        )
    }
}
