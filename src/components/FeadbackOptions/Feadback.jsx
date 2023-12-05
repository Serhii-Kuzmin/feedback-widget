import { Button, Wrapper } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeadbackOptions = ({ options, onLeaveFeadback }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={() => onLeaveFeadback(option)}
        >
          {option}
        </Button>
      ))}
    </Wrapper>
  );
};

FeadbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeadback: PropTypes.func.isRequired,
};
