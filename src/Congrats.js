import React from 'react';
import propTypes from 'prop-types';
/**
 * Functional react componentfor congratulatory message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if success prop is false)
 */
const Congrats = (props) => {
  const { success } = props;
  if (success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};

Congrats.propTypes = {
  success: propTypes.bool.isRequired
};

export default Congrats;
