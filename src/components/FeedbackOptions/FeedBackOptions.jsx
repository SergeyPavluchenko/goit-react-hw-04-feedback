import PropTypes from 'prop-types';
import { ButtonStyle } from './FeedbackOptions.styled';



const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <ButtonStyle
      key={option}
      name={option}
      type="button"
      onClick={onLeaveFeedback}
    >
    {option}
    </ButtonStyle>
  ));
};

FeedbackOptions.PropTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;