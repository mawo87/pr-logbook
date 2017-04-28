import React from 'react';

const Exercise = ({exercise}) => {
  return (
    <div>{exercise.name}</div>
  )
}

Exercise.propTypes = {
  exercise: React.PropTypes.object.isRequired
}

export default Exercise;
