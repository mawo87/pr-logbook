import React from 'react';
import { connect } from 'react-redux';
import ExerciseList from './ExerciseList.jsx';
import store from '../store.js';

const mapStateToProps = (state) => {
  return {
    exercises: state.exercises
  };
};

class ExerciseListContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        //console.log('ExerciseListContainer :: render : ', store.getState());
        //const exercises = store.getState().exercises;

        let nextId = 3;

        return (
          <div>
            <ExerciseList exercises={this.props.exercises} />
            <input ref={node => { this.input = node; }} />
            <button onClick={() => {
                store.dispatch({
                    type: 'ADD_EXERCISE',
                    id: nextId++,
                    name: this.input.value
                });
              }}>Add Todo</button>
          </div>
        );
    }
}

export default connect(
  mapStateToProps
)(ExerciseListContainer);
