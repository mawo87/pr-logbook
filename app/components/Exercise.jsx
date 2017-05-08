import React from 'react';
import PropTypes from 'prop-types';

const Exercise = ({exercise}) => {
  return (
    <div>{exercise.name}</div>
  )
}

Exercise.propTypes = {
  exercise: PropTypes.object.isRequired
}

export default Exercise;
