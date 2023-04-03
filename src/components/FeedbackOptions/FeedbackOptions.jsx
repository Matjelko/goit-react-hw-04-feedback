import "./FeedbackOptions.css";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return(
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  )
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func
}

export default FeedbackOptions;